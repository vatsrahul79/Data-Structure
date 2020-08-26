function processData(input) {
    //Enter your code here
    var data = input.trim().split('\n')
    var tcs = Number(data[0])
    var line = 1
    for(var i = 0;i<tcs;i++){
        var [bNum,gNum] = data[line].trim().split(' ').map(a=>parseInt(a))
        line++
        var boyArr = data[line].trim().split(' ').map(a=>parseInt(a))
        boyArr.sort((a,b)=>(a-b))
        line++
        var girlArr = data[line].trim().split(' ').map(a=>parseInt(a))
        girlArr.sort((a,b)=>(a-b))
        line++
        var res = danceNight(boyArr,girlArr,bNum,gNum)
        console.log(res)
    }
    function danceNight(boyArr,girlArr,bNum,gNum){
        // console.log(boyArr,girlArr)
        var flag = true
        var count = 0
        for(var j = 0;j<bNum;j++){
            if(boyArr[j]>girlArr[j]){
                count++
            }            
        }
        if(count==bNum){
        return "YES"
       } 
    else{
        return "NO"
    }
}
}