function processData(input) {
    //Enter your code here
   input= input.split('\n')
  for(var i = 0;i<input.length;i++){
    var res = findMny(Number(input[i]))
      console.log(res)

  }
   function findMny(n){
     if(n <=2){
       return n
     }
     var direct = n
     var breakDown = findMny(Math.floor(n/2))+findMny(Math.floor(n/3))+findMny(Math.floor(n/4))
     return Math.max(direct,breakDown)
   }
} 
