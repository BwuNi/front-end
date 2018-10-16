import * as readline from 'readline'
import * as fs from 'fs'
// import os from 'os'

import Line from './line'


export default class SourceFile {

    path: string = ''

    lines: Line[] = []

    isPushing: boolean = false

    isShifting: boolean = false



    constructor(path: string) {
        this.path = path
    }


    createLine() {
        const fRead = fs.createReadStream(this.path);
        const objReadline = readline.createInterface({
            input: fRead
        })

        this.isPushing = true

        objReadline.on('line', (line:string) => {
            this.pushLine(line)
            this.checkHolder()
        });


        objReadline.on('close', () => {
            this.isPushing = false
            this.checkHolder()
        });
    }

    pushLine(line: string) {
        this.lines.push(new Line(line))
    }

    createHolder() {
        return new Promise<Line>((res: () => void) => {
            this.holder = res
        })
    }

    holder: (() => void) | null = null

    checkHolder() {
        if (this.holder) {
            const a = this.holder
            this.holder = null
            a()
        }
    }


    async shiftLine(): Promise<Line | null> {
        const res = this.lines.shift()


        if (!res && this.isPushing == false) {
            return null
        } else if (!res) {
            await this.createHolder()
            return this.shiftLine()
        } else {
            return res
        }
    }

    async iter(func: (line: Line) => Promise<void | boolean>) {

        this.isShifting = true

        if (!this.isPushing) this.createLine()

        let line = await this.shiftLine()

        while (line) {
            if (await func(line) === false) break
            line = await this.shiftLine()
        }



        this.isShifting = false

        this._end()

        return this
    }


    end(f: Function) {
        this._end = f
    }
    _end: Function = () => { }
}


