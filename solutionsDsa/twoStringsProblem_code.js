function processData(input) {
    //Enter your code here
    var [s1,s2] = input.split('\n')
    s1 = s1.split(' ').join('').split('')
    s2 = s2.split(' ').join('').split('')
    // console.log(s1,s2)
    var count = 0
    var i = 0
    var j = 0    
    while (i<s1.length && j < s2.length){
        if(s2[j] == s1[i]){
            count++
            i++
            j++
            
        }
        else{
            i++
        }    
    }
            // console.log(count)
    if(count == s2.length){
        console.log("Yes")
    }
    else{
        console.log("No")
    }

}