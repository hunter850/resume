import { useRef, useEffect } from "react";
import { useMoveToSection } from "@/contexts/MoveToSectionProvider";
import styles from "./scss/portfolio.module.scss";

function Portfolio() {
    const { portfolio__wrapper } = styles;
    const sectionRef = useRef(null);
    const { setAnchors } = useMoveToSection();
    useEffect(() => {
        setAnchors((pre) => ({ ...pre, portfolio: sectionRef.current.offsetTop }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className={portfolio__wrapper} ref={sectionRef}>
            <h2>Portfolio</h2>
        </section>
    );
}

export default Portfolio;
