function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var s = data[1]
		.trim()
		.split(" ")
		.map(a => parseInt(a));
	s.sort((a, b) => b - a);
	var c = data[2]
		.trim()
		.split(" ")
		.map(a => parseInt(a));
	c.sort((a, b) => b - a);

	var res = findStrength(s, c);
	console.log(res);

	function findStrength(s, c) {
		var sum = 0;
		for (var i = 0; i < s.length; i++) {
			sum = sum + Number(s[i]) * Number(c[i]);
		}
		return sum;
	}
}
