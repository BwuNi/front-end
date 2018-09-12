"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WordTool_1 = require("../WordTool");
function default_1(wordTool) {
    wordTool.loadBreakRule([WordTool_1.CharType.Blank], [WordTool_1.Status.inCall], (temp, status, type, char) => {
        return { temp: '' };
    });
    wordTool.loadBreakRule([WordTool_1.CharType.Blank], [WordTool_1.Status.outCall], (temp, status, type, char) => {
        status = WordTool_1.Status.inCall;
        return { temp: '', status };
    });
    wordTool.loadBreakRule([WordTool_1.CharType.Blank], [WordTool_1.Status.inKey, WordTool_1.Status.inSign, WordTool_1.Status.inNumber], (temp, status) => {
        const words = [{
                type: status == WordTool_1.Status.inKey ? WordTool_1.WordType.Key
                    : status == WordTool_1.Status.inSign ? WordTool_1.WordType.Sign
                        : WordTool_1.WordType.Number,
                value: temp
            }];
        status = WordTool_1.Status.inCall;
        temp = '';
        return {
            temp, status,
            words
        };
    });
}
exports.default = default_1;
//# sourceMappingURL=blank.js.map