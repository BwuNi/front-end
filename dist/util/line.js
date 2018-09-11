"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const br = '\n';
class Line {
    constructor(line) {
        this.data = '';
        this.data = line;
    }
    iter(func) {
        for (const char of this.data) {
            if (func(char) === false)
                return;
        }
        func(br);
    }
}
exports.default = Line;
//# sourceMappingURL=line.js.map