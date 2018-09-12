
enum CharType {
    Letter = 'Letter', Number = 'Number', Calcu = 'Calcu', L = 'L', R = 'R', Blank = 'Blank', Error = 'Error', Dquota = 'Dquota', Squota = 'Squota', Bquota = 'Bquota', Equal = 'Equal',
    Bslant = 'Bslant'
}

const charMap = [
    { n: CharType.Letter, v: /[a-zA-Z]/, },
    { n: CharType.Calcu, v: /\-|\+|\*|\/|\^|\%/ },

    { n: CharType.L, v: /\(/ },
    { n: CharType.R, v: /\)/ },

    { n: CharType.Number, v: /[0-9]/ },
    { n: CharType.Blank, v: /\n|\t| / },
    { n: CharType.Equal, v: /=/ },

    { n: CharType.Bquota, v: /`/ },
    { n: CharType.Squota, v: /'/ },
    { n: CharType.Dquota, v: /"/ },
    { n: CharType.Bslant, v: /\\/ },
]


function checkChar(char: string): CharType {



    for (let item of charMap) {
        if (item.v.test(char)) return item.n
    }

    return CharType.Error
}


export { CharType, checkChar }