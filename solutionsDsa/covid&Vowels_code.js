function processData(input) {
    //Enter your code here
    //coronvirus = 
    var vowels = ['a','i','o','u']
   var count = 0
    function removeDuplicates(str){
      var obj = {}

     for(var i = 0;i<str.length;i++){
    obj[str[i]] = str[i]
  }
  var arr = Object.values(obj)

  return arr
}
for(var i = 0;i<input.length;i++){
  for(var j = i+1;j<input.length+1;j++){
    var substring = input.substring(i,j)
    // console.log(substring)
    var res =[]
        for(var k = 0;k<substring.length && substring.length>4;k++){
            if(vowels.indexOf(substring[k]) != -1){
                res.push(substring[k])
                // console.log(res)
            }
        }
      var ans = removeDuplicates(res)
      if(ans.length == vowels.length){
                console.log(ans,substring)

          count++
      }
    // if(substring.length>=len){
      
  }
}
    console.log(count)
  
} 
