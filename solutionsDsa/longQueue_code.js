function processData(input) {
    //Enter your code here
    var [len,arr] = input.split('\n')
    len = Number(len)
    arr = arr.split(' ').map(a=>parseInt(a))
    var i = 0
    var count = 1
    while(i < len){
        if(arr[i+1] < arr[i]){
            count++
        }
        i++
        
    }
    console.log(count)
} 