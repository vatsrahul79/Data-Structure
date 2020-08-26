function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var [n,m] = input[0].split(' ').map(a=>parseInt(a))
    input.shift()
    var arr = input.map(a=>(a.split(' ')).map(e=>parseInt(e)))
    // console.log(arr)
    //row wise
    var midH = Math.floor(n/2)
    var sum1 = 0
    for(var j = 0;j<m;j++){
        sum1+=arr[midH][j]
    }
    for(var i = 0;i<midH;i++){
        sum1+=arr[i][0]
    }
    for(var i = midH+1;i<n;i++){
        sum1+=arr[i][m-1]
    }
    //Column Wise
    var midC = Math.floor(m/2)
    var sum2 = 0
    for(var j = 0;j<n;j++){
        sum2+=arr[j][midC]
    }
    for(var i = 0;i<midC;i++){
        sum2+=arr[n-1][i]
    }
    for(var i = midC+1;i<m;i++){
        sum2+=arr[0][i]
    }
    // console.log(sum1,sum2)
    var res = Math.abs(sum1-sum2)
    console.log(res)
    

} 
