import WordType from '../../lexical analysis/FA/wordType'
import rule from '../../lexical analysis/rule';


class Expr {
    rules: ExprList[] = []

    addRule(list: ExprList) {
        this.rules.push(list)
    }

}


type ExprList = ExprItem[]

type ExprItem = {
    type: WordType,
    rule?: RegExp | null
} | Expr

const expr = new Expr()

const e0: ExprList = [
    expr,
    { type: WordType.Calcu },
    expr
]

const e1: ExprList = [
    
]