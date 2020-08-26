function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var n = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	var count = 1;
	var temp = 0;
	var maxtemp = 0;
	for (var i = 0; i < n; i++) {
		if (arr[i] % 2 == 1) {
			if (arr[i] == arr[i + 1]) {
				count++;
			} else {
				temp = count;
				// console.log(count)
				count = 1;
				if (temp > maxtemp) {
					maxtemp = temp;
				}
			}
		}
		// console.log(count)
	}

	console.log(maxtemp);
}
