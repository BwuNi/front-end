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
            accept: CharType.Equal,
            then: s1
        },
        {
            now: fa.finished,
            accept: CharType.Equal,
            then: s1
        },
        {
            now: s1,
            accept: CharType.Equal,
            then: s2
        }
    ]

    const map = {
        [s1.toString()]: WordType.Set,
        [s2.toString()]: WordType.Equal,
    }

    const endNowStart = [s2]
    const endCanStart:Symbol[] = [s1]

    fa.addRule(
        status,
        end,
        change,
        map,
        [],
        endNowStart,
        endCanStart
    )

}