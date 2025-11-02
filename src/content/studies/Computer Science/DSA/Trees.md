A tree is a general recursive data structure, and forms a subset of a directed graph, where we arrange nodes in a hierarchy. Every tree has a *root* node which does not have a parent, while a *leaf* node has no children. Any element can only have one *parent*, but any number of *children*. A *sibling* to a node is another node that shares the same parent. An *uncle* is the parent's sibling, and a *grandparent* is a the parent's parent. A *niece* or *nephew* is a sibling's child. The *height* of a tree is the maximum number of hierarchical levels in a tree including the node. The *ancestors* of a node are its recursive parents, and the *depth* of a node is the number of ancestors up to the root. A node's children are also usually ordered, with directions like left and right denoting that.

## Traversal

*Pre-order* traversal visits the node itself before its children, from left to right. *Post-order* traversal visits the children first in the same order, and then the node itself. *In-order* traversal traverses the left child first, then visits the node, then traverses the right child, only visiting the node when there is no left child.

![[imgs/traversal.png]]

## Binary Search Trees (BST)

A BST is a binary tree (maximum of two children for any node) where every node has a comparable key, and every key has a value greater than all keys in its left sub-tree, and less than all keys in its right sub-tree. When traversing the tree in-order, we will print out all values in sorted order. When searching for a value, we compare with the keys as we go along to narrow down the search, and with a BST on average-case this be halving the tree every level giving us an average O($\log{n}$) search and insertion time. However a BST can become "unbalanced", where a larger number of children are skewed in one direction, and in the worst case all nodes can be skewed in the same direction giving us a worst-case time complexity of O($n$).

## Balanced Search Trees

To avert the problem of having a skewed BST, we must re-balance the tree after insertion and deletion to ensure that search times remain O($\log{n}$).

### AVL Trees

Defined as a BST where the difference between the heights of the children of any node must be at most 1. When insertion or deletion happens, we recursively go up the tree from the new/old node $w$ until we find a an ancestor node $z$ whose children exhibit an imbalance. Then we use *tri-node restructuring* to fix this tree. The operation takes constant time and is done as following:

- let $y$ be the child of $z$ with largest depth, and $x$ likewise the child of $y$
- Using in-order traversal, find assign the values $a$, $b$ and $c$ to $x$, $y$ and $z$ such that their pair of traversal order follows $a<b<c$
- let $T_{0}$, $T_{1}$, $T_{2}$ and $T_{3}$ be in-order the four sub-trees of $x$, $y$ and $z$ not rooted at these nodes.
- move $a$ to be the left child $b$, and move $T_{0}$ and $T_{1}$ to be the left and right sub-trees of $a$ respectively
- move $c$ to be the left child $b$, and move $T_{2}$ and $T_{3}$ to be the left and right sub-trees of $c$ respectively

A restructuring may also be called a single or double rotation depending on the order of $x$, $y$ and $z$, but the returned sub-tree with root at $b$ represents the balanced part that the old $z$ should be replaced with. The time complexity of this restructuring is constant for insertion, but can logarithmic in removal. Still, we can now always guarantee O($\log{n}$) for searching.

### Red-Black Trees

This is a balanced BST with the following rules:

1. All nodes are either red or black
2. The root is black
3. All leaf nodes are black
4. If a node is red, then both its children are black
5. For all nodes, the simple path to all its descendant nodes must contain the same number of black nodes

When inserting, if the new node is root we colour it black, otherwise it is red by default. We then check if any of the above rules are not met. If property 4 is not met, it is a "double-red" violation and the restructuring is as follows:

- label the violating red child node as $z$, its parent red node $v$, its uncle node $w$, and grandparent node $u$
- If $w$ is black:
	- perform tri-node restructuring with $z$, $v$ and $u$
	- colour the resulting $b$ node black, $a$ and $c$ red
- If $w$ is red:
	- do a recolouring: $v$ and $w$ to black; $u$ to red unless it is root.
	- repeat up the tree again if necessary

For removal, the operation is slightly more complex.