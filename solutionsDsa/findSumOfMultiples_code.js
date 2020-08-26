function processData(input) {
    //Enter your code here
    var [n, k, y] = input.trim().split(' ').map(a => parseInt(a))
    var i = 1
    var sum = 0
    var product = 1
    while (product <= n * k) {
        product = i * n
        if (product % y == 0 && product % n == 0) {
            sum += product
        }
        i++
    }
    console.log(sum)
}  