import styles from "./scss/container.module.scss";
import useClass from "@/hooks/useClass";

function Container(props) {
    const { children, className = "", full = true, ...others } = props;
    const c = useClass();
    const { container, px_200 } = styles;
    return (
        <div className={c(container, className, { [px_200]: full })} {...others}>
            {children}
        </div>
    );
}

export default Container;
