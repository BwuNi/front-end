import FA from "../FA";
import word from "./word"
import number from './number'
import lr from './LR'
import lr1 from './LR1'
import lr2 from './LR2'
import equal from './equal'
import calcu from './calcu'
import colon from './colon'
import string from './string'

export default function(fa:FA){
    word(fa)
    number(fa)
    lr(fa)
    lr1(fa)
    lr2(fa)
    equal(fa)
    calcu(fa)
    colon(fa)
    string(fa)
    return fa
}