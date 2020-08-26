function processData(input) {
    //Enter your code here
//     - Replace N with N/2 if n is divisible by 2

// - Replace N with 2N/3 if n is divisible by 3

// - Replace N with 4N/5 if n is divisible by 5
   input = input.split("\n")
    var t = Number(input[0])
    for(var i = 1;i<=t;i++){
        var N = Number(input[i])
        // console.log(N)
            var count = 0

        var res = canBeOne(N,count)
        console.log(res)
    }
    function canBeOne(N,count){
        if(N == 1){
            return count
        }
        else{
            if(N%2 == 0){
                return canBeOne(N/2,count+1)
            }
            else if(N%3 == 0){
                return canBeOne(2*N/3,count+1)
            }
            else if(N%5 == 0){
                return canBeOne(4*N/5,count+1)
            }
        }
        return -1
    }
} 
