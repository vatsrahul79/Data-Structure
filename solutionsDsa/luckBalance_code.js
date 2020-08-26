function luckBalance(k, contests) {
	contests.sort((a, b) => Number(b[0]) - Number(a[0]));
	console.log(contests);
	var sum = 0;
	var count = 0;
	for (var i = 0; i < contests.length; i++) {
		if (contests[i][1] == "1") {
			count++;
			if (count <= k) {
				sum += contests[i][0];
			} else {
				sum -= contests[i][0];
			}
		} else {
			sum += contests[i][0];
		}
	}
	return sum;
	// console.log(sum)
}
