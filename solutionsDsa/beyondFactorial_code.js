function processData(input) {
  var N = Number(input)
  function findLog(n){
      if(n==1){
          return 0
      }
      else{
          return Math.log(n)+findLog(n-1)
      }
  }
    var res = findLog(N)
    console.log(res.toFixed(4))
} 
