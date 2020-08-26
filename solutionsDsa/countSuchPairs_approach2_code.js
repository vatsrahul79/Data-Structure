function processData(input) {
    input = input.split('\n')
    var [n,target]  = input[0].split(' ').map(a=>parseInt(a))
    var arr = input[1].split(' ').map(a=>parseInt(a))
    var obj ={}
    for(var i = 0;i<n;i++){
        if(obj[arr[i]] > 0){
            obj[arr[i]]++
        }
        else{
            obj[arr[i]] = 1
        }
    }
    // console.log(obj)
    var count = 0
    for(var i = 0;i<n;i++){
        if(obj[target-arr[i]]){
        count +=obj[target-arr[i]]
        }
        // console.log(count)
        if((target-arr[i]) == arr[i]){
            count--
        }
    }
    console.log(count/2)
} 

