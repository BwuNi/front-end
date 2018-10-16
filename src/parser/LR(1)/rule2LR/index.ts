import Expr from "../../rules/Expr";
import { types } from "util";

type item = {
    list: string[],
    point: number | null
}

type rule = {
    begin: item,
    accepts: accept[]
}

type accept = {
    now: item,
    word: string,
    then: item
}

function isSet(str: string) {
    return /[a-z]([a-z]|[A-Z]|[0-9])*/
}

export default class LR_1 {




    exprTable: { [name: string]: Expr }

    closureTable: { [name: string]: rule[] }

    constructor(
        exprs: { [name: string]: Expr },
        // 根表达式名字
        name: string) {

        this.closureTable = {}
        this.exprTable = exprs

        this.createClosure(name)

    }

    goto() {

    }
    closure() {

    }

    createClosure(name: string) {
        const expr = this.exprTable[name]
        const back = {}

        this.closureTable[name] = []

        expr.rules.forEach(arr => {

            this.closureTable[name].push({
                begin: { list: arr, point: 0 },
                accepts: []
            })

            arr.forEach(str => {
                if (isSet(str) && !this.closureTable[name])
                    this.createClosure(str)
            })

        })
    }

    createGoto() {

    }

}


