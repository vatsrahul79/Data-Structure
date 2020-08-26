function main(input) {
    var N = Number(input)
    var c = {}
    var d = {}
    var ad = {}
    var res =[]
    var ans = nQueens(0,[])
    // console.log(ans.length)
    if(ans.length == 0){
        console.log("Not possible")
    }
    else{
        var s = ans[0]
        // console.log(N)
        for(var k = 0;k<N;k++){
            var r = []
            let i = 0
            while(i<N){
                // console.log(s)
                if(i == s[k]){
                    r[i] = 1
                }
                else{
                    r[i] = 0
                }
                i++
            }
            console.log(r.join(' '))            
        }

    }
    function nQueens(i,pos){
        if(i == N){
            res.push(pos)
        }
        else{
            for(var j = 0;j<N;j++){
                if(check (i,j)){
                    c[j] = true
                    d[i-j]=true
                    ad[i+j] = true
                    nQueens(i+1,pos+[j])
                    delete c[j]
                    delete d[i-j]
                    delete ad[i+j]
                }
            }
        }
        return res
        function check(i,j){
            if(!c[j] && !d[i-j]&& !ad[i+j]){
                return true
            }
            return false
        }

    }
}
