function processData(input) {
    //Enter your code here
    function removeDuplicates(input){
      var obj = {}
     for(var i = 0;i<input.length;i++){
    obj[input[i]] = input[i]
  }
  var arr = Object.values(obj)

  return arr
}
var uniiqArr = removeDuplicates(input)
var len = uniiqArr.length 
// console.log(inputArr)
var min = Number.MAX_SAFE_INTEGER
for(var i = 0;i<input.length;i++){
  for(var j = i+1;j<input.length+1;j++){
    var substring = input.substring(i,j)
    if(substring.length>=len){
      var res = removeDuplicates(substring)
      if(res.length == len){
        if(substring.length<min){
          min = substring.length
        }

      }
    }
  }
}
    console.log(min)
  
} 