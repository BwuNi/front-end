import { CharItem, CharType, charArr, charTypeMap, charSymbolMap } from '../FA/Char'
import { Change, changeArr } from '../FA/Change'
import FA from '../FA'
import WordType from '../FA/wordType';

export default function (fa: FA) {

    const s1 = Symbol(Math.random())

    const status = [s1]
    const end = [s1]

    const change: Change[] = [
        {
            now: fa.start,
            accept: CharType.Colon,
            then: s1
        },
        {
            now: fa.finished,
            accept: CharType.Colon,
            then: s1
        }
    ]

    const map = {
        [s1.toString()]: WordType.Colon,
    }

    const endNowStart = [s1]
    fa.addRule(
        status,
        end,
        change,
        map,
        [],
        endNowStart,
        []
    )

}