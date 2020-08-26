function processData(input) {
	//Enter your code here
	var str = input.trim().split("");
	var count = 1;
	var res = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i + 1] == str[i] && str[i + 1] != undefined) {
			count++;
			// console.log(count,str[i])
		} else {
			// console.log(count,str[i])
			if (count % 2 == 1) {
				res += str[i];
			}
			count = 1;
		}
	}
	if (res) {
		console.log(res);
	} else {
		console.log("Empty String");
	}
}
