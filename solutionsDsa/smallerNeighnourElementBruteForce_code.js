function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var arr = input[1].split(' ').map(a=>parseInt(a))
    var res = []
    res.push(-1)
    for(var i = 1;i<arr.length;i++){
        for(var j = i-1;j>=0;j--){
            if(arr[j] <arr[i]){
                res.push(arr[j])
                break
            }
        }
        // console.log(j)
        if(j == -1){
            res.push(-1)
        }
    }
    console.log(res.join(' '))
} 
