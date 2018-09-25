"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("./Char");
const nfaToDfa_1 = require("./nfaToDfa");
class FA {
    constructor(start = Symbol('start')) {
        this.char = Char_1.charArr;
        this.map = {};
        this.change = [];
        this.finished = Symbol('finish');
        this.start = start;
        this.now = start;
        this.status = [start];
        this.end = [start];
        this.temp = '';
        this.result = [];
        this.change = [{
                now: start,
                accept: Char_1.CharType.Blank,
                then: start
            }, {
                now: start,
                accept: Char_1.CharType.Br,
                then: start
            }, {
                now: this.finished,
                accept: Char_1.CharType.Blank,
                then: start
            }, {
                now: this.finished,
                accept: Char_1.CharType.Br,
                then: start
            }];
    }
    reset() {
        this.now = this.start;
    }
    finish() {
        this.now = this.finished;
    }
    toDfa() {
        Object.assign(this, nfaToDfa_1.default(this));
        return this;
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
        for (let i of status) {
            console.log(this.map[i.toString()]);
            if (this.map[i.toString()]) {
                this.map[newone.toString()] = this.map[i.toString()];
                delete this.map[i.toString()];
            }
        }
        return newone;
    }
    load(char) {
        const charType = checkChar(char);
        let next = null;
        for (let i of this.change) {
            if ((i.now === this.now) && (i.accept === charType)) {
                next = i.then;
                break;
            }
        }
        if (next === null) {
            if (this.now == this.start) {
                throw new Error("token error1");
            }
            for (let v of this.end) {
                if (v === this.now) {
                    this.result.push({
                        value: this.temp,
                        status: this.map[this.now.toString()]
                    });
                    this.temp = '';
                    this.finish();
                    this.load(char);
                    return this.now;
                }
            }
            throw new Error("token error2");
        }
        this.temp += char;
        this.now = next;
        return null;
    }
    endLoad() {
        for (let v of this.end) {
            if (v === this.now) {
                this.result.push({
                    value: this.temp,
                    status: this.map[this.now.toString()]
                });
                this.temp = '';
                this.reset();
                return this.now;
            }
        }
        throw new Error("token error");
    }
    addRule(status, end, change, map) {
        this.status = this.status.concat(status);
        this.end = this.end.concat(end);
        this.change = this.change.concat(change);
        this.map = Object.assign({}, this.map, map);
        return this;
    }
}
exports.default = FA;
function checkChar(char) {
    for (let v of Char_1.charArr) {
        if (v.v.test(char))
            return v.n;
    }
    return Char_1.CharType.Error;
}
//# sourceMappingURL=index.js.map