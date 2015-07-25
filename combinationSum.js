/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	candidates = candidates.sort(function(a, b) {
		return a > b ? true : false;
	});
	var answer = [];
	var path = [];
	console.log(candidates)
	help(candidates, 0, 0, target, path, answer);
	return answer;
};

function help(can, now, sum, target, path, answer) {
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
	if (now == 0 || can[now] != can[now - 1]) {
		path.push(can[now]);
		help(can, now, sum + can[now], target, path, answer)
		path.pop();
	}
	help(can, now + 1, sum, target, path, answer);
}

console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));