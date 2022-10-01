import { useRef, useEffect } from "react";
import { useMoveToSection } from "@/contexts/MoveToSectionProvider";
import styles from "./scss/skill.module.scss";

function Skill() {
    const { skill__wrapper } = styles;
    const sectionRef = useRef(null);
    const { setAnchors } = useMoveToSection();
    useEffect(() => {
        setAnchors((pre) => ({ ...pre, skill: sectionRef.current.offsetTop }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className={skill__wrapper} ref={sectionRef}>
            <h2>Skill</h2>
        </section>
    );
}

export default Skill;
