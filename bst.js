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
            if (this.left) {this.left.insertNode(value)}
            else {new Node(value)}
        }
        else {
            if (this.right) {this.right.insertNode(value)}
            else {new Node(value)}
        }
    }

    deleteNode(value)
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

}

  
////
let tree = new Tree(array)
console.log(tree.root)