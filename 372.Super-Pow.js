/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    var cycle = findCycle(a);
    var r = 0;
    for(var i=0; i<b.length; i++) {
        r = (r * 10 + b[i]) % cycle.length
    }
    return cycle[(r-1)% cycle.length];
};

function findCycle(a) {
    var r = a % 1337;
    var cycle = [];
    var map = {}
    while(map[r] === undefined) {
        cycle.push(r);
        map[r] = true;
        r = (r * a) % 1337;
    }
    return cycle;
}
