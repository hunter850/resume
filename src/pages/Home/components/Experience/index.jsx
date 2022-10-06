import { useRef, useEffect } from "react";
import { useMoveToSection } from "@/contexts/MoveToSectionProvider";
import HeadingMark from "../HeadingMark";
import { throttle } from "lodash";
import styles from "./scss/experience.module.scss";

import { experiences } from "./datas/experiences";

function Experience() {
    const { experience__wrapper, experience__list } = styles;
    const sectionRef = useRef(null);
    const { setAnchors } = useMoveToSection();
    useEffect(() => {
        setAnchors((pre) => ({ ...pre, experience: sectionRef.current.offsetTop }));
        function resizeHandler() {
            setAnchors((pre) => ({ ...pre, experience: sectionRef.current.offsetTop }));
        }
        const throttleResize = throttle(resizeHandler, 300);
        window.addEventListener("resize", throttleResize);
        return () => {
            window.addEventListener("resize", throttleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className={experience__wrapper} ref={sectionRef}>
            <HeadingMark>Experiences</HeadingMark>
            <ul className={experience__list}>
                {experiences.map((experience) => (
                    <li key={experience.id}>
                        <span>{experience.time}</span>
                        <p>{experience.content}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Experience;
