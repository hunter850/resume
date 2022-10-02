import { useCallback } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

function useScrollTo() {
    gsap.registerPlugin(ScrollToPlugin);
    return useCallback((position, time = 1, easing = "power1.out") => {
        gsap.to(window, {
            duration: time,
            scrollTo: { y: position },
            ease: easing,
        });
    }, []);
}

export default useScrollTo;
