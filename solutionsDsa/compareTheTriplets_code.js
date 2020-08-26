function compareTriplets(a, b) {
    var count1 = 0
    var count2 = 0
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            count1++
        }
        else if (a[i] < b[i]) {
            count2++
        }

    }
    var res = []
    res.push(count1, count2)
    return res


}
