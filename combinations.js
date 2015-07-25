/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var answer = [];
  var path = [];
  help(n, k, 0, k, path, answer);
  return answer;
};

function help(n, k, min, level, path, answer){
    if(level == 0){
        answer.push(path);
        return;
    }
    //console.log(n, min,k, path.length, path)
    
    for(var i = min+1; i<=n; i++){

        if(n - i < k - path.length - 1) 
        {
          return;
        }
        var temp = path.slice();
        temp.push(i);
        //console.log(level, path, temp)
        help(n, k, i, level-1, temp, answer);
    }
}

console.log(combine(4, 2))