function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var [n, target] = input[0].split(" ").map((a) => parseInt(a));
	var arr = input[1].split(" ").map((a) => parseInt(a));
	arr.sort((a, b) => a - b);
	var i = 0;
	var j = n - 1;
	var flag = false;
	while (i < n && j >= 0) {
		if (arr[i] + arr[j] > target) {
			j--;
		} else if (arr[i] + arr[j] < target) {
			i++;
		} else {
			flag = true;
			break;
		}
	}
	if (flag) {
		console.log(1);
	} else {
		console.log(-1);
	}
}
