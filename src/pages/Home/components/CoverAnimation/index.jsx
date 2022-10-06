import { useState, useEffect } from "react";
import styles from "./scss/coverAnimation.module.scss";
import useClass from "@/hooks/useClass";
import useTimeout from "@/hooks/useTimeout";

function CoverAnimation(props) {
    const { setShowProfile } = props;
    const {
        desk,
        "desk--clickthrough": desk_clickthrough,
        book,
        "book--big": book_big,
        page__left,
        page__right,
        "page__right--open": page__right_open,
        cover__left,
        cover__right,
        content__left,
        content__right,
        paper__left,
        paper__right,
        lines,
    } = styles;
    const c = useClass();
    const [isOpen, setIsOpen] = useState(false);
    const [clickThrough, setClickThrough] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [timer] = useTimeout();
    useEffect(() => {
        setIsOpen(true);
    }, []);
    function closeAnimation() {
        setShowAnimation(true);
        timer(() => {
            setClickThrough(true);
            setShowProfile(true);
        }, 1000);
    }
    return (
        <>
            <div className={c(desk, { [book_big]: showAnimation, [desk_clickthrough]: clickThrough })}>
                <div className={book}>
                    <div className={page__left}>
                        <div className={content__left}>
                            <div className={paper__left}>
                                <ul className={lines}>
                                    <li>不管您從哪裡獲得這本書</li>
                                    <li> </li>
                                    <li>這裡記錄了 Kevin 的經歷</li>
                                    <li> </li>
                                    <li>在此請讓我向您介紹</li>
                                    <li> </li>
                                    <li>一位充滿熱忱的前端工程師</li>
                                    <li> </li>
                                    <li>
                                        <button onClick={closeAnimation}>Let's Go !</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cover__left}></div>
                    </div>
                    <div className={c(page__right, { [page__right_open]: isOpen })}>
                        <div className={content__right}>
                            <div className={paper__right}></div>
                        </div>
                        <div className={cover__right}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoverAnimation;
