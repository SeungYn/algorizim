/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//bfs
var invertTree = function (root) {
  if (root === null) return null;

  const s = [root];

  while (s.length) {
    const node = s.shift();

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left !== null) {
      s.push(node.left);
    }
    if (node.right !== null) {
      s.push(node.right);
    }
  }

  return root;
};

// 반복 구조
// var invertTree = function(root) {
//     if(root === null) return null;

//     const s = [root];

//     while(s.length){
//         const node = s.pop();

//         const temp = node.left;
//         node.left = node.right;
//         node.right = temp;

//         if(node.left !== null){
//             s.push(node.left);
//         }
//         if(node.right !== null){
//             s.push(node.right);
//         }

//     }

//     return root;
// };

// 후위 순위
// var invertTree = function(root) {
//     if(root !== null){
//         invertTree(root.left);
//         invertTree(root.right);

//         const temp = root.left;
//         root.left = root.right;
//         root.right = temp;

//     }

//     return root;
// };

// 내가 원하던 방식
// var invertTree = function(root) {
//     if(root !== null){
//         const temp = root.left;
//         root.left = root.right;
//         root.right = temp;

//         invertTree(root.left);
//         invertTree(root.right);
//     }

//     return root;
// };
// 오른쪽 노드를 왼쪽에 계속 붙이는 방식
// var invertTree = function(root) {
//     if(root === null) return root;
//     const newNode = new TreeNode(root.val);
//     newNode.left = invertTree(root.right);
//     newNode.right = invertTree(root.left);

//     return newNode;
// };
