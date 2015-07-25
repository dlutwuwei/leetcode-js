/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var m = word1.length, n = word2.length;
    var dp = new Array(m+1);
    for(var i=0; i<= m; i++){
        dp[i] = new Array(n+1);
        for(var j=0; j<= n; j++){
            if(i==0){
                if(j==0){
                    dp[i][j] = 0;
                }else{
                    dp[i][j] = j;

                }
            }
            else if(j==0){
                dp[i][j] = i;
            }else{
                dp[i][j] = Math.min(dp[i-1][j-1]+ (word1[i-1]==word2[j-1]?0:1),
                    Math.min(dp[i-1][j] + 1, dp[i][j-1]+1)
                )
            }
                            console.log(dp)

        }
    }
    return dp[m][n];
};

console.log(minDistance("abc", "bac"));