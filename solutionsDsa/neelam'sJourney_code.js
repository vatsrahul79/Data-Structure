function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	var arr = input[1].split(" ").map((a) => parseInt(a));
	var minCost = arr[0];
	var minIndex = 0;
	var sum = 0;
	for (var i = 1; i < n; i++) {
		if (arr[i] < minCost) {
			sum += minCost * (i - minIndex);
			minCost = arr[i];
			minIndex = i;
		}
	}
	sum += minCost * (n - minIndex);
	console.log(sum);
}
