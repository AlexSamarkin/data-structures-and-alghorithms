import {Stack} from "../../stack/stack";

export const map = new Map();
map.set("]", "[");
map.set(")", "(");
map.set("}", "{");

export const checkBrackets = (str: string): boolean => {
    const stack = new Stack<string>();
    for (let i = 0; i < str.length; ++i) {
        switch (str[i]) {
            case "[":
            case "(":
            case "{":
                stack.push(str[i]);
                break;
            case "]":
            case "}":
            case ")":
                const last = stack.pop();
                if (last !== map.get(str[i])) {
                    return false;
                }
        }
    }

    return !stack.length();
}