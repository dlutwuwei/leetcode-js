/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
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
    while (stack.length != 0) {
        var h = stack.pop();
        max = Math.max(max, h[0] * (i - h[1]));

    }
    console.log(stack, max)

    return max;  
};

console.log(largestRectangleArea([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1]))