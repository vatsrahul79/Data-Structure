function processData(input) {
	//Enter your code here
	var [vac, strngth, count] = input.split("\n");
	vac = Number(vac);
	strngth = strngth
		.split(" ")
		.map(a => parseInt(a))
		.sort((a, b) => a - b);
	count = count
		.split(" ")
		.map(a => parseInt(a))
		.sort((a, b) => a - b);
	console.log(cureDisease());
	function cureDisease() {
		for (var i = 0; i < vac; i++) {
			if (strngth[i] <= count[i]) {
				return "No";
			}
		}
		return "Yes";
	}
}
