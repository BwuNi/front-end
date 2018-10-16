import File from './util/file'
import * as path from 'path'
import fa from './lexical analysis'
import parser from './parser'

const resource = new File(path.resolve(__dirname, '../static/test.azi'))
const rule = new File(path.resolve(__dirname, '../static/parser.rule'))



resource.iter(async line => line.iter(char => {
    fa.load(char)
}))



resource.end(() => {
    parser.load(fa.result)
})


parser.loadRule(rule)


