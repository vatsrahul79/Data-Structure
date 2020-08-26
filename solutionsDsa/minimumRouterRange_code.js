function processData(input) {
    //Enter your code here
    input = input.trim().split('\n')
    var [n,k] = input[0].trim().split(' ').map(a=>parseInt(a))
    var arr = input[1].trim().split(' ').map(a=>parseInt(a)).sort((a,b)=>(a-b))
    var lo = 1
    var hi = arr[n-1]-arr[0]
    var ans = hi
    while(lo<=hi){
        var mid = Math.floor(lo+(hi-lo)/2)
        if(check(arr,mid,k)){
            ans =mid
            hi =mid-1
        }
        else{
            lo =mid+1
        }
    }
    console.log(ans)
    function check(arr,mid,k){
        // console.log(mid)
        var span =arr[0]+2*mid
        for(var i = 1;i<n;i++){
            if(span < arr[i]){
                k--
                span = arr[i]+2*mid
            }
            if(k<=0){
                return false
            }
        }
        return true
    }
      
    
} 
