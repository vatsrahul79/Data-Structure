function processData(input) {
    //Enter your code here
    input = input.trim().split('\n')
    var tcs = Number(input[0])
    input.shift()
    for(var i = 0;i<input.length;i++){
        var str = input[i].trim()
        var res =[]
        for(var j = 0;j<str.length;j++){
            if(str[j] == "1" ){
                res.push(j)
            }
        }
        var ans = find1s(res)
        // console.log(ans)
        console.log("Area"+" "+ (i+1)+":"+" "+ans)
       
    }
    function find1s(res){
        // console.log(res)
        var count = []
        if(res.length == 1){
            return 0            
        }
        for(var k = 0;k<res.length-1;k++){
                if(res[k+1]-res[k] <=5 ){
                    count.push(res[k])
                    count.push(res[k+1])
                }            
        }
        var obj= {}
        for(var i =0;i<count.length;i++){
            obj[count[i]] = count[i]
        }
        var arr = Object.values(obj)
        return arr.length

    }
} 
