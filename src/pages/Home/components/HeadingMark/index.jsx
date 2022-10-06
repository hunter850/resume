import useClass from "@/hooks/useClass";
import styles from "./scss/headingMark.module.scss";

function HeadingMark(props) {
    const { children, position = "left" } = props;
    const { "heading--left": heading_left, "heading--right": heading_right } = styles;
    const c = useClass();
    return (
        <h2 className={c({ [heading_left]: position === "left", [heading_right]: position === "right" })}>
            {children}
        </h2>
    );
}

export default HeadingMark;
