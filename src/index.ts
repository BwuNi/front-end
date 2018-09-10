import File from './util/file'
import * as path from 'path'


const file = new File(path.resolve(__dirname, '../static/test'))

file.iter(async line => console.log(line))