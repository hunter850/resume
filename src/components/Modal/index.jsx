import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import useTimeout from "../../hooks/useTimeout";
import useScrollbar from "../../hooks/useScrollbar";
import useClass from "../../hooks/useClass";
import ModalBody from "./components/ModalBody";
import ModalHeader from "./components/ModalHeader";
import ModalFooter from "./components/ModalFooter";
import cssStyles from "./modal.module.scss";

function Modal(props) {
    const {
        bgClassName = "",
        children,
        isOpen,
        setIsOpen,
        onOpen = () => {},
        onClose = () => {},
        closeButton = true,
        closeAble = true,
        className = "",
        style,
        teleportTo = document.querySelector("body"),
    } = props;
    const {
        close_button,
        modal_bg,
        modal_bord,
        bg_hidden,
        bg_show_init,
        bg_show_active,
        bord_hidden,
        bord_show_init,
        bord_show_active,
    } = cssStyles;

    const [backgroundAnimation, setBackgroundAnimation] = useState(bg_hidden);
    const [bordAnimation, setBordAnimation] = useState(bord_hidden);
    const [openTimer, stopOpenTimer] = useTimeout();
    const [initialTimer, stopInitialTimer] = useTimeout();
    const [hideScrollbar, showScrollbar] = useScrollbar();
    const c = useClass();
    const mountedRef = useRef(false);
    const closeHandler = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);
    useEffect(() => {
        if (mountedRef.current) {
            if (isOpen) {
                hideScrollbar();
                onOpen();
                setBackgroundAnimation(bg_show_init);
                setBordAnimation(bord_show_init);
                openTimer(() => {
                    setBackgroundAnimation(bg_show_active);
                    setBordAnimation(bord_show_active);
                }, 1);
            } else {
                showScrollbar();
                onClose();
                setBackgroundAnimation(bg_hidden);
                setBordAnimation(bord_hidden);
            }
        } else {
            mountedRef.current = true;
            // didMount時初始值是true 要直接進場
            if (isOpen) {
                hideScrollbar();
                onOpen();
                setBackgroundAnimation(bg_show_init);
                setBordAnimation(bord_show_init);
                initialTimer(() => {
                    setBackgroundAnimation(bg_show_active);
                    setBordAnimation(bord_show_active);
                }, 1);
            }
        }
        return () => {
            showScrollbar();
            stopOpenTimer();
            stopInitialTimer();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    useEffect(() => {
        return () => {
            setIsOpen(false);
            stopOpenTimer();
            stopInitialTimer();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const el = (
        <div onClick={closeAble ? closeHandler : () => {}} className={c(modal_bg, bgClassName, backgroundAnimation)}>
            <div style={style} onClick={(e) => e.stopPropagation()} className={c(modal_bord, className, bordAnimation)}>
                {closeButton && (
                    <button className={close_button} onClick={closeAble ? closeHandler : () => {}}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.6569 0.343378C11.8444 0.530914 11.9497 0.785269 11.9497 1.05049C11.9497 1.3157 11.8444 1.57005 11.6569 1.75759L7.41421 6.00023L11.6569 10.2429C11.8444 10.4304 11.9497 10.6848 11.9497 10.95C11.9497 11.2152 11.8444 11.4695 11.6569 11.6571C11.4693 11.8446 11.215 11.95 10.9497 11.95C10.6845 11.95 10.4302 11.8446 10.2426 11.6571L6 7.41445L1.75736 11.6571C1.56982 11.8446 1.31547 11.95 1.05025 11.95C0.785036 11.95 0.530682 11.8446 0.343146 11.6571C0.155609 11.4695 0.0502522 11.2152 0.0502522 10.95C0.0502522 10.6848 0.155609 10.4304 0.343146 10.2429L4.58579 6.00023L0.343146 1.75759C0.155609 1.57005 0.0502522 1.3157 0.0502522 1.05049C0.0502522 0.785269 0.155609 0.530914 0.343146 0.343378C0.530682 0.155841 0.785036 0.0504846 1.05025 0.0504846C1.31547 0.0504846 1.56982 0.155841 1.75736 0.343378L6 4.58602L10.2426 0.343378C10.4302 0.155841 10.6845 0.0504846 10.9497 0.0504846C11.215 0.0504846 11.4693 0.155841 11.6569 0.343378V0.343378Z"
                                fill="#324A59"
                            />
                        </svg>
                    </button>
                )}
                {children}
            </div>
        </div>
    );
    if (teleportTo === null) {
        return el;
    } else if (typeof teleportTo === "string") {
        return createPortal(el, document.querySelector(teleportTo));
    } else {
        return createPortal(el, teleportTo);
    }
}

export default Object.assign(Modal, {
    Body: ModalBody,
    Header: ModalHeader,
    Footer: ModalFooter,
});
