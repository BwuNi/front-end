import { WordTool, Status, CharType, WordType, Word } from "../WordTool";

//处理空格

export default function (wordTool: WordTool) {
    wordTool.loadBreakRule(
        [CharType.Number],
        [Status.inCall],
        (temp, status, type, char) => {
            temp = char
            status = Status.Number
            return { temp: '', status }
        }
    )


    wordTool.loadBreakRule(
        [CharType.Number, CharType.Dot],
        [Status.Number],
        (temp, status, type, char) => {
            temp += char
            status = Status.Number
            return { temp: '', status }
        }
    )


    wordTool.loadBreakRule(
        [CharType.R0, CharType.R1, CharType.R2],
        [Status.Number],
        (temp, status, type, char) => {
            let words = [{ type: WordType.Number, value: temp }]
            status = Status.Number
            return { temp: '', status, words }
        }
    )

}