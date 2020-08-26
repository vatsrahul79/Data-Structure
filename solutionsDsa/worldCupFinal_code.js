function processData(input) {
    //Enter your code here
    input = input.split('\n')
    newZealand = input[0].split(' ').map(a=>parseInt(a))
    england = input[1].split(' ').map(a=>parseInt(a))
    // console.log(newZealand,england)
    for(var i = 0;i<england.length;i++){
        if(newZealand[i] > england[i]){
            console.log("New Zealand")
            break
        }
        else if(newZealand[i] < england[i]){
            console.log("England")
            break
        }
        
    }    
} 
