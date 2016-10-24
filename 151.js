/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return reverse(str.split(' ')).join(' ');
    
};

function reverse(words) {
    var result = [];
    for(var i=words.length-1; i>=0; i--){

        if(words[i]!=' ') result.push(words[i]);
    }
    return result;
}

console.log(reverseWords(''))