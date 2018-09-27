import { CharItem, CharType, charArr, charTypeMap, charSymbolMap } from '../FA/Char'
import { Change, changeArr } from '../FA/Change'
import FA from '../FA'
import WordType from '../FA/wordType';

export default function (fa: FA) {

    const s1 = Symbol(Math.random())
    const s2 = Symbol(Math.random())
    const s3 = Symbol(Math.random())

    const status = [s1, s2, s3]
    const end = [s3]

    const change: Change[] = [
        {
            now: fa.start,
            accept: CharType.Dquota,
            then: s1
        },
    ].concat(
        charArr
            .filter(v => v.n !== CharType.Dquota && v.n !== CharType.Bslant)
            .map(v => ({
                now: s1,
                accept: v.n,
                then: s1
            }))
    ).concat([

        {
            now: s1,
            accept: CharType.Bslant,
            then: s2
        },
        {
            now: s2,
            accept: CharType.Bslant,
            then: s1
        },
        {
            now: s2,
            accept: CharType.Dquota,
            then: s1
        },
        {
            now: s1,
            accept: CharType.Dquota,
            then: s3
        },
    ])

    const map = {
        [s3.toString()]: WordType.String,
    }

    fa.addRule(
        status,
        end,
        change,
        map
    )

}