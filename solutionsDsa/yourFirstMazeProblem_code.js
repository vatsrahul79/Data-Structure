function processData(input) {
	//Enter your code here
	var arr = input.split("");
	var x = 0;
	var y = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == "L") {
			x--;
		} else if (arr[i] == "R") {
			x++;
		} else if (arr[i] == "D") {
			y--;
		} else {
			y++;
		}
	}
	console.log(x, y);
}
