"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("./Char");
function nfa2dfa(nfa) {
    let i = 0;
    let target = nfa.status[i];
    while (target) {
        const s = collection(target, {}, nfa);
        if (s.length == 1 || s.length == 0) {
            i = i + 1;
            target = nfa.status[i];
        }
        else {
            nfa.mergeStatus(s);
            i = 0;
            target = nfa.status[i];
        }
    }
    nfa.change = nfa.change.filter(v => !(v.accept === Char_1.CharType.None));
    return nfa;
}
exports.default = nfa2dfa;
function collection(start, map, nfa) {
    const s0 = nfa.change
        .filter(i => (i.now === start) && (i.accept == Char_1.CharType.None) && (!map[i.then.toString()]))
        .map(v => v.then);
    s0.forEach(i => {
        map[i.toString()] = true;
    });
    if (!map[start.toString()]) {
        s0.push(start);
        map[start.toString()] == true;
    }
    const i = s0.filter(v => !(v == start)).map(v => collection(v, map, nfa)).reduce((r, i) => {
        let m = r.concat(i);
        return m;
    }, []);
    return s0.concat(i);
}
//# sourceMappingURL=nfaToDfa.js.map