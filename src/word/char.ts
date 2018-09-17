
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
    Calcu  = 'Calcu', 

    Blank = 'Blank', 

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
    
    Error = 'Error', 
}

const charMap = [
    { n: CharType.Letter, v: /[a-zA-Z]/, },
    { n: CharType.Number, v: /[0-9]/ },

    { n: CharType.Equal, v: /=/ },
    { n: CharType.Dot, v: /./ },

    { n: CharType.L0, v: /\(/ },
    { n: CharType.R0, v: /\)/ },

    { n: CharType.L1, v: /\[/ },
    { n: CharType.R1, v: /\]/ },

    { n: CharType.L2, v: /{/ },
    { n: CharType.R2, v: /}/ },

    { n: CharType.L3, v: /</ },
    { n: CharType.R3, v: />/ },

    { n: CharType.No, v: /!/ },
    { n: CharType.Or, v: /\|/ },
    { n: CharType.Nd, v: /&/ },

    { n: CharType.Calcu, v: /\-|\+|\*|\^|\%/ },

    { n: CharType.Blank, v: /\n|\t| / },

    { n: CharType.Bquota, v: /`/ },
    { n: CharType.Squota, v: /'/ },
    { n: CharType.Dquota, v: /"/ },

    { n: CharType.Slant, v: /\// },
    { n: CharType.Bslant, v: /\\/ },
]


function checkChar(char: string): CharType {



    for (let item of charMap) {
        if (item.v.test(char)) return item.n
    }

    return CharType.Error
}


export { CharType, checkChar }