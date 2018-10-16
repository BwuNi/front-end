"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Expr_1 = require("../../rules/Expr");
function isSet(str) {
    return /[a-z]([a-z]|[A-Z]|[0-9])*/;
}
class LR_1 {
}
exports.default = LR_1;
{
    [name, string];
    Expr_1.default;
}
closureTable: {
    [name, string];
    any;
}
constructor(exprs, { [name]: string, Expr: Expr_1.default }, name, string);
{
    this.closureTable = {};
    this.itemSet = [];
    this.exprTable = exprs;
}
goto();
{
}
closure();
{
}
createClosure(name, string);
{
    const expr = this.exprTable[name];
    const back = {};
    this.closureTable[name] = true;
    expr.rules.forEach(arr => {
        this.itemSet.push({
            list: arr,
            point: 0
        });
        arr.forEach(str => {
            if (isSet(str) && !this.closureTable[name])
                this.createClosure(str);
        });
    });
}
createGoto();
{
}
//# sourceMappingURL=index.js.map