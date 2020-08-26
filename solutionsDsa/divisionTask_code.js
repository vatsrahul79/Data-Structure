function processData(input) {
	//Enter your code here
	var num = Number(input);
	if (num == 0) {
		console.log(-1);
	} else {
		var x = Math.floor(32 / num);
		if (x == 0) {
			console.log("Too Low");
		} else {
			console.log(x);
		}
	}
}
