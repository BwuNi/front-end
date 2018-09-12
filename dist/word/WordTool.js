"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const char_1 = require("./char");
exports.CharType = char_1.CharType;
var Status;
(function (Status) {
    Status["inStr"] = "inStr";
    Status["inSign"] = "inSign";
    Status["inNumber"] = "inNumber";
    Status["inKey"] = "inKey";
    Status["inCall"] = "inCall";
    Status["outCall"] = "outCall";
    Status["Bslant"] = "Bslant";
})(Status || (Status = {}));
exports.Status = Status;
var WordType;
(function (WordType) {
    WordType["String"] = "String";
    WordType["Number"] = "Number";
    WordType["Calcu"] = "Calcu";
    WordType["L"] = "L";
    WordType["R"] = "R";
    WordType["Blank"] = "Blank";
    WordType["Error"] = "Error";
    WordType["Equal"] = "Equal";
    WordType["Sign"] = "Sign";
    WordType["Key"] = "Key";
})(WordType || (WordType = {}));
exports.WordType = WordType;
class WordTool {
    constructor() {
        this.search = {};
        this.temp = '';
        this.result = [];
        this.status = Status.inCall;
    }
    loadBreakRule(types, statuss, func) {
        types.forEach(c => {
            statuss.forEach(s => {
                if (!this.search[s])
                    this.search[s] = {};
                this.search[s][c] = func;
            });
        });
    }
    loadChar(char) {
        const type = char_1.checkChar(char);
        const func = this.search[this.status][type];
        if (!func) {
            console.log(this.getResult());
            console.log(this.temp);
            console.log(this.status, type);
        }
        const { temp, words = [], status = this.status } = func(this.temp, this.status, type, char);
        this.temp = temp;
        this.status = status;
        this.result = this.result.concat(words);
    }
    getResult() {
        return this.result;
    }
}
exports.WordTool = WordTool;
//# sourceMappingURL=WordTool.js.map