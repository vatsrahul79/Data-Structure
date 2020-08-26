function processData(input) {
    //Enter your code here
    var data = input.split('\n')
    var [n,m] = data[0].split(' ').map(a=>parseInt(a))
    var k = "saba".length
    // console.log(k)
    var mat = []
    for(var i = 1;i<=n;i++){
        mat.push(data[i].split(''))        
    }
    var count =0
    // console.log(mat)
    for(var i = 0;i<n;i++){
        for(var j = 0;j<m;j++){
//             horizontal
            if(m-j>=k){
                if(mat[i][j] == "s" &&mat[i][j+1] == "a" && mat[i][j+2] == "b" && mat[i][j+3]== "a"){
                    count++
                }
            }
//             Vertical
            if(n-i>=k){
                if(mat[i][j] == "s" &&mat[i+1][j] == "a" && mat[i+2][j] == "b" && mat[i+3][j]== "a"){
                    count++
                }
                
            }
//             diagonal down
            if(m-j >= k && n-i >= k){
                if(mat[i][j] == "s" &&mat[i+1][j+1] == "a" && mat[i+2][j+2] == "b" && mat[i+3][j+3]== "a"){
                    count++
                }
            }
//             diagonal up
            if(m-j >= k && i >= k-1){
                if(mat[i][j]=="s" && mat[i-1][j+1]=="a" && mat[i-2][j+2]=="b" && mat[i-3][j+3]=="a")
                           {
                               count++
                           }            }
        }
    }
    console.log(count)
} 
