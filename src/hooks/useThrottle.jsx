import { useCallback, useRef, useEffect } from "react";
import useTimeout from "./useTimeout";

function useThrottle() {
    const [timeout, stopTimeout] = useTimeout();
    const canRunRef = useRef(true);
    const callAgainNexTickRef = useRef(false);
    useEffect(() => {
        return () => {
            canRunRef.current = true;
            callAgainNexTickRef.current = false;
            stopTimeout();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return useCallback((callback, tick) => {
        return function () {
            if (canRunRef.current) {
                canRunRef.current = false;
                callback();
                (function loop() {
                    timeout(() => {
                        if (callAgainNexTickRef.current) {
                            callback();
                            callAgainNexTickRef.current = false;
                            loop();
                        } else {
                            canRunRef.current = true;
                        }
                    }, tick);
                })();
            } else {
                callAgainNexTickRef.current = true;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useThrottle;
