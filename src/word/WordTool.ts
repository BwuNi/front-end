import { CharType, checkChar } from "./char";

enum Status {
    inStr='inStr',
    inSign='inSign',
    inNumber='inNumber',
    inKey='inKey',
    inCall='inCall',
    outCall='outCall',
    Bslant='Bslant'
}



enum WordType {
    String = 'String', Number = 'Number', Calcu = 'Calcu', L = 'L', R = 'R', Blank = 'Blank', Error = 'Error', Equal = 'Equal', Sign = 'Sign', Key = 'Key'
}

type Word = { type: WordType, value?: string }

class WordTool {

    search: {
        [status: string]: {
            [charType: string]: (temp: string, status: Status, type: CharType, char: string) => { temp: string, status?: Status, isBreak?: Boolean, words?: Word[] }
        }
    } = {}
    temp: string = ''

    result: Word[] = []

    status: Status = Status.inCall

    constructor() {

    }

    loadBreakRule(types: CharType[], statuss: Status[], func: (temp: string, status: Status, type: CharType, char: string) => { temp: string, status?: Status, isBreak?: Boolean, words?: Word[] }) {


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

        const { temp, words = [], status = this.status } = func(this.temp, this.status, type, char)

        this.temp = temp

        this.status = status

        this.result = this.result.concat(words)

    }

    getResult() {
        return this.result
    }

}


export { WordTool, Status, CharType, WordType, Word }