import WordType from '../lexical analysis/FA/wordType'

const keyMap: { [key: string]: boolean } = [
    'let'
].reduce((r: { [key: string]: boolean }, v) => {
    r[v] = true
    return r
}, {})

export default function (
    arr: { value: string, status: WordType }[]
) {
    return arr.map(
        v => v.status == WordType.Sign && v.value == 'let' ? {
            value: v.value,
            status: WordType.KeyWord
        } : v
    )
}


