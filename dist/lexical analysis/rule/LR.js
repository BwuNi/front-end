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
            accept: Char_1.CharType.L0,
            then: s1
        },
        {
            now: fa.finished,
            accept: Char_1.CharType.L0,
            then: s1
        },
        {
            now: fa.start,
            accept: Char_1.CharType.R0,
            then: s2
        },
        {
            now: fa.finished,
            accept: Char_1.CharType.R0,
            then: s2
        }
    ];
    const map = {
        [s1.toString()]: wordType_1.default.L0,
        [s2.toString()]: wordType_1.default.R0,
    };
    const endNowStart = [s1];
    const endNow = [s2];
    fa.addRule(status, end, change, map, endNow, endNowStart);
}
exports.default = default_1;
//# sourceMappingURL=LR.js.map