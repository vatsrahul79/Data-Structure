// Time complexity O(n)
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let len = Number(input[0])
    let arr = input[1].split(' ').map(a=>(parseInt(a)))    
    let max = 0
    let count = {}    
    for(let i in arr) {
        if(count[arr[i]]>0) {
            count[arr[i]]++
        }
        else {
            count[arr[i]] = 1
        }
    }
    let res = 0
    for(let key in count) {        
        if(count[key] > max) {
            max = count[key]
            res = key            
        }
    }
    console.log(res)

    
} 

