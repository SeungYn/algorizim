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
 * @return {number}
 */
// 가장 이상적인 재귀
var maxDepth = function (root) {
  if (root === null) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};

// bfs
var maxDepth = function (root) {
  let result = 0;
  if (root === null) return result;
  const q = [root];

  while (q.length) {
    result++;

    const qSize = q.length;
    for (let i = 0; i < qSize; i++) {
      const node = q.shift();
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }

  return result;
};

//dfs
var maxDepth = function (root) {
  let result = 0;

  function searchTree(root, dep = 0) {
    if (root === null) return;

    result = Math.max(result, dep);
    searchTree(root.left, dep + 1);
    searchTree(root.right, dep + 1);
  }
  searchTree(root, 1);

  return result;
};
