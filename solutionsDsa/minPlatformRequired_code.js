function processData(input) {
	//Enter your code here
	var data = input.trim().split("\n");
	var len = Number(data[0]);
	var arrival = data[1].trim().split(" ");
	// console.log(arrival)
	var departure = data[2].trim().split(" ");
	for (var i = 0; i < arrival.length; i++) {
		arrival[i] = arrival[i].split(":").map((a) => parseInt(a));
		arrival[i] = arrival[i][0] * 60 + arrival[i][1];
		departure[i] = departure[i].split(":").map((a) => parseInt(a));
		departure[i] = departure[i][0] * 60 + departure[i][1];
	}
	var count = 1;
	var max = 1;
	var i = 1;
	var j = 0;
	while (i < len && j < len) {
		if (arrival[i] <= departure[j]) {
			count++;
			i++;
		} else {
			count--;
			j++;
		}
		if (count > max) {
			max = count;
		}
	}
	console.log(max);
}
