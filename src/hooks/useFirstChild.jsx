function useFirstChild(jsxNode) {
    return (function unwrapChild(jsxNode, outputArray = []) {
        if (jsxNode.type?.description === "react.fragment" && jsxNode.props && jsxNode.props.children) {
            if (Array.isArray(jsxNode.props.children)) {
                for (let i = jsxNode.props.children.length - 1; i > 0; i--) {
                    outputArray.unshift(jsxNode.props.children[i]);
                }
                return unwrapChild(jsxNode.props.children[0], outputArray);
            } else {
                return unwrapChild(jsxNode.props.children, outputArray);
            }
        } else if (typeof jsxNode.type === "function") {
            return unwrapChild(jsxNode.type(jsxNode.props), outputArray);
        } else if (Array.isArray(jsxNode)) {
            for (let i = jsxNode.length - 1; i > 0; i--) {
                outputArray.unshift(jsxNode[i]);
            }
            return unwrapChild(jsxNode[0], outputArray);
        } else {
            return { targetChild: jsxNode, restChilds: outputArray };
        }
    })(jsxNode);
}

export default useFirstChild;
