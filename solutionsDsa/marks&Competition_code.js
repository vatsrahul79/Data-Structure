function processData(input) {
    input = input.trim().split('\n')
    var len = Number(input[0])
    input.shift()
    // console.log(input)
    input = input[0].split(' ').map(a => parseInt(a))
    var stack = []
    stack[0] = input[input.length - 1]
    for (var i = len - 2; i >= 0; i--) {
        // console.log(input[i])
        if (input[i] >= stack[stack.length - 1]) {
            // console.log(i)

            stack.push(input[i])
        }
    }
    var res = stack.reverse().join(' ')


    console.log(res)
    //Enter your code here
} 