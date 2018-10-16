import WordType from "../../lexical analysis/FA/wordType";


const wordTable: { [key: string]: { type: WordType, value?: RegExp } }
    = {

    // 变量值
    '`number':
        { type: WordType.Number },
    '`sign':
        { type: WordType.Sign },
    '`string':
        { type: WordType.String },

    //关键字
    '*let':
        { type: WordType.KeyWord, value: /let/ },

    '(':
        { type: WordType.L0 },
    ')':
        { type: WordType.R0 },
    '[':
        { type: WordType.L1 },
    ']':
        { type: WordType.R1 },
    '{':
        { type: WordType.L1 },
    '}':
        { type: WordType.R1 },
    ':':
        { type: WordType.Colon },
    '=':
        { type: WordType.Equal },
    'Nil':
        { type: WordType.None },
}


export default wordTable

