"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FA_1 = require("./FA");
const rule_1 = require("./rule");
const fa = new FA_1.default();
rule_1.default(fa);
exports.default = fa.toDfa();
//# sourceMappingURL=index.js.map