function processData(input) {
	//Enter your code here
	var [len, arr1, arr2] = input.split("\n");
	arr1 = arr1.split(" ").map(a => parseInt(a));
	arr2 = arr2.split(" ").map(a => parseInt(a));
	// console.log(arr1,arr2)
	for (var i = 0; i < Number(len); i++) {
		for (var j = 0; j < Number(len); j++) {
			if (arr1[i] == arr2[j]) {
				console.log(arr1[i]);
				break;
			}
		}
	}
}
