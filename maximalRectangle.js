/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    var m = matrix.length, n = matrix[0].length;
    var height = [];
    var maxArea = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (i == 0) {
                height[j] = matrix[i][j] == 1 ? 1 : 0;
            } else {
                height[j] = matrix[i][j] == 1 ? height[j] + 1 : 0;
            }
        }
        maxArea = Math.max(maxRectangleArea(height), maxArea)
    }
    return maxArea;
};

function maxRectangleArea(height) {
    var stack = [], max = 0, current = -1;

    for (var i = 0; i < height.length; i++) {
        if (height[i] > current) {
            current = height[i];
            stack.push([height[i], i]);
        } else if (height[i] < current) {
            current = height[i];
            var x = stack[stack.length-1],y=x;

            while (stack.length>0 && x[0] > current ) {
                stack.pop();
                max = Math.max(max, x[0] * (i - x[1]));
                y = x;
                x = stack[stack.length-1];

                
            }
            stack.push([height[i],y[1]]);

        }
        //console.log(stack, max, current)


    }
        console.log(stack, height,i)
    while (stack.length != 0) {
        var h = stack.pop();
        max = Math.max(max, h[0] * (i - h[1]));

    }
    console.log(max)

    return max;
}
// var x = maximalRectangle([
//      [0, 1, 0, 1],
//      [1, 1, 1, 1], 
//      [1, 1, 1, 1], 
//      [1, 0, 1, 1]]);
var x = maximalRectangle([
    "10111",
    "01010",
    "11011",
    "11011",
    "01111"]);
console.log(x)