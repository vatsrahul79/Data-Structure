function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr1 = data[1].split(" ").map(a => parseInt(a));
	function getUnique(array) {
		var uniqueArr = [];
		for (var i = 0; i < len; i++) {
			if (uniqueArr.indexOf(array[i]) === -1) {
				uniqueArr.push(array[i]);
				// console.log(uniqueArr)
			}
		}
		return uniqueArr;
	}
	var arr2 = getUnique(arr1);
	arr2.sort((a, b) => a - b);
	var min = "";
	var max = "";
	if (arr2.length >= 3) {
		for (var i = 0; i < 3; i++) {
			min += arr2[i];
			min += " ";
			max +=arr2[arr2.length-3+i]
			max+=" "
		}
		
		console.log(min);
		console.log(max);
	} else {
		console.log("Not Possible");
		console.log("Not Possible");
	}
}
