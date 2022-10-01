import React, { useState, useContext } from "react";

const MoveToSectionContext = React.createContext();
export function useMoveToSection() {
    return useContext(MoveToSectionContext);
}

function MoveToSectionProvider(props) {
    const { children } = props;
    const [anchors, setAnchors] = useState({});
    return <MoveToSectionContext.Provider value={{ anchors, setAnchors }}>{children}</MoveToSectionContext.Provider>;
}

export default MoveToSectionProvider;
