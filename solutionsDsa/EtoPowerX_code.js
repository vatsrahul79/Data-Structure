function processData(input) {
    //Enter your code here
    // e^x = (x^0/0!) + (x^1/1!)+(x^2/2!)+...
    var [x,n] = input.split(' ').map(a=>parseInt(a))
    var res = findEtoX(x,n)
    console.log(res.toFixed(4))
      function  findEtoX(x,n){
        if(n == 0){
            return 1
        }
          else{
              return (Math.pow(x,n))/fact(n)+findEtoX(x,n-1)
          }
    }
    function fact(n){
        if(n == 1){
            return 1
        }
        else{
            return n*fact(n-1)
        }
    }
} 
