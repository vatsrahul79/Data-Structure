function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var slots = Number(data[0]);
	var arrival = data[1].split(" ").map(a => parseInt(a));
	var departure = data[2].split(" ").map(a => parseInt(a));
	var count = 1;
	for (var i = 0; i < arrival.length - 1; i++) {
		if (departure[i] > arrival[i + 1]) {
			count++;
		}
	}
	if (count > slots) {
		console.log("Not Possible");
	} else {
		console.log("Possible");
	}
}
