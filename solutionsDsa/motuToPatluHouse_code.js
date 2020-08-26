function processData(input) {
    //Enter your code here
    var arr = [5,4,3,2,1]
    var n = Number(input)
    var i = 0
    var res = 0
    while(n > 0){
       var ans = Math.floor(n/arr[i]) 
       res+=ans
       n = n % arr[i]
        i++
    }
    console.log(res)
} 
