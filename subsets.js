/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var subsets = function(nums) {
//   var answer = [];
//   var path = [];
//   nums.sort(function(a, b){
//     return a - b;
//   })
//   help(nums, 0, nums.length, path, answer);
//   return answer;
// };

// function help(nums, now, level, path, answer){
//     answer.push(path);
//     if(level == 0){
//         return;
//     }
//     //console.log(now, level, path.length, path)
    
//     for(var i = now; i< nums.length; i++){

        
//         var temp = path.slice();
//         temp.push(nums[i]);
//         //answer.push(temp);
//         console.log(now, level, path, temp)
//         help(nums, i+1, level-1, temp, answer);
//     }
// }

var subsets = function(nums) {
  var answer = [];
  var path = [];
  nums.sort(function(a, b){
    return a - b;
  })
  var start = 0;
  var end = Math.pow(2, nums.length)-1;
  while(start<=end){
    answer.push(tanslate(nums, start));
    start ++;
  }
  return answer;

};

function tanslate(nums, num){
  var bit = (num).toString(2);


  if(bit.length<nums.length){
    var dis = nums.length-bit.length;
    for(var j=0; j<dis; j++){
      bit = '0' + bit;
    }
  }
      console.log(nums.length, bit.length, bit);

  var path = [];
  for(var i=0; i<bit.length;i++){
      if(bit[i]==1){
        path.push(nums[i]);
      }
  }
  return path;
}
console.time("start")
console.log(subsets([3,2,4,1]))
console.timeEnd('start')