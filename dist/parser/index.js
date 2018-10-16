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
const rules_1 = require("./rules");
let table = null;
exports.default = {
    init() { },
    table: () => table,
    loadRule(file) {
        return __awaiter(this, void 0, void 0, function* () {
            table = yield rules_1.default(file);
            console.dir(table, { depth: 10 });
        });
    },
    load(arr) {
        if (!table)
            return;
    }
};
//# sourceMappingURL=index.js.map