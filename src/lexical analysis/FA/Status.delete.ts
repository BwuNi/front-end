
enum Status {
    
    outCall='outCall',
    inCall = 'inCall',

}

type StatusItem = {
    n:Status,
    s:Symbol
}

const statusArr:StatusItem[] = [
    {s:Symbol(Math.random()),n:Status.outCall},
    {s:Symbol(Math.random()),n:Status.inCall}
]

type StatusEnd={
    s:Symbol,
    call:Function
}

const StatusMap: { [key: string]: StatusItem } = statusArr.reduce((r: { [key: string]: StatusItem }, v) => {
    r[v.n] = v
    return r
}, {})


const StatusSymbolMap: { [x: string]: StatusItem } = statusArr.reduce((r: { [x: string]: StatusItem }, v) => {
    r[v.s.toString()] = v
    return r
}, {})

const statusEndArr:[] = []

export {Status,statusArr,statusEndArr,StatusEnd,StatusMap,StatusSymbolMap,StatusItem}
export default Status