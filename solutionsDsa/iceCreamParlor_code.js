function icecreamParlor(m, arr) {
	var res = [];
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] == m) {
				res.push(i + 1);
				res.push(j + 1);
				break;
			}
		}
	}
	return res;
}
