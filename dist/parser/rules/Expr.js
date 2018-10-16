"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Expr {
    constructor(name) {
        this.name = name;
        this.rules = [];
        Expr.table[name] = this;
    }
    addRule(arr) {
        this.rules.push(arr);
    }
}
Expr.table = {};
exports.default = Expr;
//# sourceMappingURL=Expr.js.map