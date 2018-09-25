"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("./FA/Char");
const FA_1 = require("./FA");
const wordType_1 = require("./FA/wordType");
const nfa = new FA_1.default();
const s = [
    nfa.start,
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
nfa.change = nfa.change.concat([
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
]);
nfa.map[s[9].toString()] = wordType_1.default.KeyWord;
const dfa = nfa.toDfa();
dfa.load('\'');
dfa.load('"');
dfa.endLoad();
exports.default = dfa;
//# sourceMappingURL=test.js.map