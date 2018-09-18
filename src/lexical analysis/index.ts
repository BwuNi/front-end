import { CharItem, CharType, charArr, charTypeMap, charSymbolMap } from './NFA/Char'
import { Change, changeArr } from './NFA/Change'
import FA from './NFA/NFA'

import nfa2dfa from './NFA/nfaToDfa'

export default function test(){
    const nfa = new FA()

    const s = [
        Symbol('n0'),
        Symbol('n1'),
        Symbol('n2'),
        Symbol('n3'),
        Symbol('n4'),
        Symbol('n5'),
        Symbol('n6'),
        Symbol('n7'),
        Symbol('n8'),
        Symbol('n9'),
    ]


    nfa.status = s

    nfa.start = s[0]

    nfa.end = [s[9]]

    nfa.change = [
        //0
        {
            now:s[0],
            accept:CharType.Squota,
            then:s[1],
        },
        //1
        {
            now:s[1],
            accept:CharType.None,
            then:s[2],
        },
        //2
        {
            now:s[2],
            accept:CharType.None,
            then:s[3],
        },
        {
            now:s[2],
            accept:CharType.None,
            then:s[9],
        },
        //3
        {
            now:s[3],
            accept:CharType.None,
            then:s[4],
        },
        {
            now:s[3],
            accept:CharType.None,
            then:s[6],
        },
        //4
        {
            now:s[4],
            accept:CharType.Dquota,
            then:s[5],
        },
        //5
        {
            now:s[5],
            accept:CharType.None,
            then:s[8],
        },
        //6
        {
            now:s[6],
            accept:CharType.Bquota,
            then:s[7],
        },
        //7
        {
            now:s[7],
            accept:CharType.None,
            then:s[8],
        },
        //8
        {
            now:s[8],
            accept:CharType.None,
            then:s[9],
        },
        {
            now:s[8],
            accept:CharType.None,
            then:s[3],
        },
    ]

    const dfa = nfa2dfa(nfa)

    console.log(dfa)


}