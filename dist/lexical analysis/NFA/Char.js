"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharType;
(function (CharType) {
    CharType["Letter"] = "Letter";
    CharType["Number"] = "Number";
    CharType["Equal"] = "Equal";
    CharType["Dot"] = "Dot";
    CharType["L0"] = "L0";
    CharType["R0"] = "R0";
    CharType["L1"] = "L1";
    CharType["R1"] = "R1";
    CharType["L2"] = "L2";
    CharType["R2"] = "R2";
    CharType["L3"] = "L3";
    CharType["R3"] = "R3";
    CharType["No"] = "!";
    CharType["Or"] = "|";
    CharType["Nd"] = "&";
    CharType["Calcu"] = "Calcu";
    CharType["Blank"] = "Blank";
    CharType["Dquota"] = "Dquota";
    CharType["Squota"] = "Squota";
    CharType["Bquota"] = "Bquota";
    CharType["Slant"] = "Slant";
    CharType["Bslant"] = "Bslant";
    CharType["None"] = "none";
    CharType["Error"] = "Error";
})(CharType || (CharType = {}));
exports.CharType = CharType;
const charArr = [
    { s: Symbol(Math.random()), n: CharType.Letter, v: /[a-zA-Z]/, },
    { s: Symbol(Math.random()), n: CharType.Number, v: /[0-9]/ },
    { s: Symbol(Math.random()), n: CharType.Equal, v: /=/ },
    { s: Symbol(Math.random()), n: CharType.Dot, v: /./ },
    { s: Symbol(Math.random()), n: CharType.L0, v: /\(/ },
    { s: Symbol(Math.random()), n: CharType.R0, v: /\)/ },
    { s: Symbol(Math.random()), n: CharType.L1, v: /\[/ },
    { s: Symbol(Math.random()), n: CharType.R1, v: /\]/ },
    { s: Symbol(Math.random()), n: CharType.L2, v: /{/ },
    { s: Symbol(Math.random()), n: CharType.R2, v: /}/ },
    { s: Symbol(Math.random()), n: CharType.L3, v: /</ },
    { s: Symbol(Math.random()), n: CharType.R3, v: />/ },
    { s: Symbol(Math.random()), n: CharType.No, v: /!/ },
    { s: Symbol(Math.random()), n: CharType.Or, v: /\|/ },
    { s: Symbol(Math.random()), n: CharType.Nd, v: /&/ },
    { s: Symbol(Math.random()), n: CharType.Calcu, v: /\-|\+|\*|\^|\%/ },
    { s: Symbol(Math.random()), n: CharType.Blank, v: /\n|\t| / },
    { s: Symbol(Math.random()), n: CharType.Bquota, v: /`/ },
    { s: Symbol(Math.random()), n: CharType.Squota, v: /'/ },
    { s: Symbol(Math.random()), n: CharType.Dquota, v: /"/ },
    { s: Symbol(Math.random()), n: CharType.Slant, v: /\// },
    { s: Symbol(Math.random()), n: CharType.Bslant, v: /\\/ },
    { s: Symbol(Math.random()), n: CharType.None, v: /\\/ },
];
exports.charArr = charArr;
const charTypeMap = charArr.reduce((r, v) => {
    r[v.n] = v;
    return r;
}, {});
exports.charTypeMap = charTypeMap;
const charSymbolMap = charArr.reduce((r, v) => {
    r[v.s.toString()] = v;
    return r;
}, {});
exports.charSymbolMap = charSymbolMap;
exports.default = CharType;
//# sourceMappingURL=Char.js.map