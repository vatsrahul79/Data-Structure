function processData(input) {
    //Enter your code here
    var [wrd1,wrd2] = input.split('\n')
    wrd1 = wrd1.split(' ').join('').split('').sort()
    wrd2 = wrd2.split(' ').join('').split('').sort()
    // console.log(wrd1,wrd2)
    var flag =true
    if(wrd1.length == wrd2.length){
        for(var i = 0;i<wrd1.length;i++){
            if(wrd1[i] != wrd2[i]){
                flag = false
                break
            }
        }
    }
    else{
        flag =false
        }
    if(flag){
        console.log("True")
    }
    else{
        console.log("False")
    }
} 