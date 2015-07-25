/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}
var addTwoNumbers = function(l1, l2) {
	var answer = new ListNode(),
		pos = answer;
	pos.val = (l1.val + l2.val)%10;	
	var x = parseInt((l1.val + l2.val)/10);
	while (l1.next != null && l2.next != null) {
		pos.val = (l1.val + l2.val)%10;	
		x = parseInt(pos.val/10);
		l1 = l1.next;
		l2 = l2.next;
		pos.next = new ListNode();
		pos = pos.next;
	}
	if (l1.next != null) {
		pos.next = l1.next;
	}
	if (l2.next != null) {
		pos.next = l2.next;
	}
	console.log(x)
	if(x!=0){
		pos.next = new ListNode(x)
	}
	return answer;
};

console.log(addTwoNumbers({
	val: 5,
	next: null
}, {
	val: 5,
	next: null
}))