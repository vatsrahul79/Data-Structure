function processData(input) {
    //Enter your code here
    input = input.trim().split('\n')
    var t = Number(input[0])
    var line = 1
    for(var i = 0;i<t;i++){
        var n = Number(input[line++])
        var arr = input[line++].trim().split('').map(a=>parseInt(a))
          var  ans = findNext(arr,n)
            console.log(ans)
            
    }

    function findNext(arr,n){
    var pos = -1
       for(var i = n-2;i>=0;i--){
           // console.log(arr[i-1],arr[i])
        if(arr[i] < arr[i+1]){
            pos = i
            // console.log('ghj')
            break
        }
    }
    if(pos == -1){
return -1
    }
    // console.log(pos)
    for(var i = pos+1;i<n;i++){
        if(arr[i] <= arr[pos]){
                 swap(arr,pos,i-1)         
            break
            }
        else if(i == n-1){
             swap(arr,pos,i)
            break
        }

        }

    function swap(arr,pos,i){
        var temp =arr[pos]
        arr[pos] = arr[i]
        arr[i] =temp
    }
    var res = ""
    for(var i = 0;i<=pos;i++){
        res+=arr[i]
    }
    for(var j = pos+1;j<n;j++){
        res+=arr.pop()
    }   
return res
    }

} 
