import { useState, useEffect, useRef } from "react";
import styles from "./scss/navbar.module.scss";
import Container from "@/components/Container";
import { FaBars } from "react-icons/fa";
import CloseIcon from "./components/CloseIcon";
import { useScrollbar } from "@/contexts/ScrollbarProvider";
import useClass from "@/hooks/useClass";
import { throttle } from "lodash";

function Navbar() {
    const {
        nav__heading,
        nav__wrap,
        "nav__wrap-blur": nav__wrap_blur,
        nav__container,
        nav__button,
        nav__hamburger,
        nav__cover,
        "nav__cover--active": nav__cover_active,
        "nav__cover--inactive": nav__cover_inactive,
        nav__bord,
        "nab__bord--active": nav__bord_active,
        nav__close,
        nav__links,
        nav__link,
    } = styles;
    const bodyRef = useRef(document.body);
    const c = useClass();
    const { hideScrollbar, showScrollbar } = useScrollbar();
    const [showSideNav, setShowSideNav] = useState(false);
    function openHandler(event) {
        event.stopPropagation();
        hideScrollbar();
        setShowSideNav(true);
    }
    function closeHandler(event) {
        event.stopPropagation();
        showScrollbar();
        setShowSideNav(false);
    }
    useEffect(() => {
        function resizeHandler() {
            if (window.innerWidth >= 576) {
                bodyRef.current.classList.remove("hide_scrollbar");
                bodyRef.current.style.top = null;
                setShowSideNav(false);
            }
        }
        const throttleResize = throttle(resizeHandler, 100);
        window.addEventListener("resize", throttleResize);
        return () => {
            window.removeEventListener("resize", throttleResize);
        };
    }, []);
    return (
        <nav className={c(nav__wrap, { [nav__wrap_blur]: !showSideNav })}>
            <Container className={nav__container}>
                <button className={nav__button} onClick={openHandler}>
                    <FaBars className={nav__hamburger} />
                </button>
                <div
                    className={c(nav__cover, { [nav__cover_active]: showSideNav, [nav__cover_inactive]: !showSideNav })}
                    onClick={closeHandler}
                >
                    <div
                        className={c(nav__bord, { [nav__bord_active]: showSideNav })}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h1 className={nav__heading}>Kevin's Resume</h1>
                        <button className={nav__close} onClick={closeHandler}>
                            <CloseIcon />
                        </button>
                        <ul className={nav__links}>
                            <li className={nav__link}>
                                <a href="#/">首頁</a>
                            </li>
                            <li className={nav__link}>
                                <a href="#/">簡歷</a>
                            </li>
                            <li className={nav__link}>
                                <a href="#/">作品集</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;
