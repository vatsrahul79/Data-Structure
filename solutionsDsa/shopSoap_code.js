function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr = data[1].split(" ").map((a) => parseInt(a));
	var queries = Number(data[2]);
	// console.log(data)
	arr.sort((a, b) => a - b);
	var j = 3;
	while (j < queries + 3) {
		var lo = 0;
		var hi = len - 1;
		var target = Number(data[j]);
		while (lo <= hi) {
			var mid = Math.floor((lo + hi) / 2);
			if (arr[mid] < target) {
				lo = mid + 1; //count right side
			} else {
				hi = mid - 1; //count left side
			}
		}
		console.log(lo);
		j++;
	}
}
