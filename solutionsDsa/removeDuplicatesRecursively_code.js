function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var tcs = Number(input[0]);
	for (var i = 1; i <= tcs; i++) {
		var str = input[i].toString();
		var res = removeDuplicates(str, str.length);
		if (res == "") {
			console.log("Empty String");
		} else {
			console.log(res);
		}
	}
	//logic
	var s;
	function removeDuplicates(str, n) {
		var arr = str.split("")
		var j = 0;
		var i = 1;
		while (i < arr.length) {
			if (arr[i - 1] != arr[i]) {
				arr[j] = arr[i - 1];
				j = j + 1;
			} else {
				while (i < arr.length && arr[i - 1] == arr[i]) {
					i = i + 1;
				}
			}
			i = i + 1;
		}
		arr[j] = arr[i - 1];
		j = j + 1;
		s = arr.slice(0, j).join("");
		if (j != n) {
			return removeDuplicates(s, j);
		}
		return s;
	}
}
