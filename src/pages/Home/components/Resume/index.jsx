import { useRef, useEffect } from "react";
import { useMoveToSection } from "@/contexts/MoveToSectionProvider";
import styles from "./scss/resume.module.scss";

function Resume() {
    const { resume__wrapper } = styles;
    const sectionRef = useRef(null);
    const { setAnchors } = useMoveToSection();
    useEffect(() => {
        setAnchors((pre) => ({ ...pre, resume: sectionRef.current.offsetTop }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className={resume__wrapper} ref={sectionRef}>
            <h2>Resume</h2>
        </section>
    );
}

export default Resume;
