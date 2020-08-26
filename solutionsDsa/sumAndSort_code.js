function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var n = Number(input[0])
    var arr = input[1].split(' ')
    var num = input[1].split(' ').map(a=>a.split('').map(e=>parseInt(e)))
    // console.log(num)
    var index = []
    for(var i = 0;i<num.length;i++){
       num[i]= num[i].reduce((a,c)=>a+c)
        index[i] = i
    }
     function bubbleSort(num,n){
        if(n == 1){
            return index
        }
        else{
            for(var i = 0;i<n-1;i++){
                if(num[i] > num[i+1]){
                    swap(num,i,i+1)
                    swap(index,i,i+1)
                }
            }
            return bubbleSort(num,n-1)
        }
    }
    function swap(arr,i,j){
        var temp =arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    var res= bubbleSort(num,n)
    var ans =""
    for(var i = 0;i<res.length;i++){
        ans +=arr[res[i]]+" "
    }
    console.log(ans)
} 
