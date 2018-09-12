"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharType;
(function (CharType) {
    CharType["Letter"] = "Letter";
    CharType["Number"] = "Number";
    CharType["Calcu"] = "Calcu";
    CharType["L"] = "L";
    CharType["R"] = "R";
    CharType["Blank"] = "Blank";
    CharType["Error"] = "Error";
    CharType["Dquota"] = "Dquota";
    CharType["Squota"] = "Squota";
    CharType["Bquota"] = "Bquota";
    CharType["Equal"] = "Equal";
    CharType["Bslant"] = "Bslant";
})(CharType || (CharType = {}));
exports.CharType = CharType;
const charMap = [
    { n: CharType.Letter, v: /[a-zA-Z]/, },
    { n: CharType.Calcu, v: /\-|\+|\*|\/|\^|\%/ },
    { n: CharType.L, v: /\(/ },
    { n: CharType.R, v: /\)/ },
    { n: CharType.Number, v: /[0-9]/ },
    { n: CharType.Blank, v: /\n|\t| / },
    { n: CharType.Equal, v: /=/ },
    { n: CharType.Bquota, v: /`/ },
    { n: CharType.Squota, v: /'/ },
    { n: CharType.Dquota, v: /"/ },
    { n: CharType.Bslant, v: /\\/ },
];
function checkChar(char) {
    for (let item of charMap) {
        if (item.v.test(char))
            return item.n;
    }
    return CharType.Error;
}
exports.checkChar = checkChar;
//# sourceMappingURL=char.js.map