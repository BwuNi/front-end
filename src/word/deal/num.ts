import { WordTool, Status, CharType, WordType, Word } from "../WordTool";

//处理字符串

export default function (wordTool: WordTool) {
    wordTool.loadBreakRule(
        [CharType.Number],
        [Status.inCall],
        (temp, status, type, char) => {
            temp = char
            status = Status.inNumber
            return { temp,status }
        }
    )


    wordTool.loadBreakRule(
        [CharType.Number],
        [Status.inNumber],
        (temp, status, type, char) => {
            status = Status.inNumber
            temp += char
            return { temp ,status}
        }
    )

}