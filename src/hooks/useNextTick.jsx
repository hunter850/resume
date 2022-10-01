import { useCallback } from "react";

const useNextTick = () => {
    return useCallback((fn) => {
        return Promise.resolve().then(fn);
    }, []);
};

export default useNextTick;
