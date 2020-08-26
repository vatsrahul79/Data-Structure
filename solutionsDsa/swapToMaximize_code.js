function processData(input) {
    input = input.trim().split('\n')
    var t = Number(input[0])
    // console.log(t)
    var line = 1
    for(var j = 0;j<t;j++){
        var [n,k] = input[line++].split(' ').map(a=>parseInt(a))
        var a = input[line++].split(' ').map(a=>parseInt(a)).sort((a,b)=>(a-b))
        var b = input[line++].split(' ').map(a=>parseInt(a)).sort((a,b)=>(b-a))
        // console.log(n,k,a,b)
        var res = findSum(n,k,a,b)
        console.log(res)
 
    }
    function findSum(n,k,a,b){
        var i = 0
        var sum = 0
        while(i <n && k>0){
            if(a[i] < b[i]){
                swap(a,b,i)
                k--
            }
            i++
        }
        // console.log(k)
        for(var l = 0;l<n;l++){
            sum+=a[l]
        }
        return sum
    }
    function swap(a,b,i){
        var temp =a[i]
        a[i] =b[i]
        b[i] = temp
    }
} 
 
