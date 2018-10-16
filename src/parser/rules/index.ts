import File from '../../util/file'
import WordType from '../../lexical analysis/FA/wordType'
import Expr from './Expr'

export default (file: File) => new Promise<{[key:string]:Expr}>((res, rej) => {

    let target: Expr | null = null

    file.iter(async line => {
        const data = line.data
        const text = data.trim()

        if (text === "") return

        const content = text.split('//')[0]

        const type = content.search(/\||(->)/) > -1 ? 'value' : 'name'

        if (type == 'value') {
            const arr = content.split('|').join('').split('->').join('').split(' ').filter(v => v !== '')
            if (target) target.addRule(arr)
        } else {
            target = new Expr(content)
        }
    })

    file.end(function () {
        res(Expr.table)
    })
})
