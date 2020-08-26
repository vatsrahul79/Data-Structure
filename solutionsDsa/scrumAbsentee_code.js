function processData(input) {
    //Enter your code here
     var arr = input.split(' ').map(a=>parseInt(a))
    var res = findMissing(arr,0,arr.length-1)
    console.log(res)
    function findMissing(arr,lo,hi){
    while(lo<=hi){
        var mid = Math.floor((lo+hi)/2)
        if(arr[mid] == mid+1){
            lo =mid+1
        }
        else{
            hi = mid-1
        }
    }
        // console.log(lo,hi)
        if(hi < 0){
            return 1
        }
    return arr[hi]+1
    }
    
} 
