import File from './util/file'
import * as path from 'path'
import fa from './lexical analysis'

const file = new File(path.resolve(__dirname, '../static/test'))


file.iter(async line => line.iter(char => {
    fa.load(char)
}))

file.end(() => {
    fa.endLoad()
    console.log(fa)
})




