"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("../FA/Char");
const wordType_1 = require("../FA/wordType");
function default_1(fa) {
    const s1 = Symbol(Math.random());
    const status = [s1];
    const end = [s1];
    const change = [
        {
            now: fa.start,
            accept: Char_1.CharType.Colon,
            then: s1
        },
        {
            now: fa.finished,
            accept: Char_1.CharType.Colon,
            then: s1
        }
    ];
    const map = {
        [s1.toString()]: wordType_1.default.Colon,
    };
    const endNowStart = [s1];
    fa.addRule(status, end, change, map, [], endNowStart, []);
}
exports.default = default_1;
//# sourceMappingURL=colon.js.map