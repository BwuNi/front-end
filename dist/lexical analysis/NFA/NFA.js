"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("./Char");
const Change_1 = require("./Change");
class FA {
    constructor() {
        this.char = Char_1.charArr;
        this.start = Symbol();
        this.status = [];
        this.end = [];
        this.change = Change_1.changeArr;
    }
    mergeStatus(status) {
        const searchMap = status.reduce((r, v) => {
            r[v.toString()] = true;
            return r;
        }, {});
        const newone = Symbol(Math.random());
        if (searchMap[this.start.toString()])
            this.start = newone;
        this.status = this.status.filter(v => !searchMap[v.toString()]);
        this.status.push(newone);
        const i = this.end.length;
        this.end = this.end.filter(v => !searchMap[v.toString()]);
        if (i > this.end.length)
            this.end.push(newone);
        this.change.forEach(v => {
            if (searchMap[v.then.toString()])
                v.then = newone;
            if (searchMap[v.now.toString()])
                v.now = newone;
        });
        this.change = this.change.filter(v => !((v.then == newone) &&
            (v.now == newone) &&
            (v.accept == Char_1.CharType.None)));
        return newone;
    }
}
exports.default = FA;
//# sourceMappingURL=NFA.js.map