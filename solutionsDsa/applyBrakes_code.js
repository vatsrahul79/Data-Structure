function processData(input) {
	//Enter your code here
	var [dist, time] = input.split(" ").map(a => parseInt(a));
	var speed = dist / time;
	if (speed > 40) {
		console.log("Apply Brake");
	} else {
		console.log("Keep Going");
	}
}
