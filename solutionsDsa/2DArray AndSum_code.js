function runProgram(input) {
    // Write code here
    input = input.toString().split('\n')
    var [n, m, s] = input[0].split(' ').map(a => parseInt(a))
    var k = 3
    // console.log(k)
    var mat = []
    for (var i = 1; i <= n; i++) {
        mat.push(input[i].split(' ').map(a => parseInt(a)))
    }
    var count = 0
    // console.log(mat)
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            //             horizontal
            if (m - j >= k) {
                if (mat[i][j] + mat[i][j + 1] + mat[i][j + 2] == s) {
                    count++
                }
            }
            //             Vertical
            if (n - i >= k) {
                if (mat[i][j] + mat[i + 1][j] + mat[i + 2][j] == s) {
                    count++
                }

            }
            //             diagonal down
            if (m - j >= k && n - i >= k) {
                if (mat[i][j] + mat[i + 1][j + 1] + mat[i + 2][j + 2] == s) {
                    count++
                }
            }
            //             diagonal up
            if (m - j >= k && i >= k - 1) {
                if (mat[i][j] + mat[i - 1][j + 1] + mat[i - 2][j + 2] == s) {
                    count++
                }
            }
        }
    }
    console.log(count)
}


