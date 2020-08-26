function processData(input) {
    input = input.trim().split('\n')
    var t = Number(input[0])
    // console.log(t)
    var line = 1
    for(var j = 0;j<t;j++){
       var n = Number(input[line++])*2
        var a = input[line++].trim().split(' ').map(a=>parseInt(a)).sort((a,b)=>(a-b))
        // console.log(n,a)
        var res = findSum(n,a)
        console.log(res)
 
    }
    function findSum(n,a){
      var res = Math.abs(a[n/2]-a[n/2-1])
      return res
    }
} 
