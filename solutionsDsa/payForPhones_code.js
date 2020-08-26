function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var price = input[0].split(' ').map(a => parseInt(a))
    var qty = input[1].split(' ').map(a => parseInt(a))
    var sum = 0
    for (var i = 0; i < price.length; i++) {
        sum += price[i] * qty[i]
    }
    if (sum <= 150000) {
        console.log('Possible')
    }
    else {
        console.log("Not Possible")
    }
} 
