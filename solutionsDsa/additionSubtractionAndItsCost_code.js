function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var t = Number(input[0])
    var line = 1
    var inc = 3
    var dec = 5
    for(var i = 0;i<t;i++){
        var [n,k] = input[line++].split(' ').map(a=>parseInt(a))
        var arr = input[line++].split(' ').map(a=>parseInt(a))
        var res = findCost(arr,n,k)
        console.log(res)
        
    }
    function findCost(arr,n,k){
        var minSum = []
        var tempSum = 0
        for(var j = 0;j<n;j++){
        var costArr = []
        for(var i = 0;i<n;i++){
            if(arr[j] <=arr[i]){
                costArr.push((arr[i]-arr[j])* dec)
            }
            else{
                costArr.push((arr[j]-arr[i])* inc)
            }
            
        }
        costArr.sort((a,b)=>(a-b))
            // console.log(costArr)
            var sum = 0
            for(var i = 0;i<k;i++){
                sum+=costArr[i]
            }
           minSum.push(sum)          
                
        }
        return Math.min(...minSum)
        }   
} 
