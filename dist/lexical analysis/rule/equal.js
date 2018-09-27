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
            accept: Char_1.CharType.Equal,
            then: s1
        },
        {
            now: fa.finished,
            accept: Char_1.CharType.Equal,
            then: s1
        },
        {
            now: s1,
            accept: Char_1.CharType.Equal,
            then: s2
        }
    ];
    const map = {
        [s1.toString()]: wordType_1.default.Set,
        [s2.toString()]: wordType_1.default.Equal,
    };
    const endNowStart = [s2];
    const endCanStart = [s1];
    fa.addRule(status, end, change, map, [], endNowStart, endCanStart);
}
exports.default = default_1;
//# sourceMappingURL=equal.js.map