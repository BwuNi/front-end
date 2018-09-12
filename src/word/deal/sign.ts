import { WordTool, Status, CharType, WordType, Word } from "../WordTool";

//处理字符串

export default function (wordTool: WordTool) {
    wordTool.loadBreakRule(
        [CharType.Letter],
        [Status.inCall],
        (temp, status, type, char) => {
            temp = char
            status = Status.inSign
            return { temp,status }
        }
    )


    wordTool.loadBreakRule(
        [CharType.Letter,CharType.Number],
        [Status.inSign],
        (temp, status, type, char) => {
            status = Status.inSign
            temp += char
            return { temp ,status}
        }
    )

}