function processData(input) {
    //Enter your code here
    var arr = input.split('').map(a=>parseInt(a))
    // console.log(arr)
    var res = ''
    var count = 0
    for(var i = 0;i<arr.length;i++){
        for(var j = i ;j<arr.length;j++){
            if(arr[j] % 2 == 0){
                count++
            }
        }
        res += count + ' '
        count = 0
    }
    console.log(res)
}