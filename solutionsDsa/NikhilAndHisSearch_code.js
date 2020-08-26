function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var n = Number(input[0])
    var arr = input[1].split(' ').map(a=>parseInt(a))
    arr.sort((a,b)=>(a-b))
    var q = Number(input[2])
    for(var i = 3;i<3+q;i++){
        var [type,target] = input[i].split(' ').map(a=>parseInt(a))
        if(type == 0){
            var res = queryZero(target)
            console.log(n-res)
        }
        else{
             res = queryOne(target)
        console.log(n-res)
            
        }
        
    }
    function queryZero(target){
        var low = 0
        var hi = n-1
        while(low<=hi){
            var mid = low+Math.floor((hi-low)/2)
            if(arr[mid]<target){
                low = mid+1
            }
            else{
                hi = mid-1
            }
        }
        return low
    }
        function queryOne(target){
        var low = 0
        var hi = n-1
        while(low<=hi){
            var mid = low+Math.floor((hi-low)/2)
            if(arr[mid]<=target){
                low = mid+1
            }
            else{
                hi = mid-1
            }
        }
        return low
    }
} 
