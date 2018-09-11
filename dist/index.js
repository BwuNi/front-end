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
const token_1 = require("./token");
const file = new file_1.default(path.resolve(__dirname, '../static/test'));
file.iter((line) => __awaiter(this, void 0, void 0, function* () {
    return line.iter(char => {
        token_1.tokenTool.loadChar(char);
    });
}));
file.end(() => {
    console.log(JSON.stringify(token_1.tokenTool.getResult(), null, 1));
});
token_1.tokenTool.loadRule([token_1.Status.Calling], [token_1.CharType.L], (char, temp, stack, status) => {
    const target = { args: [] };
    stack[stack.length - 1].args.push(target);
    stack.push(target);
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Calling], [token_1.CharType.Blank], (char, temp, stack, status) => {
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Calling, token_1.Status.Wordend], [token_1.CharType.R], (char, temp, stack, status) => {
    stack.pop();
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Calling], [token_1.CharType.Letter], (char, temp, stack, status) => {
    status = token_1.Status.Wording;
    temp = char;
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Wording], [token_1.CharType.Letter, token_1.CharType.Number], (char, temp, stack, status) => {
    status = token_1.Status.Wording;
    temp += char;
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Wording], [token_1.CharType.Blank], (char, temp, stack, status) => {
    stack[stack.length - 1].args.push(temp);
    temp = '';
    status = token_1.Status.Calling;
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Wording], [token_1.CharType.R], (char, temp, stack, status) => {
    stack[stack.length - 1].args.push(temp);
    temp = '';
    stack.pop();
    status = token_1.Status.Calling;
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Calling], [token_1.CharType.Calcu], (char, temp, stack, status) => {
    stack[stack.length - 1].args.push(char);
    temp = '';
    status = token_1.Status.Wordend;
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Wordend], [token_1.CharType.Blank], (char, temp, stack, status) => {
    status = token_1.Status.Calling;
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Calling], [token_1.CharType.Number], (char, temp, stack, status) => {
    temp = char;
    status = token_1.Status.Figuring;
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Figuring], [token_1.CharType.Number], (char, temp, stack, status) => {
    temp += char;
    status = token_1.Status.Figuring;
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Figuring], [token_1.CharType.Blank], (char, temp, stack, status) => {
    stack[stack.length - 1].args.push(temp);
    temp = '';
    status = token_1.Status.Calling;
    return { char, temp, stack, status };
});
token_1.tokenTool.loadRule([token_1.Status.Figuring], [token_1.CharType.R], (char, temp, stack, status) => {
    stack[stack.length - 1].args.push(temp);
    stack.pop();
    temp = '';
    status = token_1.Status.Calling;
    return { char, temp, stack, status };
});
//# sourceMappingURL=index.js.map