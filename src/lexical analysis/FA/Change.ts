import CharType from './Char'

type Change = {
    now: Symbol,
    accept: CharType,
    then: Symbol
}

const changeArr: Change[] = []

export default Change
export { Change, changeArr }