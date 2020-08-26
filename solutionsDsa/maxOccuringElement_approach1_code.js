// Time complexity O(n^2)
function processData(input) {
    //Enter your code here
    var data = input.split('\n')
    var len = Number(data[0])
    var arr = data[1].split(' ')
    var count = 0
    var maxcount = 0
    var res = false
    for(var i = 0;i<len;i++){
        for(var j = 0;j<len;j++){
            if(arr[i]==arr[j]){
                count++
        }
    }
        if(maxcount<count){
            maxcount= count
            res = arr[i]
        }
        count = 0
    }
    console.log(res)
    
} 
