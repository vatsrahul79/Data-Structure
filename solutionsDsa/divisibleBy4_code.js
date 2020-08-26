function processData(input) {
	//Enter your code here
	var num = Number(input);
	if (num % 4 == 0) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	processData(_input);
});
