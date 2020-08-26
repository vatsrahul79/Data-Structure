function processData(input) {
    //Enter your code here
   var str = input
   var n = str.length
   var maxStr = 1
   function findSorted(s){
    var string =   s.split('').sort().join('')
    // console.log(string,s)
       if(string == s){
           return true
       }
       return false
   }
   for(var i = 0;i<n;i++){
       for(var j = i+1;j<n+1;j++){
           var subString = str.substring(i,j)
            // console.log(subString)    
          if (findSorted(subString)){
              console.log(subString,"substring",subString.length)
              maxStr = Math.max(maxStr,subString.length)
              }
       }
   }
    console.log(maxStr)
} 
