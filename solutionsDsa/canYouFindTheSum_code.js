function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var n = Number(input[0])
    var arr = input[1].split(' ').map(a=>parseInt(a))
    var x = findX(arr)
    var y = findY(arr)
    var res = []
    for(var k = 0;k<n;k++){
        res[k] = x[k]+y[k]
    }
    console.log(res.join(' '))
//     finding nearest gretest element on left side
    function findX(arr){
        var back = []
        back[0]= 0
        var x = []
        x[0]=-1
        for(var i = 1;i<n;i++){
            while(back.length != 0 && arr[back[back.length-1]]<=arr[i]){
                back.pop()
            }
            if(back.length !=0){
                x[i] = back[back.length-1]+1
            }
            else{
                x[i] = -1
            }
            back.push(i)
        }
    return x
    }
//     finding nearest greatest element on right side
    function findY(arr){
        var front = []
        front.push(n-1)    
        var y = []
        y[n-1] = -1
        for(var j = n-2;j>=0;j--){
            while(front.length != 0 && arr[front[front.length-1]] <=arr[j]){
                front.pop()
            }
            if(front.length != 0){
                y[j] = front[front.length-1] +1
            }
            else{
                y[j] =-1
            }
            front.push(j)
            }
        return y
    } 
} 
