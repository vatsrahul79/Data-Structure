function solve(arr) {
    var n = arr.length
    var leftStack = []
    var left = []
    for(var i = 0;i<n;i++){
        while(leftStack.length!=0 && arr[leftStack[leftStack.length-1]] <= arr[i]){
            leftStack.pop()
        }
        if(leftStack.length==0){
            left.push(0)
        }
        else{
            left.push(leftStack[leftStack.length-1]+1)
        }
        leftStack.push(i)
    }
// console.log(left)
var rightStack = []
    var right = []
    for(var i = n-1;i>=0;i--){
        while(rightStack.length!=0 && arr[rightStack[rightStack.length-1]] <= arr[i]){
            rightStack.pop()
        }
        if(rightStack.length==0){
            right.push(0)
        }
        else{
            right.push(rightStack[rightStack.length-1]+1)
        }
        rightStack.push(i)
    }
// console.log(right.reverse())
    right.reverse()
    var maxEle = Number.MIN_SAFE_INTEGER
    for(var i = 0;i<n;i++){
        var res = left[i]*right[i]
        if(res >maxEle){
            maxEle = res
        }
        
    }
    console.log(maxEle)
    return maxEle

}
