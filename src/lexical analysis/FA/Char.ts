
enum CharType {
    Letter = 'Letter',
    Number = 'Number',
    Equal = 'Equal',
    Dot = 'Dot',

    //()
    L0 = 'L0',
    R0 = 'R0',
    // []
    L1 = 'L1',
    R1 = 'R1',
    // {}
    L2 = 'L2',
    R2 = 'R2',
    // <>
    L3 = 'L3',
    R3 = 'R3',

    //LOGIC
    //!
    No = "!",
    //!
    Or = "|",
    //!
    Nd = "&",

    // +=*%^ 少了一个除号
    Calcu = 'Calcu',

    Blank = 'Blank',
    Br = 'br',

    // ""
    Dquota = 'Dquota',
    // ''
    Squota = 'Squota',
    // ``
    Bquota = 'Bquota',

    // /
    Slant = "Slant",
    // \
    Bslant = 'Bslant',

    None = "none",

    Error = 'Error',
}

type CharItem = {
    n: CharType,
    v: RegExp,
    s: Symbol
}

const charArr: CharItem[] = [
    { s:Symbol(Math.random()), n: CharType.Letter, v: /[a-zA-Z]/,  },
    { s:Symbol(Math.random()), n: CharType.Number, v: /[0-9]/ },
    { s:Symbol(Math.random()), n: CharType.Equal, v: /=/ },
    { s:Symbol(Math.random()), n: CharType.Dot, v: /\./ },
    { s:Symbol(Math.random()), n: CharType.L0, v: /\(/ },
    { s:Symbol(Math.random()), n: CharType.R0, v: /\)/ },
    { s:Symbol(Math.random()), n: CharType.L1, v: /\[/ },
    { s:Symbol(Math.random()), n: CharType.R1, v: /\]/ },
    { s:Symbol(Math.random()), n: CharType.L2, v: /{/ },
    { s:Symbol(Math.random()), n: CharType.R2, v: /}/ },
    { s:Symbol(Math.random()), n: CharType.L3, v: /</ },
    { s:Symbol(Math.random()), n: CharType.R3, v: />/ },
    { s:Symbol(Math.random()), n: CharType.No, v: /!/ },
    { s:Symbol(Math.random()), n: CharType.Or, v: /\|/ },
    { s:Symbol(Math.random()), n: CharType.Nd, v: /&/ },
    { s:Symbol(Math.random()), n: CharType.Calcu, v: /\-|\+|\*|\^|\%/ },
    { s:Symbol(Math.random()), n: CharType.Blank, v: /\t| / },
    { s:Symbol(Math.random()), n: CharType.Br, v: /\n/ },
    { s:Symbol(Math.random()), n: CharType.Bquota, v: /`/ },
    { s:Symbol(Math.random()), n: CharType.Squota, v: /'/ },
    { s:Symbol(Math.random()), n: CharType.Dquota, v: /"/ },
    { s:Symbol(Math.random()), n: CharType.Slant, v: /\// },
    { s:Symbol(Math.random()), n: CharType.Bslant, v: /\\/ },


    
    { s:Symbol(Math.random()), n: CharType.None, v: /\\/ },
]

const charTypeMap: { [key: string]: CharItem } = charArr.reduce((r: { [key: string]: CharItem }, v) => {
    r[v.n] = v
    return r
}, {})


const charSymbolMap: { [x: string]: CharItem } = charArr.reduce((r: { [x: string]: CharItem }, v) => {
    r[v.s.toString()] = v
    return r
}, {})

export default CharType

export {CharItem,CharType,charArr,charTypeMap,charSymbolMap}