import File from './util/file'
import * as path from 'path'
import { wordTool, Status, CharType, WordType, Word } from './word'

const file = new File(path.resolve(__dirname, '../static/test'))





file.iter(async line => line.iter(char => {

    wordTool.loadChar(char)

}))

file.end(() => {

    console.log(wordTool.getResult())

})


