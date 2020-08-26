function processData(input) {
	//Enter your code here
	var str = input
		.split(" ")
		.join("")
		.split("");
	var obj = {};
	for (var i = 0; i < str.length; i++) {
		if (obj[str[i]] > 0) {
			obj[str[i]]++;
		} else {
			obj[str[i]] = 1;
		}
	}
	// console.log(obj)
	console.log(UniqueOrNot(obj));
	function UniqueOrNot(obj) {
		for (let key in obj) {
			if (obj[key] > 1) {
				return "No";
			}
		}
		return "Unique";
	}
}
