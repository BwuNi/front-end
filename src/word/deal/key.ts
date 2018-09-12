import { WordTool, Status, CharType, WordType, Word } from "../WordTool";

//处理字符串

export default function (wordTool: WordTool) {
    wordTool.loadBreakRule(
        [CharType.Bquota],
        [Status.inCall],
        (temp, status, type, char) => {
            temp = char
            status = Status.inKey
            return { temp,status }
        }
    )


    wordTool.loadBreakRule(
        [CharType.Number,CharType.Letter],
        [Status.inKey],
        (temp, status, type, char) => {
            status = Status.inKey
            temp += char
            return { temp ,status}
        }
    )

}