/**
 * @param {number} n
 * @return {string[]}
 */

function help(n, answer){
    if(n==0){
        answer.push("");
        return;
    }
    var temp = {};
    temp.x = 0;
    temp.y= 0;
    temp.now = "";
    var queue = [];
    for(queue.push(temp);queue.length!=0;true){
        var other = {};
        console.log(queue)

        temp = queue.shift()
        if(temp.x < n){
            other.x = temp.x + 1;
            other.y = temp.y;
            other.now = temp.now + '(';
            queue.push(other);

        }
        //other = {};
        if(temp.x > temp.y){
            other.x = temp.x;
            other.y = temp.y + 1;
            other.now = temp.now + ')';
            console.log(other)
            if(other.y === n){
                answer.push(other.now);
            }else{
                queue.push(other);
            }

        }
    }
}
var generateParenthesis = function(n) {
    var answer = [];
    help(n, answer);
    return answer;
};
console.log(generateParenthesis(2));
