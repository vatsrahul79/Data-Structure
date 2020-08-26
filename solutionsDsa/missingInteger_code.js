function processData(input) {
    //Enter your code here
    var arr = input.split(' ').map(a=>parseInt(a))
    var n = arr.length+1
    var sum = n*(n+1)/2
    var sum2 =0
    for(var i = 0;i<n-1;i++){
        sum2 += arr[i]
        }
    console.log(sum-sum2)
} 
