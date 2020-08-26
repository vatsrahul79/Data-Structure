function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	var str = input[1];
	var j = 0;
	var res = [];
	for (var i = 0; i < n; i++) {
		if (i != n - 1 && j % 2 == 0) {
			if (str[i] != str[i + 1]) {
				res.push(str[i]);
				j++;
			}
		} else {
			res.push(str[i]);
			j++;
		}
	}
	if (res.length % 2 == 1) {
		res.pop();
	}
	console.log(n - res.length);
	console.log(res.join(""));
}
