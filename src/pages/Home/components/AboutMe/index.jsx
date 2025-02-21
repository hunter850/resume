import { useRef, useEffect } from "react";
import { useMoveToSection } from "@/contexts/MoveToSectionProvider";
import HeadingMark from "../HeadingMark";
import { throttle } from "lodash";
import styles from "./scss/aboutMe.module.scss";

function AboutMe() {
    const {
        about__wrapper,
        about__content,
        about__constrain,
        about__info,
        "about__avatar-wrap": about__avatar_wrap,
        about__name,
        "about__text-wrap": about__text_wrap,
        about__paragraphs,
    } = styles;
    const sectionRef = useRef(null);
    const { setAnchors } = useMoveToSection();
    useEffect(() => {
        setAnchors((pre) => ({ ...pre, aboutMe: sectionRef.current.offsetTop }));
        function resizeHandler() {
            setAnchors((pre) => ({ ...pre, aboutMe: sectionRef.current.offsetTop }));
        }
        const throttleResize = throttle(resizeHandler, 300);
        window.addEventListener("resize", throttleResize);
        return () => {
            window.addEventListener("resize", throttleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className={about__wrapper} ref={sectionRef}>
            <HeadingMark>About Me</HeadingMark>
            <div className={about__content}>
                <div className={about__constrain}>
                    <div className={about__info}>
                        <div className={about__avatar_wrap}>
                            <img
                                src="https://res.cloudinary.com/dnfyx8lca/image/upload/v1664628395/IMG_3295_250x250_mukd79.jpg"
                                alt="avatar"
                            />
                        </div>
                        <h3 className={about__name}>羅貫文 Kevin Luo</h3>
                    </div>
                    <div className={about__text_wrap}>
                        <ul className={about__paragraphs}>
                            <li>進修經歷：資策會前端工程師就業養成班(2022.03~2022.08)</li>
                            <li>專案作品：咖啡電商網站、OverWatch及ASUS官網切版練習</li>
                            <li>專業技能：React、RWD、git版控</li>
                            <li>hunter850711@gmail.com</li>
                            <li>
                                <a href="https://github.com/hunter850" target="_blank" rel="noreferrer">
                                    github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
}

export default AboutMe;
