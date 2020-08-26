function processData(input) {
    //Enter your code here
    var count = 0
    input = input.trim().split('\n')
    var [n, k] = input[0].trim().split(' ').map(a => parseInt(a))
    var arr = input[1].trim().split(' ').map(a => parseInt(a))
    for (var i = 0; i < n - 1; i++) {
        if (arr[i] >= arr[i + 1] && arr[i] >= arr[k - 1] && arr[i] != 0) {
            count++
        }
    }
    if (arr[n - 1] >= arr[k - 1] && arr[n - 1] != 0) {
        count++
    }
    console.log(count)
} 