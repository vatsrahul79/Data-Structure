function processData(input) {
	//Enter your code here
	var data = input.split(" ");
	var obj = {};
	for (var i = 0; i < data.length; i++) {
		if (obj[data[i]] > 0) {
			obj[data[i]]++;
		} else {
			obj[data[i]] = 1;
		}
	}
	// console.log(obj)
	var count = 0;
	for (let key in obj) {
		if (key.length == 1) {
			count += obj[key];
		} else if (obj[key] == 1) {
			count++;
		}
	}
	console.log(count);
}
