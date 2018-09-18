"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status["outCall"] = "outCall";
    Status["inCall"] = "inCall";
})(Status || (Status = {}));
exports.Status = Status;
const statusArr = [
    { s: Symbol(Math.random()), n: Status.outCall },
    { s: Symbol(Math.random()), n: Status.inCall }
];
exports.statusArr = statusArr;
const StatusMap = statusArr.reduce((r, v) => {
    r[v.n] = v;
    return r;
}, {});
exports.StatusMap = StatusMap;
const StatusSymbolMap = statusArr.reduce((r, v) => {
    r[v.s.toString()] = v;
    return r;
}, {});
exports.StatusSymbolMap = StatusSymbolMap;
const statusEndArr = [];
exports.statusEndArr = statusEndArr;
exports.default = Status;
//# sourceMappingURL=Status.delete.js.map