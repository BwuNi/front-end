"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("../FA/Char");
const wordType_1 = require("../FA/wordType");
function default_1(fa) {
    const s1 = Symbol(Math.random());
    const s2 = Symbol(Math.random());
    const s3 = Symbol(Math.random());
    const status = [s1, s2, s3];
    const end = [s3];
    const change = [
        {
            now: fa.start,
            accept: Char_1.CharType.Dquota,
            then: s1
        },
    ].concat(Char_1.charArr
        .filter(v => v.n !== Char_1.CharType.Dquota && v.n !== Char_1.CharType.Bslant)
        .map(v => ({
        now: s1,
        accept: v.n,
        then: s1
    }))).concat([
        {
            now: s1,
            accept: Char_1.CharType.Bslant,
            then: s2
        },
        {
            now: s2,
            accept: Char_1.CharType.Bslant,
            then: s1
        },
        {
            now: s2,
            accept: Char_1.CharType.Dquota,
            then: s1
        },
        {
            now: s1,
            accept: Char_1.CharType.Dquota,
            then: s3
        },
    ]);
    const map = {
        [s3.toString()]: wordType_1.default.String,
    };
    fa.addRule(status, end, change, map);
}
exports.default = default_1;
//# sourceMappingURL=string.js.map