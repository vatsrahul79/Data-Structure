function processData(input) {
    //Enter your code here
    input = input.split('')
    var n = input.length
    var res  = isPallindrome(input,0,n-1)
    // console.log(res)
    if(res){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
    
    function isPallindrome(input,left,right){
        if(left == right){
            return true
        }
        if(input[left] != input[right]){
            return false
        }
        if(left < right){
            return isPallindrome(input,left+1,right-1)
        }
        return true
    }    
} 
