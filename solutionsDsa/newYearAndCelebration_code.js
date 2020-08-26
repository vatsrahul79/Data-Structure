function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var q = Number(input[0])
    var stack = []
    var queue = []
    for (var i = 1; i <= q; i++) {
        var [type, x] = input[i].split(' ').map(a => parseInt(a))

        if (type == 1) {
            queue.push(x)
        }
        else if (type == 2) {
            stack.push(x)
        }
        else if (type == 3) {
            if (queue.length == 0) {
                console.log(-1)
            }
            else {
                console.log(queue[0])
            }
        }
        else if (type == 4) {
            if (stack.length == 0) {
                console.log(-1)
            }
            else {
                console.log(stack[stack.length - 1])
            }
        }
        else {
            stack.push(queue.shift())
        }

    }
} 