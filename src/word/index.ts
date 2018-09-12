import { WordTool, Status, CharType,WordType ,Word} from './WordTool'
import deal from './deal'

const wordTool = new WordTool()

deal.forEach(v=>{
    v(wordTool)
})

export { wordTool, Status, CharType,WordType ,Word}  