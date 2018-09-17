import { CharType, checkChar } from "./char";
import Status from "./status"
import WordType from './word'

type Word = { type: WordType, value?: string }

class WordTool {

    search: {
        [status: string]: {
            [charType: string]: (temp: string, status: Status, type: CharType, char: string) => { temp: string, status?: Status, isReload?: boolean, words?: Word[] }
        }
    } = {}
    temp: string = ''

    result: Word[] = []

    status: Status = Status.inCall

    constructor() {

    }

    loadBreakRule(types: CharType[], statuss: Status[], func: (temp: string, status: Status, type: CharType, char: string) => { temp: string, status?: Status, isReload?: boolean, words?: Word[] }) {


        types.forEach(c => {
            statuss.forEach(s => {
                if (!this.search[s]) this.search[s] = {}
                this.search[s][c] = func
            })
        }
        )
    }

    loadChar(char: string) {

        const type = checkChar(char)

        const func = this.search[this.status][type]

        if(!func) {
            console.log(this.getResult())
            console.log(this.temp)
            console.log(this.status,type)
        }

        let _reload = true

        while(_reload){

            const { temp, words = [], status = this.status,isReload = false } = func(this.temp, this.status, type, char)

            this.temp = temp
    
            this.status = status
    
            this.result = this.result.concat(words)
            
            _reload = isReload
        }


    }

    getResult() {
        return this.result
    }

}


export { WordTool, Status, CharType, WordType, Word }