function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var [N, M, K] = data[0].split(" ").map(a => parseInt(a));
	var mat = [];
	for (var i = 1; i <= N; i++) {
		mat.push(data[i].split(" ").map(a => parseInt(a)));
	}
	for (var j = N + 1; j < data.length; j++) {
		var [R, C, S, D] = data[j].split(" ").map(a => parseInt(a));
		var res = findSubArray(R - 1, C - 1, S, D);
	}
	for (var i = 0; i < res.length; i++) {
		console.log(res[i].join(" "));
	}
	// console.log(mat)
	function findSubArray(R, C, S, D) {
		for (var i = R; i < R + S; i++) {
			for (var j = C; j < C + S; j++) {
				mat[i][j] = mat[i][j] + D;
			}
		}
		return mat;
	}
}
