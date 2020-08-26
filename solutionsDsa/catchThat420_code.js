function processData(input) {
    //Enter your code here
    var num = input.split('')
    // console.log(num.length)
    var flag = false
    for(var i = 0;i<num.length;i++){
        if(num[i] == 4 && num[i+1] == 2 && num[i+2] == 0){
            flag = true
            break
        }
    }
    if(flag){
        console.log("Caught")
    }
    else{
        console.log("Escaped")
    }
} 