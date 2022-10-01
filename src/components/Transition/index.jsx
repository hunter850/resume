import { Fragment, useState, useEffect, useMemo } from "react";
import { v4 } from "uuid";
import UnwrapElement from "./components/UnwrapElement";
import useFirstChild from "../../hooks/useFirstChild";

function Transition(props) {
    const { children, memoContent, ...otherProps } = props;
    const { restChilds } = useFirstChild(children);
    const [randomKey, setRandomKey] = useState(v4());
    const [showJSX, setShowJSX] = useState(props.show ? true : props.unmountOnExit ? false : true);
    const constantKey = useMemo(() => {
        return v4();
    }, []);
    useEffect(() => {
        if (showJSX === false) {
            setRandomKey(v4());
        }
    }, [showJSX]);
    return (
        <Fragment>
            <UnwrapElement
                {...otherProps}
                showJSX={showJSX}
                setShowJSX={setShowJSX}
                key={memoContent ? constantKey : randomKey}
            >
                {children}
            </UnwrapElement>
            {restChilds}
        </Fragment>
    );
}

export default Transition;
