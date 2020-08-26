function processData(input) {
    //Enter your code here.
    var input = input.trim().split('\n')
    var tcs = Number(input[0])
    var line =1
    for(var j = 0;j<tcs;j++){
   var[N,X,Y]= input.slice(line,line+3).map(a=>parseInt(a))
   // console.log(N,X,Y)
   var stack =[]
   var req = []
   for(var i = line+3;i<line+3+N;i++){
       var [s,r] = input[i].split(' ').map(a=>parseInt(a))
       stack.push(s)
       req.push(r)
   }
    stack.sort((a,b)=>(b-a))
    req.sort((a,b)=>(b-a))
        var diff = 0
        var sum = 0
        for(var k = 0;k<N;k++){
            diff = stack[k]-req[k]
            if(diff < 0){
                sum+=Math.abs(diff)*X
            }
            else{
                sum+=diff*Y
            }
            
        }
        console.log(sum)
line +=N+3
}
}
