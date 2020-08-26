function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var N = Number(input[0])
    input.shift()
    var mat = input.map(a=>a.split(' ').map(a=>parseInt(a)))
    var temp = []
    for(var i = 0;i<N;i++){
        temp.push([])
    }
    // console.log(temp)
    for(var i = 0;i<N;i++){
        for(var j = 0;j<N;j++){
            temp[N-j-1][i] = mat[i][j]
        }
    }
    // console.log(temp)   
    console.log(temp.map(a=>a.join(' ')).join('\n'))
} 
