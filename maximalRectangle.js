/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    var m = matrix.length, n= matrix[0].length;
    var dp = [];
    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){
            if(i=0){
                dp[0] = 0;
            }
            if(j=0){
                dp[j] = dp[]
            }
            if(matrix[i][j]==1){
                
            }
        }
    }
};

maximalRectangle([[0,0,0,1],[1,1,1,1],[1,1,1,1]]);