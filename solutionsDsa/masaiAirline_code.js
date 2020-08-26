function processData(input) {
    //Enter your code here
    var data = input.split('\n')
    var len = Number(data[0])
    var checkinBag = data[1].split(' ').map(a=>parseInt(a))
    var handBag = data[2].split(' ').map(a=>parseInt(a))
    for(var i = 0;i<len;i++){
        if(checkinBag[i]>15 || handBag[i]>7){
            console.log("Stop")
        }
        else{
            console.log("Boarding")
        }
    }
} 
