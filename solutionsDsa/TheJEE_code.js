function processData(input) {
    //Enter your code here
    var [s1,s2] = input.split('\n')
    var s1 = s1.split(' ').map(a=>parseInt(a))
    var s2 = s2.split(' ').map(a=>parseInt(a))
    var sum1 = 0
    var sum2 = 0
    for(var i = 0;i<s1.length;i++){
        sum1 += s1[i]
        sum2 += s2[i]        
    }
    if(sum1>sum2){
        console.log("First")
    }
    else if(sum1<sum2){
        console.log("Second")
    }
    else{
        if(s1[2]>s2[2]){
            console.log("First")
        }
        else if(s1[2]<s2[2]){
            console.log("Second")
        }
        else{
            if(s1[0]>s2[0]){
            console.log("First")
            }
            else if(s1[0]<s2[0]){
            console.log("Second")
            }   
        }
    }
                              
} 