function processData(input) {
    //Enter your code here
    var str = input.trim().split("");
    var stack = []
   for(var i = 0;i<str.length;i++){
       if(str[i] == stack[stack.length-1]){
           stack.pop()
       }
       else{
           stack.push(str[i])
       }
   }
    if(stack.length == 0){
        console.log("Empty String")
    }
    else{
        console.log(stack.join(''))
    }
} 
