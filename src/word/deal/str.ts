import { WordTool, Status, CharType, WordType, Word } from "../WordTool";

//处理字符串

export default function (wordTool: WordTool) {
    wordTool.loadBreakRule(
        [CharType.Dquota],
        [Status.inCall],
        (temp, status, type, char) => {
            temp = ''
            status = Status.inStr
            return { temp, status }
        }
    )


    wordTool.loadBreakRule(
        [CharType.Dquota],
        [Status.inStr],
        (temp, status, type, char) => {


            status = Status.outCall


            const words: Word[] = [{
                type: WordType.String,
                value: temp
            }]

            return { temp: '', words, status }
        }
    )

    wordTool.loadBreakRule(
        [
            CharType.Blank,
            CharType.Bquota,
            CharType.Calcu,
            CharType.Equal,
            CharType.Error,
            CharType.L,
            CharType.Letter,
            CharType.Number,
            CharType.R,
            CharType.Squota,
        ],
        [Status.inStr],
        (temp, status, type, char) => {
            temp += char
            return {
                temp,
                status
            }
        }
    )



    wordTool.loadBreakRule(
        [CharType.Bslant],
        [Status.inStr],
        (temp, status, type, char) => {


            status = Status.Bslant

            return { temp, status }
        }
    )



    wordTool.loadBreakRule(
        [CharType.Bslant, CharType.Dquota],
        [Status.Bslant],
        (temp, status, type, char) => {

            temp += char

            status = Status.inStr

            return { temp, status }
        }
    )
}