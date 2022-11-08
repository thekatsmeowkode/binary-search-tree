let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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

}

class Tree {
    constructor(array) {
        this.array = [...new Set(array)].sort((a, b) => a - b)
        this.root = this.buildTree(array)
    }

    buildTree(array) {
        if (array.length === 0) {return null}
        let mid = Math.floor(array.length/2)
        let leftSide = array.slice(0, mid)
        let rightSide = array.slice(mid+1)
        let rootNode = new Node(array[mid])
    
        rootNode.leftChild = this.buildTree(leftSide)
        rootNode.rightChild = this.buildTree(rightSide)
        
        return rootNode
    }

    find(value) {
        
    }

}

  
////
let tree = new Tree(array)
console.log(tree.root)