function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var obj = {};
	for (var i = 1; i < data.length; i++) {
		if (obj[data[i]] > 0) {
			obj[data[i]]++;
		} else {
			obj[data[i]] = 1;
		}
	}
	var sortedNames = [];
	for (let key in obj) {
		sortedNames.push([key, obj[key]]);
	}
	sortedNames.sort();
	// console.log(sortedNames)
	for (var i = 0; i < sortedNames.length; i++) {
		console.log(sortedNames[i][0], sortedNames[i][1]);
	}
}
