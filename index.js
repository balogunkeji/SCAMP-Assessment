var fibonacci = function(x) {
    var a = 0, b = 1, c = 1;
    for(var j = 2; j <= x; j++) {
        c = a + b;

        a = b;
        b = c;
    }

    return c;
}

console.log(fibonacci(20));