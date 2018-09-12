"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WordTool_1 = require("../WordTool");
function default_1(wordTool) {
    wordTool.loadBreakRule([WordTool_1.CharType.Bquota], [WordTool_1.Status.inCall], (temp, status, type, char) => {
        temp = char;
        status = WordTool_1.Status.inKey;
        return { temp, status };
    });
    wordTool.loadBreakRule([WordTool_1.CharType.Number, WordTool_1.CharType.Letter], [WordTool_1.Status.inKey], (temp, status, type, char) => {
        status = WordTool_1.Status.inKey;
        temp += char;
        return { temp, status };
    });
}
exports.default = default_1;
//# sourceMappingURL=key.js.map