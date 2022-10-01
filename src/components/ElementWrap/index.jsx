import React, { Fragment } from "react";

function ElementWrap(props) {
    const { children, component = null, ...others } = props;
    switch (component) {
        case null:
            return React.createElement(Fragment, {}, children);
        case "input":
            return React.createElement(component, { ...others });
        case "img":
            return React.createElement(component, { ...others });
        case "hr":
            return React.createElement(component, { ...others });
        case "br":
            return React.createElement(component, { ...others });
        default:
            return React.createElement(component, { ...others }, children);
    }
}

export default ElementWrap;
