/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var index = {};
    var max = 0, len = 0;
    for (var i = 0; i < s.length; i++) {
            // be careful not to use '>0', as '==0' also valid,
            // so use '!=-1' or '>=0' 
        if (index[s.charAt(i)]!=null) {
			console.log(index, i, len, max)
            max = Math.max(max, len);
            len = 0;
            // be careful to change i first, then reinitialize the array
            i = index[s.charAt(i)] + 1;
            index={};
        }
        index[s.charAt(i)] = i;
        len++;
    }
    return Math.max(max, len);

};
console.time('xxx');
console.log(lengthOfLongestSubstring("abcabcbb"))
console.timeEnd('xxx')