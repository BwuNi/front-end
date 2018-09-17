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
            return { temp: '', status }
        }
    )

    wordTool.loadBreakRule(
        [CharType.Blank],
        [Status.Word],
        (temp, status, ) => {

            temp = temp.trim()
            const words: Word[] = [{
                type:
                    /true|false/.test(temp) ? WordType.Boolen
                        : /let/.test(temp) ? WordType.KeyWord
                            : WordType.Sign
                ,
                value: temp
            }]

            status = Status.inCall

            temp = ''
            return {
                temp, status, words
            }
        }
    )

    wordTool.loadBreakRule(
        [CharType.Blank],
        [Status.Number],
        (temp, status, ) => {

            temp = temp.trim()
            const words: Word[] = [{
                type:WordType.Number
                ,
                value: temp
            }]

            status = Status.inCall

            temp = ''
            return {
                temp, status, words
            }
        }
    )

}