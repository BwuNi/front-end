import WordType from '../../lexical analysis/FA/wordType'
import word from '../../lexical analysis/rule/word';


export default class Expr {
    static table: { [key: string]: Expr } = {}

    name: string

    rules: string[][]

    constructor(name: string) {
        this.name = name
        this.rules = []
        Expr.table[name] = this
    }

    addRule(arr: string[]) {
        this.rules.push(arr)
    }

}

