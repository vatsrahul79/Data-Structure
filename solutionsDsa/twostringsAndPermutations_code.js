function processData(input) {
	//Enter your code here
	var [s1, s2] = input.split("\n");
	s1 = s1.split("").sort();
	s2 = s2.split("").sort();
	var flag = true;
	for (var i = 0; i < s1.length; i++) {
		if (s1[i] != s2[i]) {
			flag = false;
			break;
		}
	}
	if (flag) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}
