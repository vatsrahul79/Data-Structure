function processData(input) {
	//Enter your code here
	var arr = input.split("");
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		obj[arr[i]] = arr[i];
	}
	// console.log(obj)
	var out = "";
	for (let key in obj) {
		out += obj[key];
	}
	console.log(out);
}
