function processData(input) {
	//Enter your code here
	var num = Number(input);
	function findWays(num) {
		if (num == 1) {
			return 1;
		} else if (num == 2) {
			return 2;
		} else if (num == 3) {
			return 4;
		} else {
			return findWays(num - 1) + findWays(num - 2) + findWays(num - 3);
		}
	}
	console.log(findWays(num));
}
