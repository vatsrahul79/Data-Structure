function processData(input) {
	//Enter your code here
	var coins = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
	var data = input.trim().split("\n");
	var len = Number(data[0]);
	for (var i = 1; i <= len; i++) {
		var num = Number(data[i]);
		var count = 0;
		for (var j = 0; j < coins.length; j++) {
			count += Math.floor(num / coins[j]);
			num = num % coins[j];
		}
		console.log(count);
	}
}
