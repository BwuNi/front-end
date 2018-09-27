import { CharItem, CharType, charArr, charTypeMap, charSymbolMap } from '../FA/Char'
import { Change, changeArr } from '../FA/Change'
import FA from '../FA'
import WordType from '../FA/wordType';

export default function (fa: FA) {

    const s1 = Symbol(Math.random())
    const s2 = Symbol(Math.random())

    const status = [s1,s2]
    const end = [s1,s2]

    const change: Change[] = [
        {
            now: fa.start,
            accept: CharType.L1,
            then: s1
        },
        {
            now: fa.finished,
            accept: CharType.L1,
            then: s1
        },
        {
            now: fa.start,
            accept: CharType.R1,
            then: s2
        },
        {
            now: fa.finished,
            accept: CharType.R1,
            then: s2
        }
    ]

    const map = {
        [s1.toString()]: WordType.L1,
        [s2.toString()]: WordType.R1,
    }

    const endNowStart = [s1]
    const endNow = [s2]

    fa.addRule(
        status,
        end,
        change,
        map,
        endNow,
        endNowStart
    )

}