function processData(input) {
	//Enter your code here
	var num = Number(input);
	var res = isPrime(num);
	console.log(res);
	function isPrime(num) {
		if (num == 1) {
			return "No";
		} else {
			for (var i = 2; i < num; i++) {
				if (num % i == 0) {
					return "No";
				}
			}
		}
		return "Yes";
	}
}
