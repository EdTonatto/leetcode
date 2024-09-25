/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let result = new ListNode(0, head);
    let backNode = result;

    for(let i = 0; i < n; i++)
        head = head.next;

    while(head){
        head = head.next;
        backNode = backNode.next;
    }

    backNode.next = backNode.next.next;
    return result.next;
};

const head = [1,2,3,4,5], n = 2;
removeNthFromEnd(head, n);