function processData(input) {
    //Enter your code here
    input = input.trim().split('\n')
    var n = Number(input[0])
    var arr = input[1].split(' ').map(a => parseInt(a))
    var min = Number.MAX_SAFE_INTEGER
    var flag = false
    for (var i = 0; i < n; i++) {
        var sum = 0
        for (var j = 0; j < n; j++) {
            if (i != j) {
                sum += arr[j]
            }
        }
        if (sum % 7 == 0) {
            if (min > arr[i]) {
                min = arr[i]
                var ans = i
                flag = true
            }
        }
    }
    if (flag) {
        console.log(ans)
    }
    else {
        console.log(-1)
    }
} 