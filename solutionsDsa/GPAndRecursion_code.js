function processData(input) {
    //Enter your code here
    //1+(1/r)+(1/r^2)+....+(1(/r^n))
    var [n,r] = input.split(' ').map(a=>parseInt(a))
    var res = findGP(r,n)
    function findGP(r,n){
        if (n == 0){
            return 1
        }
        else{
            return (1/(Math.pow(r,n))) + findGP(r,n-1)
        }
    }
    console.log(res.toFixed(4))
} 
