function processData(input) {
    //Enter your code here
     input = input.trim().split('\n')
    var tcs = Number(input[0])
    var line = 1
    for(var i = 0;i<tcs;i++){
        var n = Number(input[line++])
        var str = input[line++]
        // console.log(n,str)
        console.log(encryptIt(0,n-1,str))
    }
    function encryptIt(left,right,str){
        if(left == right){
            // console.log(str[left])
            return str[left]
        }
        else{
            if(left<=right){
                var mid = Math.floor((left+right)/2)
                return str[mid]+encryptIt(left,mid-1,str)+encryptIt(mid+1,right,str)
            }
           return ""
        }
    }
} 
