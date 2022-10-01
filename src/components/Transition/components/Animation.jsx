import React, { useEffect, useState, useRef, useMemo } from "react";
import useClass from "../../../hooks/useClass";
import useNextTick from "../../../hooks/useNextTick";
import useTimeout from "../../../hooks/useTimeout";

function Animation(props) {
    const {
        children,
        show,
        enterTime,
        exitTime,
        time = 500,
        enterDelay,
        exitDelay,
        delay = 0,
        classNames = {
            enter: "",
            enterActive: "",
            enterDone: "",
            exit: "",
            exitActive: "",
            exitDone: "",
        },
        animationName = "animation",
        unmountOnExit = false,
        className = "",
        showJSX,
        setShowJSX,
        ...otherProps
    } = props;

    // show是function就return執行 其餘return Boolean
    const computedShow = useMemo(() => {
        if (typeof show === "function") {
            return show();
        } else {
            return !!show;
        }
    }, [show]);

    // 決定delay
    const enterAnimationDelay = enterDelay ? enterDelay : delay;
    const exitAnimationDelay = exitDelay ? exitDelay : delay;
    // 處理didUpdate
    const mountRef = useRef(false);
    // 決定className
    const aimationEnterTime =
        enterTime !== undefined && typeof enterTime === "number" ? (enterTime >= 0 ? enterTime : 0) : time;
    const aimationExitTime =
        exitTime !== undefined && typeof exitTime === "number" ? (exitTime >= 0 ? exitTime : 0) : time;
    const enter = classNames.enter || animationName + "-enter";
    const enterActive = classNames.enterActive || animationName + "-enter-active";
    const enterDone = classNames.enterDone || animationName + "-enter-done";
    const exit = classNames.exit || animationName + "-exit";
    const exitActive = classNames.exitActive || animationName + "-exit-active";
    const exitDone = classNames.exitDone || animationName + "-exit-done";
    // import 的 function
    const c = useClass();
    const [nextTick, stopTick] = useNextTick();
    const [timer, stopTimer] = useTimeout();
    // 算出children本身應該自帶的className
    const childClassName =
        children.props && children.props.className ? c(children.props.className, className) : c("", className);
    // 初始進場狀態
    const [nowClass, setNowClass] = useState(
        children.props && children.props.className
            ? computedShow
                ? c(childClassName, enterDone)
                : c(childClassName, exitDone)
            : computedShow
            ? c(childClassName, enterDone)
            : c(childClassName, exitDone)
    );
    useEffect(() => {
        // 進場 [顯示jsx] 並依序enter -> enterActive -> enterDone
        function enterAction() {
            if (unmountOnExit) {
                setShowJSX(true);
            }
            setNowClass(c(childClassName, enter));
            nextTick(() => {
                setNowClass(c(childClassName, enter, enterActive));
                timer(() => {
                    setNowClass(c(childClassName, enterDone));
                }, aimationEnterTime);
            });
        }
        // 退場 依序exit -> exitActive -> exitDone -> [移除jsx]
        function exitAction() {
            setNowClass(c(childClassName, exit));
            nextTick(() => {
                setNowClass(c(childClassName, exit, exitActive));
                timer(() => {
                    if (unmountOnExit) {
                        setShowJSX(false);
                    }
                    setNowClass(c(childClassName, exitDone));
                }, aimationExitTime);
            });
        }
        // didUpdate
        if (mountRef.current) {
            // 有無delay
            if (enterAnimationDelay === 0) {
                if (computedShow) {
                    enterAction();
                } else {
                    exitAction();
                }
            } else {
                if (computedShow) {
                    // 因後面有delay所以要先set一次給初始狀態
                    setNowClass(c(childClassName, exitDone));
                    timer(enterAction, enterAnimationDelay);
                } else {
                    setNowClass(c(childClassName, enterDone));
                    timer(exitAction, exitAnimationDelay);
                }
            }
        } else {
            mountRef.current = true;
        }
        return () => {
            stopTick();
            stopTimer();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        computedShow,
        enter,
        enterActive,
        enterDone,
        exit,
        exitActive,
        exitDone,
        childClassName,
        aimationEnterTime,
        aimationExitTime,
        enterAnimationDelay,
        exitAnimationDelay,
        unmountOnExit,
    ]);
    return showJSX
        ? typeof children === "function"
            ? children(otherProps)
            : React.cloneElement(React.Children.only(children), {
                  className: nowClass,
                  ...otherProps,
              })
        : "";
}

export default Animation;
