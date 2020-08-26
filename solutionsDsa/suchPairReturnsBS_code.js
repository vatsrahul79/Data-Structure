function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var[n ,k ] = input[0].split(" ").map(a=>parseInt(a))
    var arr = input[1].split(' ').map(a=>parseInt(a)).sort((a,b)=>(a-b))
    for(var i = 0;i<n;i++){
        var target = k-arr[i]
        var res = search(arr,target)
        // console.log(res)
        if(res){
            break
        }
    }
    if(res){
        console.log(1)
    }
    else{
        console.log(-1)
    }
    function search(arr,target)  {
        var lo = 0
        var hi = n-1
        while(lo <=hi){
            var mid = Math.floor((lo+hi)/2)
            if(arr[mid] == target){
                return true
            }
            else if(arr[mid] > target){
                hi = mid-1
            }
            else{
                lo = mid+1
            }
        }
        return false
    }  
} 
