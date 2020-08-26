// Time Complexity O(n)
function processData(input) {
    //Enter your code here
    var data = input.split('\n')
    var arr = data[1].split(' ').map(a=>parseInt(a))
    // console.log(arr)
    arr.sort((a,b)=>(b-a))
    var maxDiff=0
    var diff = 0
    for(var i = 0;i<arr.length-2;i++){
        diff  = arr[i]-arr[i+2]
        if(diff>maxDiff){
            maxDiff=diff
        }         
    }
    console.log(maxDiff)

} 