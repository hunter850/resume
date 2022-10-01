import React, { useCallback, useContext, useRef } from "react";

const ScrollbarContext = React.createContext();
export function useScrollbar() {
    return useContext(ScrollbarContext);
}

function ScrollbarProvider(props) {
    const { children } = props;
    const bodyRef = useRef(document.body);
    const scrollPositionRef = useRef({ x: window.scrollX, y: window.scrollY });
    const hideScrollbar = useCallback(() => {
        // 紀錄x, y show的時候要位移
        scrollPositionRef.current.x = window.scrollX;
        scrollPositionRef.current.y = window.scrollY;
        // fixed right left bottom 0, top用scrollY計算就會留下scrollbar又不會移動畫面
        bodyRef.current.classList.add("hide_scrollbar");
        bodyRef.current.style.top = -scrollPositionRef.current.y + "px";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const showScrollbar = useCallback(() => {
        bodyRef.current.classList.remove("hide_scrollbar");
        bodyRef.current.style.top = null;
        window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <ScrollbarContext.Provider value={{ hideScrollbar, showScrollbar }}>{children}</ScrollbarContext.Provider>;
}

export default ScrollbarProvider;
