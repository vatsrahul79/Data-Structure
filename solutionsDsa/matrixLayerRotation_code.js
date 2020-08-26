function matrixRotation(matrix, r, m, n) {
	// console.log(matrix,r,m,n)
	var layers = Math.min(m, n) / 2;
	// console.log(layers)
	for (var i = 0; i < layers; i++) {
		var res = "";
		var numRotations = r % (2 * (m + n - 4 * i) - 4);
		for (var rotation = 0; rotation < numRotations; rotation++) {
			// Rotate top row
			for (var j = i; j < n - i - 1; j++) {
				var temp = matrix[i][j];
				matrix[i][j] = matrix[i][j + 1];
				matrix[i][j + 1] = temp;
			}
			// Rotate right column
			for (var j = i; j < m - i - 1; j++) {
				var temp = matrix[j][n - i - 1];
				matrix[j][n - i - 1] = matrix[j + 1][n - i - 1];
				matrix[j + 1][n - i - 1] = temp;
			}
			// Rotate bottom row
			for (var j = n - i - 1; j > i; j--) {
				var temp = matrix[m - i - 1][j];
				matrix[m - i - 1][j] = matrix[m - i - 1][j - 1];
				matrix[m - i - 1][j - 1] = temp;
			}
			// Rotate left column
			for (var j = m - i - 1; j > i + 1; j--) {
				var temp = matrix[j][i];
				matrix[j][i] = matrix[j - 1][i];
				matrix[j - 1][i] = temp;
			}
		}
	}
	for (var i = 0; i < matrix.length; i++) {
		res += matrix[i].join(" ");
		res += "\n";
	}
	console.log(res);
}
