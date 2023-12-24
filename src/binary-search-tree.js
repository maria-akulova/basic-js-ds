const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.newNode(this.rootNode, data);
  }

  newNode(node, data) {
    if (node === null) {
      return { data, left: null, right: null };
    }

    if (data < node.data) {
      node.left = this.newNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.newNode(node.right, data);
    }
    return node;
  }

  has(data) {
    return this.search(this.rootNode, data) !== null;
  }

  find(data) {
    return this.search(this.rootNode, data);
  }

  search(node, data) {
    if (node === null || node.data === data) {
      return node;
    }
    if (data < node.data) {
      return this.search(node.left, data);
    } else {
      return this.search(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      const minRight = this.findMin(node.right);
      node.data = minRight.data;
      node.right = this.removeNode(node.right, minRight.data);
    }
    return node;
  }

  min() {
    const minNode = this.findMin(this.rootNode);
    return minNode ? minNode.data : null;
  }

  findMin(node) {
    while (node !== null && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  max() {
    const maxNode = this.findMax(this.rootNode);
    return maxNode ? maxNode.data : null;
  }

  findMax(node) {
    while (node !== null && node.right !== null) {
      node = node.right;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree
};