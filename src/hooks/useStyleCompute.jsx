import gsap from "gsap";

const useStyleCompute = () => {
    return function (toState, fromState, set, time = 0.5, easing = "power1.out") {
        if (Object.keys(toState).indexOf("opacity") >= 0 && Object.keys(fromState).indexOf("opacity") === -1) {
            fromState = { ...fromState, opacity: 1 };
        }
        if (Object.keys(toState).indexOf("display") >= 0 && Object.keys(fromState).indexOf("display") === -1) {
            fromState = { ...fromState, display: "block" };
        }
        if (Object.keys(toState).indexOf("transform") >= 0 && Object.keys(fromState).indexOf("transform") === -1) {
            fromState = { ...fromState, transform: "none" };
        }
        if (Object.keys(toState).indexOf("fontSize") >= 0 && Object.keys(fromState).indexOf("fontSize") === -1) {
            fromState = { ...fromState, fontSize: "16px" };
        }
        Object.keys(toState).forEach((k) => {
            if (fromState[k] === undefined) {
                fromState[k] = "";
            }
        });
        const tempObj = { ...fromState };
        gsap.to(tempObj, { ...toState, duration: time, ease: easing });
        set(() => {
            delete tempObj._gsap;
            return { ...tempObj };
        });
        let start;
        let stopFlag;
        (function step(timestamp) {
            delete tempObj._gsap;
            if (!start) {
                start = timestamp;
                stopFlag = window.requestAnimationFrame(step);
                return;
            }
            const progress = timestamp - start;
            if (progress < time * 1000) {
                set(() => ({ ...tempObj }));
                stopFlag = window.requestAnimationFrame(step);
                return;
            } else {
                cancelAnimationFrame(stopFlag);
                set(() => ({ ...fromState, ...toState }));
            }
        })();
    };
};

export default useStyleCompute;
