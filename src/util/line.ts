const br = '\n'

export default class Line {
    data: any = ''

    constructor(line: any) {
        this.data = line
    }

    iter(func:(char:string)=>(void|false)):void{
        for (const char of this.data) {
            if(func(char) === false) return
        }
        func(br)
    }
}