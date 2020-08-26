function processData(input) {
	var data = input.split("\n");
	var [n, m] = data[0].split(" ").map(a => parseInt(a));
	var mat = [];
	for (var i = 1; i < data.length; i++) {
		mat.push(data[i].split(" "));
	}
	// console.log(mat)
	var res = "";
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			res += mat[j][i] + " ";
		}
		res += "\n";
	}

	console.log(res);
}
