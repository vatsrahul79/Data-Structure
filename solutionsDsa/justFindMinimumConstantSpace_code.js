function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var n = Number(input[0])
    var stack =[]
    var min_so_far =0
    for(var i = 1;i<=n;i++){
        var arr = input[i].split(' ')
        // console.log(arr)
        if(arr[0] == "PUSH"){
            var value = Number(arr[1])
            if(stack.length==0){
                stack.push([value,value])
            }
            else{
                min_so_far = Math.min(stack[stack.length-1][1],value)
                stack.push([value,min_so_far])
                
            }
        }
        else if (arr[0] == "POP"){
            if(stack.length == 0){
                console.log("EMPTY")
            }
            else{
                stack.pop()
            }
        }
        else{
            // console.log(stack)
            if(stack.length == 0){
                console.log("EMPTY")                
            }
            else{
               var ans = stack[stack.length-1][1]
               console.log(ans)
            }
        }
        // console.log(stack)
    }
   
    
} 
