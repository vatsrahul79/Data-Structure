function processData(input) {
    input = input.split('\n')
    var n = Number(input[0])
    var arr = []
    for(var i = 1;i<=n;i++){
        
        arr.push(input[i].split(' ').map(a=>{
            if(isNaN(a)){
                return a
            }
            else{
                return parseInt(a)
            }
        }))
    }
   
    // console.log(arr.sort((a,b)))
   for(var i = 0;i<n;i++){
       for(var j = i+1;j<n;j++ ){
           if(arr[i][3] < arr[j][3]){
               swap(arr,i,j)               
           }
           else if (arr[i][3] == arr[j][3]){
               if(arr[i][1] < arr[j][1]){
                   swap(arr,i,j)
               }
               else if(arr[i][1] == arr[j][1]){
                   if(arr[i][2] > arr[j][2]){
                       swap(arr,i,j)
                   }
                   else if(arr[i][2] == arr[j][2]){
                       if(arr[i][0] > arr[j][0]){
                           swap(arr,i,j)
                       }
                   }
               }
           }
       }
   }
    function swap(arr,l,m){
        var temp = arr[l]
        arr[l] =arr[m]
        arr[m] =temp
    }
    // console.log(arr)
    for(var i = 0;i<8;i++){
        console.log(arr[i][0])
    }
   
}  
