"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("../lexical analysis/FA/Char");
const wordType_1 = require("../lexical analysis/FA/wordType");
function default_1(fa) {
    const s1 = Symbol(Math.random());
    const s2 = Symbol(Math.random());
    const status = [s1, s2];
    const end = [s1, s2];
    const change = [
        {
            now: fa.start,
            accept: Char_1.CharType.Letter,
            then: s1
        },
        {
            now: s1,
            accept: Char_1.CharType.Letter,
            then: s2
        },
        {
            now: s1,
            accept: Char_1.CharType.Number,
            then: s2
        },
        {
            now: s2,
            accept: Char_1.CharType.Letter,
            then: s2
        },
        {
            now: s2,
            accept: Char_1.CharType.Number,
            then: s2
        }
    ];
    const map = {
        [s1.toString()]: wordType_1.default.Sign,
        [s2.toString()]: wordType_1.default.Sign,
    };
    fa.addRule(status, end, change, map);
}
exports.default = default_1;
//# sourceMappingURL=word.js.map