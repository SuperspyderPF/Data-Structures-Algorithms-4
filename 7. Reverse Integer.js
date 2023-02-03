var reverse = function(x) {
    let positive = false
    if (x >= 0) positive = true
    x = parseInt(x.toString().split("").reverse().join(""))
    if(x > 0x7FFFFFFF) return 0
    return (positive ? x : x - (x*2))
    
};