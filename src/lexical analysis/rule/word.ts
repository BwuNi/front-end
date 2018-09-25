import { CharItem, CharType, charArr, charTypeMap, charSymbolMap } from '../FA/Char'
import { Change, changeArr } from '../FA/Change'
import FA from '../FA'
import WordType from '../FA/wordType';

export default function (fa: FA) {

    const s1 = Symbol(Math.random())
    const s2 = Symbol(Math.random())

    const status = [s1, s2]
    const end = [s1, s2]

    const change: Change[] = [
        {
            now: fa.start,
            accept: CharType.Letter,
            then: s1
        },
        {
            now: s1,
            accept: CharType.Letter,
            then: s2
        },
        {
            now: s1,
            accept: CharType.Number,
            then: s2
        },
        {
            now: s2,
            accept: CharType.Letter,
            then: s2
        },
        {
            now: s2,
            accept: CharType.Number,
            then: s2
        }
    ]

    const map = {
        [s1.toString()]: WordType.Sign,
        [s2.toString()]: WordType.Sign,
    }

    fa.addRule(
        status,
        end,
        change,
        map
    )

}