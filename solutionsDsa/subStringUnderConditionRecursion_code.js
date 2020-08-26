function processData(input) {
    //Enter your code here
    var str = input;
    var count = 1;
    function isSubstring(n) {
        if(n<0){
            return 0
        }
        else{
            var firstHalf = isSubstring(n-1)
            var secHalf = 0
            for(var j = 0;j<n+1;j++){
                if(str[n]==str[j]){
                    secHalf++
                }
            }
            return firstHalf+secHalf
            
        }
       
    }
    console.log(isSubstring(str.length-1))
}
