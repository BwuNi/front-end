import { CharItem, CharType, charArr, charTypeMap, charSymbolMap } from './FA/Char'
import { Change, changeArr } from './FA/Change'
import FA from './FA'
import WordType from './FA/wordType';

const nfa = new FA()

const s = [
    nfa.start,
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

nfa.change = nfa.change.concat([
    //0
    {
        now: s[0],
        accept: CharType.Squota,
        then: s[1],
    },
    //1
    {
        now: s[1],
        accept: CharType.None,
        then: s[2],
    },
    //2
    {
        now: s[2],
        accept: CharType.None,
        then: s[3],
    },
    {
        now: s[2],
        accept: CharType.None,
        then: s[9],
    },
    //3
    {
        now: s[3],
        accept: CharType.None,
        then: s[4],
    },
    {
        now: s[3],
        accept: CharType.None,
        then: s[6],
    },
    //4
    {
        now: s[4],
        accept: CharType.Dquota,
        then: s[5],
    },
    //5
    {
        now: s[5],
        accept: CharType.None,
        then: s[8],
    },
    //6
    {
        now: s[6],
        accept: CharType.Bquota,
        then: s[7],
    },
    //7
    {
        now: s[7],
        accept: CharType.None,
        then: s[8],
    },
    //8
    {
        now: s[8],
        accept: CharType.None,
        then: s[9],
    },
    {
        now: s[8],
        accept: CharType.None,
        then: s[3],
    },
])

nfa.map[s[9].toString()] = WordType.KeyWord

const dfa =  nfa.toDfa()

dfa.load('\'')

dfa.load('"')

dfa.endLoad()


export default dfa