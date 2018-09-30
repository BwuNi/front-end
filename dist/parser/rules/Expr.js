"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wordType_1 = require("../../lexical analysis/FA/wordType");
class Expr {
    constructor() {
        this.rules = [];
    }
    addRule(list) {
        this.rules.push(list);
    }
}
const expr = new Expr();
const e0 = [
    expr,
    { type: wordType_1.default.Calcu },
    expr
];
const e1 = [
    { type: wordType_1.default.L0 },
    expr,
    { type: wordType_1.default.R0 },
];
const e2 = [
    { type: wordType_1.default.Sign },
    expr,
    { type: wordType_1.default.L1 },
    expr,
    { type: wordType_1.default.R1 },
];
const e3 = [
    { type: wordType_1.default.Sign },
    expr,
    { type: wordType_1.default.L1 },
    expr,
    { type: wordType_1.default.R1 },
];
//# sourceMappingURL=Expr.js.map