"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wordType_1 = require("../../lexical analysis/FA/wordType");
const wordTable = {
    '`number': { type: wordType_1.default.Number },
    '`sign': { type: wordType_1.default.Sign },
    '`string': { type: wordType_1.default.String },
    '*let': { type: wordType_1.default.KeyWord, value: /let/ },
    '(': { type: wordType_1.default.L0 },
    ')': { type: wordType_1.default.R0 },
    '[': { type: wordType_1.default.L1 },
    ']': { type: wordType_1.default.R1 },
    '{': { type: wordType_1.default.L1 },
    '}': { type: wordType_1.default.R1 },
    ':': { type: wordType_1.default.Colon },
    '=': { type: wordType_1.default.Equal },
    'Nil': { type: wordType_1.default.None },
};
exports.default = wordTable;
//# sourceMappingURL=wordTable.js.map