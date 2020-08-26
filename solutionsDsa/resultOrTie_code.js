function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var arr = []
    for (var i = 0; i < input.length; i++) {
        arr[i] = input[i].split(' ')
    }
    var res = resultOrTie(arr)
    console.log(res)
    // console.log(arr)
    function resultOrTie(arr) {
        for (var i = 0; i < arr.length; i++) {
            //         horizontal
            if (arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
                return arr[i][0]
            }
            //     vertical
            else if (arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) {
                return arr[i][0]
            }
        }
        //         diagonal left
        if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
            return arr[0][0]
        }
        //         diagonal right
        else if (arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2]) {
            return arr[2][0]
        }
        else {
            return "Tie"
        }

    }

}     