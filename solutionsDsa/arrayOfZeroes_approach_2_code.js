function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var len = Number(input[0])
    var arr = input[1].split(' ').map(a=>parseInt(a))
    var evenSum = 0
    var oddSum = 0
    for(var i=0; i<len; i++){
        if(i%2==0){
            evenSum+= arr[i]
        }
        else{
            oddSum+= arr[i]
        }
    }
    if(oddSum == evenSum){
        console.log('YES')
    }
    else{
        console.log('NO')
    }
    
} 