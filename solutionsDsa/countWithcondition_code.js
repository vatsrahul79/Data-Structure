function processData(input) {
    //Enter your code here
  input = input.split('\n')
    const [n,x] = input[0].split(' ').map(a=>parseInt(a))
    var arr = input[1].split(' ').map(a=>parseInt(a))
    var count = 0
    var res = findSum(0,x,0)
    console.log(res)
    function findSum(i,sum,count){
        if(i == n){
            if(sum == 0){
                count++
            }
            return count
        }
        count = findSum(i+1,sum-arr[i],count)
        count = findSum(i+1,sum,count)
        return count
    }
}
