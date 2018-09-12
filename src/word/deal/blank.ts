import { WordTool, Status, CharType, WordType, Word } from "../WordTool";

//处理空格

export default function (wordTool: WordTool) {
    wordTool.loadBreakRule(
        [CharType.Blank],
        [Status.inCall],
        (temp, status, type, char) => {
            return { temp: '' }
        }
    )


    wordTool.loadBreakRule(
        [CharType.Blank],
        [Status.outCall],
        (temp, status, type, char) => {
            status = Status.inCall
            return { temp: '',status }
        }
    )

    wordTool.loadBreakRule(
        [CharType.Blank],
        [Status.inKey, Status.inSign,Status.inNumber],
        (temp, status, ) => {

            const words: Word[] = [{
                type: status == Status.inKey ? WordType.Key
                    : status == Status.inSign ? WordType.Sign
                        : WordType.Number
                ,
                value: temp
            }]

            status = Status.inCall

            temp = ''
            return {
                temp,status,
                words
            }
        }
    )

}