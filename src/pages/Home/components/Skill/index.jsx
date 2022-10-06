import { useRef, useEffect } from "react";
import { useMoveToSection } from "@/contexts/MoveToSectionProvider";
import { useBreakPoint } from "@/contexts/BreakPointProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Navigation } from "swiper";
import HeadingMark from "../HeadingMark";
import { throttle } from "lodash";
import styles from "./scss/skill.module.scss";

import { datas } from "./datas/datas";

function Skill() {
    const {
        skill__wrapper,
        slider,
        "slider__image-wrap": slider__imageWrap,
        slider__card,
        "slider__text-wrap": slider__textWrap,
    } = styles;
    const sectionRef = useRef(null);
    const { setAnchors } = useMoveToSection();
    const breakPoint = useBreakPoint();
    useEffect(() => {
        setAnchors((pre) => ({ ...pre, skill: sectionRef.current.offsetTop }));
        function resizeHandler() {
            setAnchors((pre) => ({ ...pre, skill: sectionRef.current.offsetTop }));
        }
        const throttleResize = throttle(resizeHandler, 300);
        window.addEventListener("resize", throttleResize);
        return () => {
            window.addEventListener("resize", throttleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className={skill__wrapper} ref={sectionRef}>
            <HeadingMark position="right">Skills</HeadingMark>
            <Swiper
                loop={true}
                slidesPerView={breakPoint > 0 ? 1.5 : 1}
                grabCursor={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                effect="creative"
                creativeEffect={{
                    prev: {
                        slideShadows: true,
                        translate: ["-120%", 0, -500],
                    },
                    next: {
                        slideShadows: true,
                        translate: ["120%", 0, -500],
                    },
                }}
                modules={[EffectCreative, Pagination, Navigation]}
                className={slider}
            >
                {datas.map((data) => (
                    <SwiperSlide key={data.id} className={slider__card}>
                        <div className={slider__imageWrap}>
                            <img src={data.img} alt={data.imgDescription} />
                        </div>
                        <ul className={slider__textWrap}>
                            {data.content.map((text) => (
                                <li key={text}>{text}</li>
                            ))}
                        </ul>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Skill;
