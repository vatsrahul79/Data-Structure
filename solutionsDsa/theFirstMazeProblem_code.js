function processData(input) {
    //Enter your code here
    var data = input.split('')
    // console.log(data)
    var x = 0
    var y = 0
    for(var i=0;i<data.length;i++){
        if(data[i] == "L"){
            x -= 1
        }
        else if(data[i]=="R"){
            x += 1
        }
        else if(data[i] == "U"){
            y += 1
        }
        else if(data[i] == "D"){
            y -= 1
        }
    }
    console.log(x,y)
} 