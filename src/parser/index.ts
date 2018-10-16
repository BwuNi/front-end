import WordType from '../lexical analysis/FA/wordType'
import keyWord from './keyword'
import File from '../util/file'
import Expr from './rules/Expr'

import rule from './rules'

let table: { [key: string]: Expr } | null = null

export default {
    init() { },

    table: () => table,

    async loadRule(file: File) {
        table = await rule(file)
        console.dir(table,{depth :10})
    },

    load(
        arr: { value: string, status: WordType }[]
    ) {
        if(!table) return 

        












    }
}


