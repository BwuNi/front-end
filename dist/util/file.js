"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const fs = require("fs");
const line_1 = require("./line");
class SourceFile {
    constructor(path) {
        this.path = '';
        this.lines = [];
        this.isPushing = false;
        this.isShifting = false;
        this.holder = null;
        this._end = () => { };
        this.path = path;
    }
    createLine() {
        const fRead = fs.createReadStream(this.path);
        const objReadline = readline.createInterface({
            input: fRead
        });
        this.isPushing = true;
        objReadline.on('line', (line) => {
            this.pushLine(line);
            this.checkHolder();
        });
        objReadline.on('close', () => {
            this.isPushing = false;
        });
    }
    pushLine(line) {
        this.lines.push(new line_1.default(line));
    }
    createHolder() {
        return new Promise((res) => {
            this.holder = res;
        });
    }
    checkHolder() {
        if (this.holder) {
            const a = this.holder;
            this.holder = null;
            a();
        }
    }
    shiftLine() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = this.lines.shift();
            if (!res && this.isPushing == false) {
                return null;
            }
            else if (!res) {
                yield this.createHolder();
                return this.shiftLine();
            }
            else {
                return res;
            }
        });
    }
    iter(func) {
        return __awaiter(this, void 0, void 0, function* () {
            this.isShifting = true;
            if (!this.isPushing)
                this.createLine();
            let line = yield this.shiftLine();
            while (line) {
                if ((yield func(line)) === false)
                    break;
                line = yield this.shiftLine();
            }
            this.isShifting = false;
            this._end();
            return this;
        });
    }
    end(f) {
        this._end = f;
    }
}
exports.default = SourceFile;
//# sourceMappingURL=file.js.map