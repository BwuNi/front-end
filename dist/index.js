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
const file_1 = require("./util/file");
const path = require("path");
const lexical_analysis_1 = require("./lexical analysis");
const file = new file_1.default(path.resolve(__dirname, '../static/test'));
file.iter((line) => __awaiter(this, void 0, void 0, function* () {
    return line.iter(char => {
        lexical_analysis_1.default.load(char);
    });
}));
file.end(() => {
    lexical_analysis_1.default.endLoad();
    console.log(lexical_analysis_1.default);
});
//# sourceMappingURL=index.js.map