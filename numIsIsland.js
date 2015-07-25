var numIslands = function(grid) {
    var answer = 0;
    for(var i=0; i< grid.length; i++){
        for(var j=0; j< grid[i].length; j++){
            if(grid[i][j] == 1){
                help(grid, i, j);
                ++answer;
            }
        }
    }
    return answer;
};

function help(grid, x, y){
    if(x<0 || x>=grid.length|| y<0 || y>=grid[x].length || grid[x][y]!=1){
        return;
    }
    var line = grid[x].split('');
    console.log(line)
    line[y] = 0;
    grid[x] = line.join('');
    help(grid,x-1, y);
    help(grid,x+1, y);
    help(grid,x, y+1);
    help(grid,x,y-1);
}
console.log(numIslands(["10101"]))