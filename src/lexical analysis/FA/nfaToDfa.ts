import { CharItem, CharType, charArr, charTypeMap, charSymbolMap } from './Char'
import { Change, changeArr } from './Change'
import FA from '.'

export default function nfa2dfa(nfa: FA) {
    const start = nfa.start

    const m = {}

    let i = 0
    let target = nfa.status[i]

    while (target) {

        const s = collection(target, {}, nfa)

        console.log(s.length)

        if (s.length == 1 || s.length == 0) {
            i = i + 1
            target = nfa.status[i]
        } else {
            nfa.mergeStatus(s)
            i = 0
            target = nfa.status[i]
        }

    }

    nfa.change = nfa.change.filter(v =>
        !(v.accept === CharType.None)
    )

    return nfa
}

function collection(start: Symbol, map: { [x: string]: boolean }, nfa: FA) {
    const s0 = nfa.change
        .filter(i => (i.now === start) && (i.accept == CharType.None) && (!map[i.then.toString()]))
        .map(v => v.then)

    s0.forEach(i => {
        map[i.toString()] = true
    });

    if (!map[start.toString()]) {
        s0.push(start)
        map[start.toString()] == true
    }

    const i: Symbol[] = s0.filter(v => !(v == start)).map(v => collection(v, map, nfa)).reduce((r: Symbol[], i) => {
        let m = r.concat(i)
        return m
    }, [])

    return s0.concat(i)
}
