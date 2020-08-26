function processData(input) {
    input = input.split("\n")
    var len = Number(input[0])
    var arr = input[1].split(" ").map(a=>parseInt(a))
    var stack = []
    var count = 0
    for(var i = 0 ;i<len;i++){
        if(arr[i]>0){
            stack.push(arr[i])
        }
        else{
            if(arr[i] +stack[stack.length-1]==0){
                stack.pop()
                count += 2
            }
            
        }
    }
    console.log(count)
    
} 
