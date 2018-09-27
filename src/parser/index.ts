import WordType from '../lexical analysis/FA/wordType'
import keyWord from './keyword'





export default function (
    arr: { value: string, status: WordType }[]
) {
    console.log(keyWord(arr))
}


