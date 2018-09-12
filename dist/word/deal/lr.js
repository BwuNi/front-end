"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WordTool_1 = require("../WordTool");
function default_1(wordTool) {
    wordTool.loadBreakRule([WordTool_1.CharType.L], [WordTool_1.Status.inCall], (temp, status, type) => {
        temp = '';
        return {
            temp,
            words: [{
                    type: WordTool_1.WordType.L
                }]
        };
    });
    wordTool.loadBreakRule([WordTool_1.CharType.R], [WordTool_1.Status.inCall, WordTool_1.Status.inSign, WordTool_1.Status.inKey, WordTool_1.Status.inNumber, WordTool_1.Status.outCall], (temp, status) => {
        const words = [];
        if (status !== WordTool_1.Status.inCall && status !== WordTool_1.Status.outCall)
            words.push({
                type: status == WordTool_1.Status.inKey ? WordTool_1.WordType.Key
                    : status == WordTool_1.Status.inSign ? WordTool_1.WordType.Sign
                        : WordTool_1.WordType.Number,
                value: temp
            });
        words.push({ type: WordTool_1.WordType.R });
        status = WordTool_1.Status.outCall;
        temp = '';
        return {
            temp,
            status,
            words
        };
    });
}
exports.default = default_1;
//# sourceMappingURL=lr.js.map