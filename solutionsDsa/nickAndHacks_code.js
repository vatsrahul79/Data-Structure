function processData(input) {
    //Enter your code here
    var data = input.split('\n')
    var tcs = Number(data[0])
    var balance = 1
    for(var i = 1;i<=tcs;i++){
        var N = Number(data[i])
        var res = findN(balance,N)
    // console.log(res)
        if(res){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
    }
    function findN(balance,N){
        if(balance==N){
            return true
        }
        if(balance >N){
            return false
        }
        else{
            return findN(balance*10,N) || findN(balance*20,N)
        }   
    }
} 
