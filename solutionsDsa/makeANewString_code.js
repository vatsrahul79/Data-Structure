function processData(input) {
    //Enter your code here
    var str = input
    var n = str.length
   var alpha = "abcdefghijklmnopqrstuvwxyz"
   var obj = {}
   for(var i = 0;i<26;i++){
       var index = (i ** 2)%26
       obj[alpha[i]] = alpha[index]
   }
    // console.log(obj)
    var res = []
    for(var i = 0;i<str.length;i++){
        res.push(obj[str[i]])
    }
    console.log(res.join(''))
} 
