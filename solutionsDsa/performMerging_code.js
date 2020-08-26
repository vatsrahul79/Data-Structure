function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr1 = data[1].split(" ").map(a => parseInt(a));
	var arr2 = data[2].split(" ").map(a => parseInt(a));
	var i = 0;
	var j = 0;
	var res = "";
	while (i < len && j < len) {
		if (arr1[i] < arr2[j]) {
			res += arr1[i] + " ";
			i++;
		} else {
			res += arr2[j] + " ";
			j++;
		}
	}
	if (i < len) {
		while (i < len) {
			res += arr1[i] + " ";
			i++;
		}
	}
	if (j < len) {
		while (j < len) {
			res += arr2[j] + " ";
			j++;
		}
	}

	console.log(res);
}
