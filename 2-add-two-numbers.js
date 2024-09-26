/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1, null);
    let result = dummy;

    let sum = 0;
    let carry = 0;

    while(l1 || l2 || carry){
        sum = carry;

        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        dummy.next = new ListNode(sum % 10);
        dummy = dummy.next;
    }
    return result.next;
};

// const l1 = [2,4,3], l2 = [5,6,4];
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let teste = addTwoNumbers(l1, l2);
while(teste){
    console.log(teste.val);
    teste = teste.next;
}
