import File from './util/file'
import * as path from 'path'
import fa from './lexical analysis'
import parser from './parser'

const file = new File(path.resolve(__dirname, '../static/test.azi'))



file.iter(async line => line.iter(char => {
    fa.load(char)
}))


file.end(() => {
    parser(fa.result)
})




