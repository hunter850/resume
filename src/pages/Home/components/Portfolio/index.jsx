import { useRef, useEffect, useMemo } from "react";
import { useMoveToSection } from "@/contexts/MoveToSectionProvider";
import HeadingMark from "../HeadingMark";
import { throttle } from "lodash";
import cumulativeOffset from "@/js/cumulativeOffset";
import styles from "./scss/portfolio.module.scss";
import { datas } from "./datas/datas";

function sortById(a, b) {
    return b.id - a.id;
}

function Portfolio() {
    const {
        portfolio__wrapper,
        portfolio__list,
        portfolio__card,
        portfolio__link,
        "portfolio__text-wrap": portfolio__text_wrap,
        "portfolio__tags-wrap": portfolio__tags_wrap,
    } = styles;
    const sectionRef = useRef(null);
    const { setAnchors } = useMoveToSection();
    const sortedDatas = useMemo(() => {
        return datas.sort(sortById);
    }, []);
    useEffect(() => {
        setAnchors((pre) => ({ ...pre, portfolio: cumulativeOffset(sectionRef.current).top }));
        function resizeHandler() {
            setAnchors((pre) => ({ ...pre, portfolio: cumulativeOffset(sectionRef.current).top }));
        }
        const throttleResize = throttle(resizeHandler, 300);
        window.addEventListener("resize", throttleResize);
        return () => {
            window.addEventListener("resize", throttleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className={portfolio__wrapper} ref={sectionRef}>
            <HeadingMark position="right">Portfolio</HeadingMark>
            <ul className={portfolio__list}>
                {sortedDatas.map((data) => (
                    <li className={portfolio__card} key={data.id}>
                        <a href={data.link} className={portfolio__link} target="_blank" rel="noreferrer">
                            <img src={data.image} alt={data.alt} />
                            <div className={portfolio__text_wrap}>
                                <h4>{data.title}</h4>
                                <p>{data.content}</p>
                            </div>
                            <ul className={portfolio__tags_wrap}>
                                {data.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Portfolio;
