import WordType from '../lexical analysis/FA/wordType'
import keyWord from './keyword'
import File from '../util/file'





export default {
    init() { },


    loadRule(file: File) {

        file.iter(async line => {
            const str = line.data

            const content = line


        }
        )

    },
    load(
        arr: { value: string, status: WordType }[]
    ) {
        console.log(keyWord(arr))
    }
}


