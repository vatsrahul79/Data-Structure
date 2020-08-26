function processData(input) {
    //Enter your code here
 var num = Number(input)
 var diff = 1
 var i = 1
 while(num>=0){
    num = num-i
     if(num <= 0){
         console.log("Patlu")
         break
     }
     num = num-2*i
     if(num<0){
         console.log("Motu")
         break
     }
     i++
     }
  } 
