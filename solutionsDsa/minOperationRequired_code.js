function processData(input) {
    //Enter your code here
    var data  = input.split('\n')
    var n = Number(data[0])
    var arr = data[1].split(' ').map(a=>parseInt(a))
    arr.sort((a,b)=>(a-b))
    var min =arr[0]
    var req = 0
    for(var i = 0;i<n;i++){
        req += arr[i]-min
    }
    
    console.log(req)
} 