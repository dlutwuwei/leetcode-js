/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var hove = new Array(s.length);
    return help(s, 0, wordDict, hove);
};


function help(s, now, wordDict, hove) {
    if (now >= s.length) {
        return true;
    }
    if (hove[now]) {
        return false;
    }
    hove[now] = true;
    for (var i = now + 1; i <= s.length; i++) {
        if (arraysearch(wordDict, s.substring(now, i)) && help(s, i, wordDict, hove)) {
            return true;
        }
    }
    return false;

}

function arraysearch(d, word) {
    for (var i = 0; i < d.length; i++) {
        if (d[i] == word) return true;
    }
    return false;
}

console.log('a', wordBreak('a',[]))
console.log('leetcode', wordBreak("leetcode", ['leet', 'code']));
