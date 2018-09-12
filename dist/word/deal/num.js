"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WordTool_1 = require("../WordTool");
function default_1(wordTool) {
    wordTool.loadBreakRule([WordTool_1.CharType.Number], [WordTool_1.Status.inCall], (temp, status, type, char) => {
        temp = char;
        status = WordTool_1.Status.inNumber;
        return { temp, status };
    });
    wordTool.loadBreakRule([WordTool_1.CharType.Number], [WordTool_1.Status.inNumber], (temp, status, type, char) => {
        status = WordTool_1.Status.inNumber;
        temp += char;
        return { temp, status };
    });
}
exports.default = default_1;
//# sourceMappingURL=num.js.map