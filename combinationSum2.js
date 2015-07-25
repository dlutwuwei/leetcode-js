/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	candidates.sort(function(a, b) {
		return a > b ? 1 : -1;
	});
	var answer = [];
	var path = [];
	console.log(candidates)
	help(candidates, 0, 0, target, path, answer, true);
	return answer;
};

function help(can, now, sum, target, path, answer, last) {
	if (sum > target) {
		return;
	}
	if (now >= can.length) {
		if (sum == target) {
			answer.push(path.slice().sort(function(a, b) {
				return a > b ? true : false;
			}));
		}
		return;
	}
	if (now == 0 || can[now] != can[now - 1] || last) {
		path.push(can[now]);
		//console.log(path)
		help(can, now+1, sum + can[now], target, path, answer, true)
		path.pop();
	}
	help(can, now + 1, sum, target, path, answer, false);
}

console.log(combinationSum2([5,4,5,1,5,3,1,4,5,5,4], 10));