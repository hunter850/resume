import { useCallback } from "react";
import trimStr from "../js/trimStr";
import newLineToSpace from "../js/newLineToSpace";

function useClass() {
    return useCallback(function c() {
        const stringArray = [];
        for (let i = 0; i < arguments.length; i++) {
            const item = arguments[i];
            if (typeof item === "string" && trimStr(newLineToSpace(item)) !== "") {
                stringArray.push(trimStr(newLineToSpace(item)));
            } else if (Array.isArray(item)) {
                if (item.length) {
                    stringArray.push(c.apply(null, item));
                }
            } else if (typeof item === "object" && item.toString === Object.prototype.toString) {
                for (let key in item) {
                    if (item[key] && trimStr(key) !== "") {
                        stringArray.push(trimStr(key));
                    }
                }
            }
        }
        return stringArray.join(" ");
    }, []);
}

export default useClass;
