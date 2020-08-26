function processData(input) {
    //Enter your code here
    var name = "masaischool"
    input = input.split('\n')   
    var [n,m] = input[0].split(' ').map(a=>parseInt(a))
    var arr = []
    for(var i = 1;i<=n;i++){
        arr.push(input[i].split(' '))
    }
    var res = search(arr)
    if(res){
        console.log("YES")
    }
    else{
        console.log("NO")
    }
    // console.log(res)
    function search(arr){
        for(var i = 0;i<n;i++){
            for(var j = 0;j<m;j++){
                if(checkName(arr,i,j,0)){
                    return true
                }
            }
        }
        return false
    }
    function checkName(arr,i,j,k){
       if(i <0 || i>=n || j <0|| j >=m){
           return false
       }
        if(arr[i][j] == name[k]){
            var temp = arr[i][j]
            arr[i][j] = 0
            if(k == name.length-1){
                return true
            }
            else if(checkName(arr,i-1,j-1,k+1) ||checkName(arr,i-1,j,k+1) ||checkName(arr,i-1,j+1,k+1) ||checkName(arr,i,j-1,k+1) ||checkName(arr,i,j+1,k+1) ||checkName(arr,i+1,j-1,k+1) ||checkName(arr,i+1,j,k+1) ||checkName(arr,i+1,j+1,k+1)){
                return true
            }
            arr[i][j] = temp
        }
        return false
}

}
