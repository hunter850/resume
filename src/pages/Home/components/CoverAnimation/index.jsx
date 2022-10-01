import { useEffect } from "react";
import styles from "./scss/coverAnimation.module.scss";
import useClass from "@/hooks/useClass";
import { useScrollbar } from "@/contexts/ScrollbarProvider";

function CoverAnimation(props) {
    const { showCover, setShowCover } = props;
    const {
        cover__bg,
        "cover__bg--off": cover__bg_off,
        cover__texts,
        "cover__enter-button": cover__enterButton,
    } = styles;
    const c = useClass();
    const { showScrollbar, hideScrollbar } = useScrollbar();
    useEffect(() => {
        if (showCover) {
            hideScrollbar();
        } else {
            showScrollbar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showCover]);
    return (
        <>
            <div className={c(cover__bg, { [cover__bg_off]: !showCover })}>
                <ul className={cover__texts}>
                    <li>Hi I'm Kevin</li>
                    <li>
                        <button className={cover__enterButton} onClick={() => setShowCover(false)}>
                            enter
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default CoverAnimation;
