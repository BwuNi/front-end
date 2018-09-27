"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const word_1 = require("./word");
const number_1 = require("./number");
const LR_1 = require("./LR");
const LR1_1 = require("./LR1");
const LR2_1 = require("./LR2");
const equal_1 = require("./equal");
const calcu_1 = require("./calcu");
const colon_1 = require("./colon");
const string_1 = require("./string");
function default_1(fa) {
    word_1.default(fa);
    number_1.default(fa);
    LR_1.default(fa);
    LR1_1.default(fa);
    LR2_1.default(fa);
    equal_1.default(fa);
    calcu_1.default(fa);
    colon_1.default(fa);
    string_1.default(fa);
    return fa;
}
exports.default = default_1;
//# sourceMappingURL=index.js.map