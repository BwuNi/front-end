"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("./NFA/Char");
const NFA_1 = require("./NFA/NFA");
const nfaToDfa_1 = require("./NFA/nfaToDfa");
function test() {
    const nfa = new NFA_1.default();
    const s = [
        Symbol('n0'),
        Symbol('n1'),
        Symbol('n2'),
        Symbol('n3'),
        Symbol('n4'),
        Symbol('n5'),
        Symbol('n6'),
        Symbol('n7'),
        Symbol('n8'),
        Symbol('n9'),
    ];
    nfa.status = s;
    nfa.start = s[0];
    nfa.end = [s[9]];
    nfa.change = [
        {
            now: s[0],
            accept: Char_1.CharType.Squota,
            then: s[1],
        },
        {
            now: s[1],
            accept: Char_1.CharType.None,
            then: s[2],
        },
        {
            now: s[2],
            accept: Char_1.CharType.None,
            then: s[3],
        },
        {
            now: s[2],
            accept: Char_1.CharType.None,
            then: s[9],
        },
        {
            now: s[3],
            accept: Char_1.CharType.None,
            then: s[4],
        },
        {
            now: s[3],
            accept: Char_1.CharType.None,
            then: s[6],
        },
        {
            now: s[4],
            accept: Char_1.CharType.Dquota,
            then: s[5],
        },
        {
            now: s[5],
            accept: Char_1.CharType.None,
            then: s[8],
        },
        {
            now: s[6],
            accept: Char_1.CharType.Bquota,
            then: s[7],
        },
        {
            now: s[7],
            accept: Char_1.CharType.None,
            then: s[8],
        },
        {
            now: s[8],
            accept: Char_1.CharType.None,
            then: s[9],
        },
        {
            now: s[8],
            accept: Char_1.CharType.None,
            then: s[3],
        },
    ];
    const dfa = nfaToDfa_1.default(nfa);
    console.log(dfa);
}
exports.default = test;
//# sourceMappingURL=index.js.map