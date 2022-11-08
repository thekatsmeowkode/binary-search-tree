
class Node{
    constructor(data) {
        this.data = data
        this.leftChild = null
        this.rightChild = null
    }

    insertNode(value) {
        if (this.data === value) return
        else if (this.data > value) {
            if (this.leftChild) {this.leftChild.insertNode(value)}
            else {new Node(value)}
        }
        else {
            if (this.rightChild) {this.rightChild.insertNode(value)}
            else {new Node(value)}
        }
    }

    deleteNode(value) {
        if (value < this.data && this.leftChild) {this.leftChild = this.leftChild.deleteNode(value)}
        else if (value > this.data && this.rightChild) {this.rightChild = this.rightChild.deleteNode(value)}
        else {
            if (this.rightChild && this.leftChild) {
                let minimum = this.rightChild.findMin()
                this.data = minimum
                this.rightChild = this.rightChild.deleteNode(minimum)
        }
            else if (this.leftChild) {return this.leftChild}
            else if (this.rightChild) {return this.rightChild}
            else return null;
        }
        return this;
    }

    findMin() {
        let rightRoot = this
        while (rightRoot.left) 
        {current = current.leftChild}
        return rightRoot.data
    }

    findNode(value) {
        let node 
        if (value === this.data) {return node = this}
        else if (value < this.data && this.leftChild) {
            node = this.leftChild.findNode(value)
            return node}
        else if (value > this.data && this.rightChild) {
            node = this.rightChild.findNode(value)
            return  node
        }
        return "data not found"
    }

    levelOrderNodeList(callbackFn) {
        let pointer = this
        const queue = [pointer]
        const result = []
        while (queue.length > 1) {
            result.push(pointer)
            queue.splice(0,1)
            if (pointer.leftChild) queue.push(pointer.leftChild)
            if (pointer.rightChild) queue.push(pointer.rightChild)
            current = queue[0]
        }
        if (callbackFn) {return callbackFn(result)}
        return result
    }
}