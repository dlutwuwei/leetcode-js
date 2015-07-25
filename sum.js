/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var now = 0;
    var path=[];
    var answer=[];

    var ob = {};
    for(var i=0; i<nums.length; i++){
    	ob[nums[i]] = i;
    }

    for(var j=0; j<nums.length; j++){
    	var other = target - nums[j];
    	if(ob[other]){
    		return [(j+1),(ob[other]+1)];
    	}
    }
};


console.log(twoSum([2,7,11,15],9));