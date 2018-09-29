export default class Link<T>{
    
    head:Node<T>|null = null

    tail:Node<T>|null = null

    constructor() {

    }

}

class Node<T>{
    value: T

    next: Node<T> | null = null
    above: Node<T> | null = null

    constructor(value: T) {
        this.value = value
    }

}



