function processData(input) {
    //Enter your code here
    input = input.split("\n")
    var n = Number(input[0])
    var arr = input[1].trim().split(' ').map(a=>parseInt(a)).sort((a,b)=>(a-b))
    // console.log(a)
    var diff = 0
    for(var i = 0;i<Math.floor(n/2);i++){
        diff+=Math.abs(arr[i]-arr[arr.length-1-i])
    }
    console.log(diff*2)
} 
