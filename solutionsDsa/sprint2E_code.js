function processData(input) {
	//Enter your code here
	var [len, arr] = input.split("\n");
	arr = arr.split(" ").map(a => parseInt(a));
	var obj = {};
	for (var i = 0; i < Number(len); i++) {
		obj[arr[i]] = arr[i];
	}
	// console.log(obj)
	var sum = 0;
	for (let key in obj) {
		sum += obj[key];
	}
	console.log(sum);
}
