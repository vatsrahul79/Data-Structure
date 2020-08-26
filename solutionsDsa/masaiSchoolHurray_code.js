function processData(input) {
	//Enter your code here
	var num = Number(input);
	if (num % 7 == 0 && num % 5 == 0) {
		console.log("Masai School");
	} else if (num % 7 == 0) {
		console.log("Masai");
	} else if (num % 5 == 0) {
		console.log("School");
	} else {
		console.log("Hurray!");
	}
}
