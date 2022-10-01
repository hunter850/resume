import { useRef, useEffect } from "react";
import { useMoveToSection } from "@/contexts/MoveToSectionProvider";
import styles from "./scss/aboutMe.module.scss";

function AboutMe() {
    const { about__wrapper } = styles;
    const sectionRef = useRef(null);
    const { setAnchors } = useMoveToSection();
    useEffect(() => {
        setAnchors((pre) => ({ ...pre, aboutMe: sectionRef.current.offsetTop }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className={about__wrapper} ref={sectionRef}>
            <h2>About Me</h2>
        </section>
    );
}

export default AboutMe;
