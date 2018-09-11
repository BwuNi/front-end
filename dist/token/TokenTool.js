"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["Wording"] = 0] = "Wording";
    Status[Status["Wordend"] = 1] = "Wordend";
    Status[Status["Callend"] = 2] = "Callend";
    Status[Status["Calling"] = 3] = "Calling";
    Status[Status["Figuring"] = 4] = "Figuring";
    Status[Status["Figurend"] = 5] = "Figurend";
    Status[Status["String"] = 6] = "String";
    Status[Status["Strend"] = 7] = "Strend";
    Status[Status["Blank"] = 8] = "Blank";
    Status[Status["Statement"] = 9] = "Statement";
})(Status || (Status = {}));
exports.Status = Status;
var CharType;
(function (CharType) {
    CharType[CharType["Letter"] = 0] = "Letter";
    CharType[CharType["Number"] = 1] = "Number";
    CharType[CharType["Calcu"] = 2] = "Calcu";
    CharType[CharType["L"] = 3] = "L";
    CharType[CharType["R"] = 4] = "R";
    CharType[CharType["Blank"] = 5] = "Blank";
    CharType[CharType["Error"] = 6] = "Error";
})(CharType || (CharType = {}));
exports.CharType = CharType;
class TokenTool {
    constructor() {
        this.search = {};
        this.temp = '';
        this.stack = [{ args: [] }];
        this.status = Status.Calling;
    }
    loadRule(status, charType, func) {
        status.forEach(s => {
            charType.forEach(c => {
                if (!this.search[s])
                    this.search[s] = {};
                this.search[s][c] = func;
            });
        });
    }
    loadChar(char) {
        const charType = checkChar(char);
        const status = this.status;
        const func = this.search[status]
            ? this.search[status][charType]
                ? this.search[status][charType]
                : null
            : null;
        if (func) {
            const res = func(char, this.temp, this.stack, this.status);
            this.temp = res.temp;
            this.stack = res.stack;
            this.status = res.status;
        }
    }
    getResult() {
        if (this.stack.length === 1)
            return this.stack[0];
        return null;
    }
}
exports.default = TokenTool;
exports.TokenTool = TokenTool;
function checkChar(char) {
    return (/[a-zA-Z]/.test(char) ? CharType.Letter
        : /\-|\+|\*|\/|\^|\%/.test(char) ? CharType.Calcu
            : /[0-9]/.test(char) ? CharType.Number
                : /\(/.test(char) ? CharType.L
                    : /\)/.test(char) ? CharType.R
                        : /\n|\t| /.test(char) ? CharType.Blank
                            : CharType.Error);
}
//# sourceMappingURL=TokenTool.js.map