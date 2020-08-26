  input = input.trim().split('\n')
    var c = Number(input[0])
    var n = Number(input[1])
    var v = input[2].trim().split(' ').map(a=>parseInt(a))
    var w = input[3].trim().split(" ").map(a=>parseInt(a))
    var pro = []
    for(var i = 0;i<n;i++){
        pro.push([v[i]/w[i],v[i],w[i]])
    }
    pro.sort((a,b)=>(b[0]-a[0]))
    var sum = 0
    var tempC = 0
    var i = 0
    var ans = 0
    while(tempC< c && i<n){
        if(tempC < c){
        tempC += pro[i][2]
        sum +=pro[i][1]
        var diff = c-tempC
        var fraction = Math.round(diff*pro[i][1]/pro[i][2])
            ans = sum+fraction
        }
        // console.log(ans)
       
        i++
    }
//             
    console.log(ans)
