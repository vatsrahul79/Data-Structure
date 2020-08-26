function processData(input) {
    //Enter your code here
    var num = input.split('')
    var flag = true
    for(var i = 0;i<Math.floor(num.length/2);i++){
        if(num[i] != num[num.length-i-1]){
            flag = false
            break
            
        }
    }
    if(flag){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
} 