function processData(input) {
    //Enter your code here
    var data = input.split('\n')
    // console.log(data)
    var [rows,cols] = data[0].split(' ').map(a=>parseInt(a))
    // var rows = fline[0]
    var line = 1
    var arr =[]
    for(var i = 0;i<rows;i++){
        arr.push(data[line].split(' ').map(a=>parseInt(a)))
        line++
        
    }
    let sum = 0
    for(var i = 0;i<rows;i++){
        for(var j = 0;j<cols;j++){
            if(arr[i][j] % 3==0){
                sum += arr[i][j]
            }
        }
    }
    console.log(sum)
    
} 