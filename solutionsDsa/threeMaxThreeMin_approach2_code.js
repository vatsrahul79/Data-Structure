function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr1 = data[1].split(" ").map(a => parseInt(a));
	//     Remove duplicates from given array
	function getUnique(array) {
		var obj = {};
		for (var i = 0; i < len; i++) {
			obj[array[i]] = array[i];
		}
		return obj;
	}
	var uniqObj = getUnique(arr1);
	var uniqValues = Object.values(uniqObj).sort((a, b) => a - b);
	// console.log(uniqValues)
	if (uniqValues.length >= 3) {
		var min = "";
		var max = "";
		// console.log(uniqValues)
		for (var i = 0; i < 3; i++) {
			min += uniqValues[i];
			min += " ";
		}
		for (var i = uniqValues.length - 3; i < uniqValues.length; i++) {
			max += uniqValues[i];
			max += " ";
		}
		console.log(min);
		console.log(max);
	} else {
		console.log("Not Possible");
		console.log("Not Possible");
	}
}
