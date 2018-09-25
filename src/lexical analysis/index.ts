import FA from './FA'
import rule from './rule'

const fa = new FA()

rule(fa)

export default fa.toDfa()

