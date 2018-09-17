import { WordTool, Status, CharType, WordType, Word } from "../WordTool";

//处理空格

export default function (wordTool: WordTool) {
    wordTool.loadBreakRule(
        [CharType.Equal],
        [Status.inCall],
        (temp, status, type, char) => {
            status = Status.Equal
            return { temp: '', status }
        }
    )


    wordTool.loadBreakRule(
        [CharType.Equal],
        [Status.Word],
        (temp, status, type, char) => {
            status = Status.Equal

            const words: Word[] = [{
                type:
                    /true|false/.test(temp) ? WordType.Boolen
                        : /let/.test(temp) ? WordType.KeyWord
                            : WordType.Sign
                ,
                value: temp
            }]

            return { temp: '', status, words }
        }
    )

    wordTool.loadBreakRule(
        [CharType.Equal],
        [Status.Number],
        (temp, status, type, char) => {
            status = Status.Equal

            const words: Word[] = [{
                type: WordType.Number,
                value: temp
            }]

            return { temp: '', status, words }
        }
    )


    wordTool.loadBreakRule(
        [CharType.Equal],
        [Status.Equal],
        (temp, status, type, char) => {
            status = Status.inCall

            const words: Word[] = [{
                type: WordType.Equal,
                value: '=='
            }]

            return { temp: '', status }
        }
    )


    wordTool.loadBreakRule(
        [
            CharType.L0, 
            CharType.L1, 
            CharType.R2, 
            CharType.Number, 
            CharType.Letter, 
            CharType.No, 
            CharType.Blank, 
            CharType.Dquota
        ],
        [Status.Equal],

        (temp, status, type, char) => {
            let words = [{ type: WordType.Equal, value: '=' }]
            status = Status.inCall
            return { temp: '', status, words, isReload: true }
        }
    )

}