

enum Status {
    Wording, Wordend,
    Callend, Calling,
    Figuring, Figurend,
    String, Strend,
    Blank, Statement
}


enum CharType {
    Letter, Number, Calcu, L, R, Blank, Error
}


type CNode = { args: (CNode | string)[] }


export default class TokenTool {

    search: {
        [status: string]: {
            [charType: string]: (char: string, temp: string, stack: CNode[], status: Status, ) => ({ char: string, status: Status, temp: string, stack: CNode[] })
        }
    } = {}

    temp: string = ''

    stack: CNode[] = [{ args: [] }]

    status: Status = Status.Calling

    constructor() {
    }

    loadRule(status: Status[], charType: CharType[], func: (char: string, temp: string, stack: CNode[], status: Status) => ({ char: string, status: Status, temp: string, stack: CNode[] })) {

        status.forEach(s => {
                charType.forEach(c=>{

                    if(!this.search[s]) this.search[s] = {}

                    this.search[s][c] = func
                })
        });


    }


    loadChar(char: string) {
        const charType = checkChar(char)

        const status = this.status

        const func = this.search[status]
            ? this.search[status][charType]
                ? this.search[status][charType]
                : null
            : null

        if (func) {
            const res = func(char, this.temp, this.stack, this.status)

            this.temp = res.temp
            this.stack = res.stack
            this.status = res.status
        }
    }

    getResult() {
        if (this.stack.length === 1) return this.stack[0]
        return null
    }
}


function checkChar(char: string): CharType {
    return (
        /[a-zA-Z]/.test(char) ? CharType.Letter
            : /\-|\+|\*|\/|\^|\%/.test(char) ? CharType.Calcu
                : /[0-9]/.test(char) ? CharType.Number
                    : /\(/.test(char) ? CharType.L
                        : /\)/.test(char) ? CharType.R
                            : /\n|\t| /.test(char) ? CharType.Blank
                                : CharType.Error
    )

}

export { TokenTool, CharType, Status ,CNode}