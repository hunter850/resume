import { useCallback, useEffect } from "react";
import useTimeout from "./useTimeout";

function useDebounce() {
    const [timeout, stopTimeout] = useTimeout();
    useEffect(() => {
        return () => stopTimeout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return useCallback((callback, tick) => {
        return function () {
            stopTimeout();
            timeout(callback, tick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useDebounce;
