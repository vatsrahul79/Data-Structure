function processData(input) {
	//Enter your code here
	var [len, arr] = input.split("\n");
	len = Number(len);
	arr = arr.split(" ").map(a => parseInt(a));
	var countEven = 1;
	var countOdd = 0;
	var sum = 0;
	for (var i = 0; i < len; i++) {
		sum += arr[i];
		if (sum % 2 == 0) {
			countEven++;
		} else {
			countOdd++;
		}
	}
	var ans = (countOdd * (countOdd - 1)) / 2 + (countEven * (countEven - 1)) / 2;
	console.log(ans);
}
