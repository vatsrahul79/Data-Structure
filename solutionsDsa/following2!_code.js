function processData(input) {
    //Enter your code here
    var data = input.split('\n')
    var len = Number(data[0])
    var arr = data[1].split(' ').map(a=>parseInt(a))
    var flag = false
    var ans = -1
    for(var i = 0;i<len-1;i++){
        if(arr[i]== 2){
            flag = true
            ans = arr[i+1]
            break            
        }
    }
    if(flag){
        console.log(ans)
    }
    else{
        console.log(ans)
    }
    
} 
