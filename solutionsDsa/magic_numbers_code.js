function processData(input) {
    //Enter your code here
    var res = luckNot(input)
    console.log(res)
    function luckNot(input) {
        if (input == 0) {
            return "NO"
        }
        else if (Number(input) % 4 == 0 || Number(input) % 7 == 0) {

            return "YES"
        }
        else {
            for (var i = 0; i < input.length; i++) {
                if (input[i] != 4 && input[i] != 7) {
                    return "NO"
                }
            }
            return "YES"
        }

    }
} 