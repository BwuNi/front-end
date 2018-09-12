import { WordTool, Status, CharType, WordType, Word } from "../WordTool";

//处理括号

export default function (wordTool: WordTool) {
    wordTool.loadBreakRule(
        [CharType.L],
        [Status.inCall],
        (temp: string, status: Status, type: CharType) => {
            temp = ''
            return {
                temp,
                words: [{
                    type: WordType.L
                }]
            }
        }
    )


    wordTool.loadBreakRule(
        [CharType.R],
        [Status.inCall, Status.inSign, Status.inKey, Status.inNumber, Status.outCall],
        (temp: string, status: Status, ) => {
            const words: Word[] = []

            if (status !== Status.inCall && status !== Status.outCall)

                words.push({
                    type: status == Status.inKey ? WordType.Key
                        : status == Status.inSign ? WordType.Sign
                            : WordType.Number
                    ,
                    value: temp
                })

            words.push({ type: WordType.R })

            status = Status.outCall

            temp = ''
            return {
                temp,
                status,
                words
            }
        }
    )

}