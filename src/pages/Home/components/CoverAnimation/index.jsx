import { useState, useEffect } from "react";
import styles from "./scss/coverAnimation.module.scss";
import useClass from "@/hooks/useClass";
import { useScrollbar } from "@/contexts/ScrollbarProvider";
import useTimeout from "@/hooks/useTimeout";

function CoverAnimation() {
    const {
        desk,
        book,
        page,
        flip,
        cover,
        "desk--disapear": desk_disapear,
        "scale-animation": scale_animation,
        "book__enter-button": book__enterButton,
    } = styles;
    const c = useClass();
    const [enterAnimation, setEnterAnimation] = useState(false);
    const [canClickThrough, setCanClickThrough] = useState(false);
    const { showScrollbar, hideScrollbar } = useScrollbar();
    const [timer] = useTimeout();

    function scaleHandler() {
        setEnterAnimation(true);
        timer(() => {
            setCanClickThrough(true);
        }, 1000);
    }

    useEffect(() => {
        if (canClickThrough) {
            showScrollbar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [canClickThrough]);
    useEffect(() => {
        window.scrollTo(0, 0);
        timer(() => {
            hideScrollbar();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className={c(desk, { [desk_disapear]: canClickThrough })}>
                <div className={c(book, { [scale_animation]: enterAnimation })}>
                    <div className={c(page, flip)}></div>
                    <div className={cover}></div>
                    <div className={page}>
                        <ul>
                            <li>不管你從哪裡獲得本書</li>
                            <li>這裡記錄了 Kevin 的經歷</li>
                            <li>在此請讓我向您介紹</li>
                            <li>一位優質的前端工程師</li>
                            <li>
                                <button className={book__enterButton} onClick={scaleHandler}>
                                    Enter
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className={c(cover, flip)}></div>
                </div>
            </div>
        </>
    );
}

export default CoverAnimation;
