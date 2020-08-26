function processData(input) {
    //Enter your code here
    var num = Number(input)
    var sum = 0
    for(var i = 1;i<=num;i++){
        if( i% 2==1){
            sum += i
        }
    }
    console.log(sum)
    // another approach
//   var sum = Math.floor((num+1)/2) ** 2
//     console.log(sum)
}