function processData(input) {
    //Enter your code here
    var num = Number(input)
    var sum = 0
    for(var i = 1;i<=num;i++){
       if(isPrime(i)){
            sum += i
        }
    }
    console.log(sum)
    function isPrime(n){
        if(n == 1){
            return false
        }
        else{
            for(var i = 2;i<n;i++){
                if(n % i ==0){
                    return false
                }
            }
        }
        return true
    }
}