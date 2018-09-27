"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wordType_1 = require("../lexical analysis/FA/wordType");
const keyMap = [
    'let'
].reduce((r, v) => {
    r[v] = true;
    return r;
}, {});
function default_1(arr) {
    return arr.map(v => v.status == wordType_1.default.Sign && v.value == 'let' ? {
        value: v.value,
        status: wordType_1.default.KeyWord
    } : v);
}
exports.default = default_1;
//# sourceMappingURL=keyword.js.map