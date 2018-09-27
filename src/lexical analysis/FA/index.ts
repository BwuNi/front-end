
import { CharItem, CharType, charArr, charTypeMap, charSymbolMap } from './Char'
import { Change, changeArr } from './Change'
import WordType from './wordType'
import nfa2Dfa from './nfaToDfa'

export default class FA {
    char: CharItem[] = charArr
    start: Symbol
    now: Symbol
    finished: Symbol

    map: { [x: string]: WordType } = {}

    status: Symbol[]
    end: Symbol[]
    change: Change[] = []

    endNow: Symbol[]
    endNowStart: Symbol[]
    endCanStart: Symbol[]

    temp: string

    result: {
        value: string,
        status: WordType
    }[]

    constructor(start = Symbol('start')) {
        this.finished = Symbol('finish')

        this.start = start
        this.now = start
        this.status = [start]
        this.end = [start]
        this.temp = ''
        this.result = []
        this.endNow = []
        this.endNowStart = []
        this.endCanStart = []

        this.change = [{
            now: start,
            accept: CharType.Blank,
            then: start
        }, {
            now: start,
            accept: CharType.Br,
            then: start
        }, {
            now: this.finished,
            accept: CharType.Blank,
            then: start
        }, {
            now: this.finished,
            accept: CharType.Br,
            then: start
        }]
    }


    reset() {
        this.now = this.start
    }
    finish() {

        this.result.push({
            value: this.temp.trim(),
            status: this.map[this.now.toString()]
        })

        this.temp = ''
        this.now = this.finished
    }

    toDfa() {
        Object.assign(this, nfa2Dfa(this))
        return this
    }

    mergeStatus(status: Symbol[]) {

        // 状态查找表
        const searchMap: { [x: string]: boolean } = status.reduce((r: { [x: string]: boolean }, v) => {
            r[v.toString()] = true
            return r
        }, {})


        console.log(status)
        console.log(searchMap)
        console.log(searchMap[this.start.toString()])

        //新生成的状态
        const newone = Symbol(Math.random())

        //检查是否包含开始节点
        if (searchMap[this.start.toString()]) { this.start = newone }

        //检查是否包含 now 节点
        if (searchMap[this.now.toString()]) { this.now = newone }

        //更新 status 属性
        this.status = this.status.filter(v => !searchMap[v.toString()])
        this.status.push(newone)

        //检查是否包含结束节点
        const i = this.end.length
        this.end = this.end.filter(v => !searchMap[v.toString()])
        if (i > this.end.length) this.end.push(newone)

        //更新 change 属性
        this.change.forEach(v => {
            if (searchMap[v.then.toString()]) v.then = newone
            if (searchMap[v.now.toString()]) v.now = newone
        })

        //删除重复的 change
        this.change = this.change.filter(v =>
            !(
                (v.then == newone) &&
                (v.now == newone) &&
                (v.accept == CharType.None)
            )
        )

        //更新 map
        for (let i of status) {
            if (this.map[i.toString()]) {
                this.map[newone.toString()] = this.map[i.toString()]
                delete this.map[i.toString()]
            }
        }

        return newone
    }

    load(char: string) {
        const charType = checkChar(char)

        let next = null


        for (let i of this.change) {
            if (
                (i.now === this.now) && (i.accept === charType)
            ) {
                next = i.then
                break
            }
        }

        // 没有下个节点
        if (next === null) {

            // // 当前结点为 start 既解析错误
            // if (this.now == this.start) {
            //     throw new Error("token error1")
            // }


            for (let v of this.end) {


                // 当前结点为结束节点
                if (v === this.now) {

                    this.finish()

                    if (this.isEndNowStart(this.now)) {
                        this.load(' ')
                    }

                    this.load(char)

                    return this.now
                }
            }


            // 字符错误逻辑
            throw new Error("token error2")
        }

        // 正常加载逻辑

        this.temp += char
        this.now = next

        // 立即结束节点
        if (this.isEndNowStart(next)) {
            this.finish()
            this.load(' ')
        }else if (this.isEndNow(next)) {
            this.finish()
        }


        return null
    }

    endLoad() {
        for (let v of this.end) {
            if (v === this.now) {
                // 正常退出逻辑
                this.result.push({
                    value: this.temp,
                    status: this.map[this.now.toString()]
                })
                this.temp = ''

                this.reset()
                return this.now
            }
        }


        // 字符错误逻辑
        throw new Error("token error")
    }

    isEndNow(status: Symbol) {
        for (let i of this.endNow) {
            if (status === i) return true
        }
        return false
    }
    
    isEndNowStart(status: Symbol) {
        for (let i of this.endNowStart) {
            if (status === i) return true
        }
        return false
    }
    isEndCanStart(status: Symbol) {
        for (let i of this.endCanStart) {
            if (status === i) return true
        }
        return false
    }

    addRule(
        status: Symbol[] = [],
        end: Symbol[] = [],
        change: Change[] = [],
        map: { [x: string]: WordType } = {},
        endNow: Symbol[] = [],
        endNowStart: Symbol[] = [],
        endCanStart: Symbol[] = []
    ) {
        this.status = this.status.concat(status)
        this.end = this.end.concat(end)
        this.change = this.change.concat(change)
        this.map = Object.assign({}, this.map, map)

        this.endNow = this.endNow.concat(endNow)
        this.endNowStart = this.endNowStart.concat(endNowStart)
        this.endCanStart = this.endCanStart.concat(endCanStart)
        return this
    }
}


function checkChar(char: string) {
    for (let v of charArr) {
        if (v.v.test(char)) return v.n
    }

    return CharType.Error
}

