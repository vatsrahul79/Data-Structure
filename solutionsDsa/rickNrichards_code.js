function processData(input) {
    //Enter your code here
    input = input.trim().split('\n')
    var tcs = Number(input[0])
    var line = 1
    for(var k = 0;k<tcs;k++){
    var n = Number(input[line++])
    var arr = input[line++].trim().split(' ').map(a=>parseInt(a))
    var i = 0
    var j = n-1
    var rick = arr[0]
    var rich = arr[n-1]
    i = 1
        j = n-2
    while(i<=j){
        if(rick <=2*rich){
            rick+=arr[i]
            i++
        }
        else{
            rich+=arr[j]
            j--
        }
        
    }
    console.log(i,n-i)
        
    }
    
} 
