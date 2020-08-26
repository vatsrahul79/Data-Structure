function gradingStudents(grades) {
    // Write your code here
    var res = []
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            res.push(grades[i])
        }
        else {
            if (grades[i] % 5 >= 3) {
                var ans = Math.ceil(grades[i] / 5) * 5
                res.push(ans)

            }
            else {
                res.push(grades[i])
            }

        }

    }
    return res

}
