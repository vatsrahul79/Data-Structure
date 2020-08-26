function processData(input) {
	//Enter your code here
	var [fuelPerKm, dist] = input.split(" ").map(a => parseInt(a));
	var totalFuel = fuelPerKm * dist;
	// console.log(fuelPerKm)
	if (totalFuel > 50) {
		console.log("Enough");
	} else {
		console.log("Go On");
	}
}
