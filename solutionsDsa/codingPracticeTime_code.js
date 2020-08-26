function processData(input) {
    //Enter your code here
    
     input = input.split('\n')
    let n = parseInt(input[0].split(' ')[0])
    let days = parseInt(input[0].split(' ')[1])
    let q = input[1].split(' ').map(el=>parseInt(el))
    let lo = Math.max(...q)
    // let lo = 0
    // console.log(lo)
    var hi = 0
    for(var i = 0;i<q.length;i++){
        hi +=q[i]
    }
    let ans = hi
    while(lo<=hi){
        let mid = Math.floor((lo+hi)/2)
        console.log(lo,hi,mid)
        if(check(q,mid,days)){
            ans = mid
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }    
    console.log(ans)
} 

function check(arr,hrsPerDay,days){
    
    let sum = 0
    let spent_days = 0
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
        if(sum>hrsPerDay){
            sum = arr[i]
            spent_days++
        } else if(sum  == hrsPerDay){
            sum = 0
            spent_days++
        } 
    }
    if(sum>0){
        spent_days++
    }
    if(spent_days<=days){
        return true
    } else {
        return false
    }
    
}
