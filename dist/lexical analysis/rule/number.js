"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("../FA/Char");
const wordType_1 = require("../FA/wordType");
function default_1(fa) {
    const s1 = Symbol(Math.random());
    const s2 = Symbol(Math.random());
    const status = [s1, s2];
    const end = [s1, s2];
    const change = [
        {
            now: fa.start,
            accept: Char_1.CharType.Number,
            then: s1
        },
        {
            now: s1,
            accept: Char_1.CharType.Number,
            then: s1
        },
        {
            now: s1,
            accept: Char_1.CharType.Dot,
            then: s2
        },
        {
            now: s2,
            accept: Char_1.CharType.Number,
            then: s2
        }
    ];
    const map = {
        [s1.toString()]: wordType_1.default.Number,
        [s2.toString()]: wordType_1.default.Number,
    };
    fa.addRule(status, end, change, map);
}
exports.default = default_1;
//# sourceMappingURL=number.js.map