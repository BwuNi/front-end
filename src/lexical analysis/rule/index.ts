import FA from "../FA";
import word from "./word"
import number from './number'

export default function(fa:FA){
    word(fa)
    number(fa)
    return fa
}