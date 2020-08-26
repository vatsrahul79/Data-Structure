function processData(input) {
    //Enter your code here
    input = input.trim().split('\n')
    var n = Number(input[0])
    var arr = []
    for (var i = 1; i <= n; i++) {
        arr.push(Number(input[i]))
    }

    arr.sort((a, b) => (a - b))
    // var q = Number(input[2])
    for (var i = n + 2; i < input.length; i++) {
        var res = findPower(arr, Number(input[i]))
        var sum = 0
        for (var j = 0; j < res; j++) {
            sum += arr[j]
        }
        console.log(res, sum)
    }
    function findPower(arr, M) {
        // console.log(arr,M)
        var lo = 0
        var hi = n - 1
        while (lo <= hi) {
            var mid = Math.floor((lo + hi) / 2);
            if (arr[mid] <= M) {
                lo = mid + 1
            } else {
                hi = mid - 1;
            }
        }
        return lo
    }


} 
