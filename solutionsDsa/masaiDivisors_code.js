function processData(input) {
    //Enter your code here
    var [left,right,k] = input.split(' ').map(a=>parseInt(a))
    var count = 0
    for(var i = left ;i<=right ;i++){
        if ( i% k == 0){
            count++
        }
    }
    console.log(count)
} 