function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var tcs = Number(input[0])
    for (var i = 1; i <= tcs; i++) {
        var arr = input[i].split(' ').map(a => parseInt(a))
        var diff = (arr[2] - arr[0]) * 60 + arr[3] - arr[1]
        var hrs = Math.floor(diff / 60)
        var mins = diff % 60
        console.log(hrs, mins)
    }
} 