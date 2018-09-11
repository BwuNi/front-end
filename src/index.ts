import File from './util/file'
import * as path from 'path'
import { tokenTool, CharType, Status, CNode } from './token'

const file = new File(path.resolve(__dirname, '../static/test'))





file.iter(async line => line.iter(char => {

    tokenTool.loadChar(char)

}))

file.end(() => {

    console.log(JSON.stringify(tokenTool.getResult(),null,1))

})



tokenTool.loadRule(
    [Status.Calling],
    [CharType.L],
    (char: string, temp: string, stack: CNode[], status: Status) => {
        const target = { args: [] }

        stack[stack.length - 1].args.push(target)

        stack.push(target)

        return { char, temp, stack, status }
    }
)

tokenTool.loadRule(
    [Status.Calling],
    [CharType.Blank],
    (char: string, temp: string, stack: CNode[], status: Status) => {

        return { char, temp, stack, status }

    }
)

tokenTool.loadRule(
    [Status.Calling,Status.Wordend],
    [CharType.R],
    (char: string, temp: string, stack: CNode[], status: Status) => {

        stack.pop()

        return { char, temp, stack, status }
    }
)

tokenTool.loadRule(
    [Status.Calling],
    [CharType.Letter],
    (char: string, temp: string, stack: CNode[], status: Status) => {
        status = Status.Wording
        temp = char
        return { char, temp, stack, status }
    }
)


tokenTool.loadRule(
    [Status.Wording],
    [CharType.Letter, CharType.Number],

    (char: string, temp: string, stack: CNode[], status: Status) => {
        status = Status.Wording
        temp += char
        return { char, temp, stack, status }
    }
)


tokenTool.loadRule(
    [Status.Wording],
    [CharType.Blank],

    (char: string, temp: string, stack: CNode[], status: Status) => {

        stack[stack.length - 1].args.push(temp)
        temp = ''

        status = Status.Calling

        return { char, temp, stack, status }
    }
)


tokenTool.loadRule(
    [Status.Wording],
    [CharType.R],

    (char: string, temp: string, stack: CNode[], status: Status) => {

        stack[stack.length - 1].args.push(temp)
        temp = ''


        stack.pop()

        status = Status.Calling

        return { char, temp, stack, status }
    }
)


tokenTool.loadRule(
    [Status.Calling],
    [CharType.Calcu],

    (char: string, temp: string, stack: CNode[], status: Status) => {

        stack[stack.length - 1].args.push(char)
        temp = ''
        status = Status.Wordend

        return { char, temp, stack, status }
    }
)

tokenTool.loadRule(
    [Status.Wordend],
    [CharType.Blank],

    (char: string, temp: string, stack: CNode[], status: Status) => {

        status = Status.Calling

        return { char, temp, stack, status }
    }
)


tokenTool.loadRule(
    [Status.Calling],
    [CharType.Number],

    (char: string, temp: string, stack: CNode[], status: Status) => {

        temp = char
        status = Status.Figuring

        return { char, temp, stack, status }
    }
)


tokenTool.loadRule(
    [Status.Figuring],
    [CharType.Number],

    (char: string, temp: string, stack: CNode[], status: Status) => {

        temp += char
        status = Status.Figuring

        return { char, temp, stack, status }
    }
)

tokenTool.loadRule(
    [Status.Figuring],
    [CharType.Blank],

    (char: string, temp: string, stack: CNode[], status: Status) => {

        stack[stack.length-1].args.push(temp)
        temp = ''
        status = Status.Calling

        return { char, temp, stack, status }
    }
)


tokenTool.loadRule(
    [Status.Figuring],
    [CharType.R],

    (char: string, temp: string, stack: CNode[], status: Status) => {

        stack[stack.length-1].args.push(temp)

        stack.pop()

        temp = ''

        status = Status.Calling

        return { char, temp, stack, status }
    }
)

