function processData(input) {
	//Enter your code here
	var num = Number(input);
	function fib(num) {
		if (num == 0) {
			return 0;
		} else if (num == 1) {
			return 1;
		}
		return fib(num - 1) + fib(num - 2);
	}
	console.log(fib(num));
}
