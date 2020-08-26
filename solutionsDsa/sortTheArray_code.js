function processData(input) {
    //Enter your code here
     input = input.split('\n')
    var n = Number(input[0])
    var arr = input[1].split(' ').map(a=>parseInt(a))
    var tempArr = [...arr]
    // console.log(tempArr)
    tempArr.sort((a,b)=>(a-b))
    // console.log(tempArr,arr)
    var ans
    var res = checkReverse(arr,tempArr,n)    //finding first mismatch

    if(res){
        console.log("yes")
    }
    else{
        console.log("no")
    }
    function checkReverse(arr,tempArr,n){
        //to find the first index mismatch
        for(var first = 0;first < n;first++){
            if(tempArr[first] != arr[first]){
                break
            }
        }
        //to find the last mismatch
        for(var last = n-1;last >=0 ;last--){            
              if(tempArr[last] != arr[last]){
                break
            }
        }
    if(first >= last){
                ans = [first-n+1,first-n+1]
            return true
        }
        //to check decreasing array
        ans = [first+1,last+1]
        while(first != last){
            first++
            if(arr[first-1] < arr[first]){
                return false
            }
            
        }

        return true
    } 
    if(res){
            console.log(ans.join(' '))

    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
