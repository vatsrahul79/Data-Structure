function processData(input) {
    //Enter your code here
    var data = input.split('\n')
    var tcs = Number(data[0])
    var line = 1
    for(var i = 0;i<tcs;i++){
            var mat = []
        var size = Number(data[line])
        for(var j = line+1;j<=line+size;j++){
            mat.push(data[j].split(''))

        }
        var hor = checkHorizontal(mat,size)
        var ver = checkVertical(mat,size)
        if(hor &&ver){
            console.log("BOTH")
        }
        else if(ver){
            console.log("VERTICAL")
        }
        else if(hor){
            console.log("HORIZONTAL")
        }
        else{
            console.log("NO")
        }
        // console.log(mat,size)
        line +=size+1
    }    
    function checkHorizontal(mat,size){
        for(var i = 0;i<size;i++){
            for(var j = 0;j<size;j++){
                if(mat[i][j]!=mat[size-1-i][j]){
                    return false
                }
            }
        }
        return true       
        
    }
    function checkVertical(mat,size){
         for(var i = 0;i<size;i++){
            for(var j = 0;j<size;j++){
                if(mat[j][i]!=mat[j][size-1-i]){
                    return false
                }
            }
        }
        return true               
    }
}