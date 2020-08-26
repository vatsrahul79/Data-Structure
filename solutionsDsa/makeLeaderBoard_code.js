function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var tcs = Number(data[0]);
	var arr = [];
	for (var i = 1; i <= tcs; i++) {
		arr.push(data[i].split(" "));
	}
	// console.log(arr)
	//     sort by name
	arr.sort();
	//     sort by marks
	arr.sort((a, b) => Number(b[1]) - Number(a[1]));
	for (var i = 0; i < arr.length; i++) {
		arr[i][2] = i + 1;
	}
	var res = [];
	//     assign ranks
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1][1] == arr[i][1]) {
			arr[i + 1][2] = arr[i][2];
		} else {
			arr[i + 1][2] = i + 2;
		}
		res.push([arr[i][2], arr[i][0]]);
	}
	res.push([arr[arr.length - 1][2], arr[arr.length - 1][0]]);
	for (var i = 0; i < res.length; i++) {
		console.log(res[i].join(" "));
	}
}
