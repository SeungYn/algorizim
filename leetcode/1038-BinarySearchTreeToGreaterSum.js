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
var bstToGst = function (root) {
  if (root === null) return root;
  let sum = 0; // 오른쪽을 모두 더한 값
  function dfs(root) {
    if (root === null) return 0;
    dfs(root.right);
    sum += root.val;
    root.val = sum;
    dfs(root.left);

    return root.val;
  }
  dfs(root);

  function print(root) {
    if (root === null) return;

    print(root.right);
    console.log(root.val);
    print(root.left);
  }

  return root;
};
