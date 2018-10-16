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
const Expr_1 = require("./Expr");
exports.default = (file) => new Promise((res, rej) => {
    let target = null;
    file.iter((line) => __awaiter(this, void 0, void 0, function* () {
        const data = line.data;
        const text = data.trim();
        if (text === "")
            return;
        const content = text.split('//')[0];
        const type = content.search(/\||(->)/) > -1 ? 'value' : 'name';
        if (type == 'value') {
            const arr = content.split('|').join('').split('->').join('').split(' ').filter(v => v !== '');
            if (target)
                target.addRule(arr);
        }
        else {
            target = new Expr_1.default(content);
        }
    }));
    file.end(function () {
        res(Expr_1.default.table);
    });
});
//# sourceMappingURL=index.js.map