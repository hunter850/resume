import Animation from "./Animation";
import useFirstChild from "../../../hooks/useFirstChild";

function UnwrapElement(props) {
    const { children, ...otherProps } = props;
    const { targetChild } = useFirstChild(children);
    return <Animation {...otherProps}>{targetChild}</Animation>;
}

export default UnwrapElement;
