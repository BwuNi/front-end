"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WordTool_1 = require("./WordTool");
exports.Status = WordTool_1.Status;
exports.CharType = WordTool_1.CharType;
exports.WordType = WordTool_1.WordType;
const deal_1 = require("./deal");
const wordTool = new WordTool_1.WordTool();
exports.wordTool = wordTool;
deal_1.default.forEach(v => {
    v(wordTool);
});
//# sourceMappingURL=index.js.map