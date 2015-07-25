/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return maxsub(nums, 0, nums.length-1);
};

function maxsub(nums, start, end){
    if( start == end){
        return nums[start];
    }
    var mid = parseInt((start + end)/2);

    var answer = Math.max( maxsub(nums, start, mid), maxsub(nums, mid+1, end) );
    console.log(nums[mid], start, end, answer)

    var now = nums[mid], may = now;
    for(var i= mid-1; i>=0; i--){
        may = Math.max(may, now+=nums[i]);
    }
    now = may;
    for(var j= mid+1; j<=nums.length-1; j++){
        may = Math.max(may, now+=nums[j]);
    }
    
    return Math.max(answer, may);
    
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    var dp = [];
    dp[0] = nums[0];
    var answer = dp[0];
    for(var i=1; i< nums.length; i++){
        dp[i] = Math.max(dp[i-1]+nums[i], nums[i]);
        answer = Math.max(dp[i], answer);
            console.log(dp,nums)

    }
    return answer;
};



console.log(maxSubArray1([8,-19,5,-4,20]));