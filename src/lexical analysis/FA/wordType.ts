
enum WordType {
    String = 'String', 
    Number = 'Number', 
    Calcu = 'Calcu', 
    Boolen = "Boolen",
    
    // ()
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
    


    Blank = 'Blank', 

    // ==
    Equal = 'Equal', 
    // >=
    BiggerEqual = '=>', 
    // <=
    SmallerEqual = '<=', 

    //Logic
    And = "&&",
    Or = '||',
    Not = '!',

    comment = "//",

    // =
    Set = 'Set', 
    // :
    Colon = 'Colon', 

    Sign = 'Sign', 
    KeyWord = 'Key',
    Error = 'Error',

    None = "None"
}

export default WordType