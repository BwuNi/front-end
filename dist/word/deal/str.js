"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WordTool_1 = require("../WordTool");
function default_1(wordTool) {
    wordTool.loadBreakRule([WordTool_1.CharType.Dquota], [WordTool_1.Status.inCall], (temp, status, type, char) => {
        temp = '';
        status = WordTool_1.Status.inStr;
        return { temp, status };
    });
    wordTool.loadBreakRule([WordTool_1.CharType.Dquota], [WordTool_1.Status.inStr], (temp, status, type, char) => {
        status = WordTool_1.Status.outCall;
        const words = [{
                type: WordTool_1.WordType.String,
                value: temp
            }];
        return { temp: '', words, status };
    });
    wordTool.loadBreakRule([
        WordTool_1.CharType.Blank,
        WordTool_1.CharType.Bquota,
        WordTool_1.CharType.Calcu,
        WordTool_1.CharType.Equal,
        WordTool_1.CharType.Error,
        WordTool_1.CharType.L,
        WordTool_1.CharType.Letter,
        WordTool_1.CharType.Number,
        WordTool_1.CharType.R,
        WordTool_1.CharType.Squota,
    ], [WordTool_1.Status.inStr], (temp, status, type, char) => {
        temp += char;
        return {
            temp,
            status
        };
    });
    wordTool.loadBreakRule([WordTool_1.CharType.Bslant], [WordTool_1.Status.inStr], (temp, status, type, char) => {
        status = WordTool_1.Status.Bslant;
        return { temp, status };
    });
    wordTool.loadBreakRule([WordTool_1.CharType.Bslant, WordTool_1.CharType.Dquota], [WordTool_1.Status.Bslant], (temp, status, type, char) => {
        temp += char;
        status = WordTool_1.Status.inStr;
        return { temp, status };
    });
}
exports.default = default_1;
//# sourceMappingURL=str.js.map