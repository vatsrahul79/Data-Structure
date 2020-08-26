function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var tcs = Number(input[0])
    for (var i = 1; i <= tcs; i++) {
        var x = Number(input[i])
        var X = Number(input[i])
        var ans = 0
        var total = 0
        if (x < 10) {
            console.log(x)
        }
        else {
            while (x >= 10) {
                returns += Math.floor(x / 10)
                x = x % 10 + Math.floor(x / 10)
            }
            console.log(X + returns)

        }
    }
}
