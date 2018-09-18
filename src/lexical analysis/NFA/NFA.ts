
import { CharItem, CharType, charArr, charTypeMap, charSymbolMap } from './Char'
import { Change, changeArr } from './Change'

export default class FA {
    char: CharItem[] = charArr
    start: Symbol = Symbol()
    status: Symbol[] = []
    end: Symbol[] = []
    change: Change[] = changeArr

    mergeStatus(status: Symbol[]) {
        const searchMap: { [x: string]: boolean } = status.reduce((r: { [x: string]: boolean }, v) => {
            r[v.toString()] = true
            return r
        }, {})

        const newone = Symbol(Math.random())

        if (searchMap[this.start.toString()]) this.start = newone

        this.status = this.status.filter(v => !searchMap[v.toString()])
        this.status.push(newone)

        const i =  this.end.length
        this.end = this.end.filter(v => !searchMap[v.toString()])
        if(i > this.end.length) this.end.push(newone)

        this.change.forEach(v=>{
            if(searchMap[v.then.toString()]) v.then = newone
            if(searchMap[v.now.toString()]) v.now = newone
        })

        this.change = this.change.filter(v=>
            !(
                (v.then == newone)&&
                (v.now == newone)&&
                (v.accept == CharType.None)
            )
        )

        return newone
    }


    load(char:string){

    }
}








