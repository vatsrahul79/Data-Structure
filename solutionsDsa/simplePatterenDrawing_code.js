function processData(input) {
	//Enter your code here
	var data = input.split(" ");
	var row = Number(data[0]);
	var col = Number(data[1]);
	// console.log(row,col)
	var arr = [];
	var dotLines = 0;

	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			if (i % 2 == 0) {
				arr[j] = "#";
			} else {
				arr[j] = ".";
				if (dotLines % 2 == 1) {
					arr[0] = "#";
				} else {
					arr[col - 1] = "#";
				}
			}
		}
		if (i % 2 == 1) {
			dotLines++;
		}
		console.log(arr.join(""));
	}
}
