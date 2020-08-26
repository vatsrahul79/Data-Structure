function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var m = Number(input[0]);
	var arr1 = input[1]
		.trim()
		.split(" ")
		.map((a) => parseInt(a));
	var n = Number(input[2]);
	var arr2 = input[3]
		.trim()
		.split(" ")
		.map((a) => parseInt(a));
	// console.log(m,arr1,n,arr2)

	var index1 = 0;
	var index2 = 0;
	var sum = 0;

	for (var i = 0; i < m; i++) {
		var res = bs(arr1[i], arr2);
		// console.log(i,res)
		if (res !== -1) {
			var sum1 = 0;
			var sum2 = 0;
			for (var k = index1; k < i; k++) {
				sum1 += arr1[k];
			}
			for (var l = index2; l < res; l++) {
				sum2 += arr2[l];
			}
			//take max of two
			sum += Math.max(sum1, sum2);
			//update indices
			index1 = i;
			index2 = res;
		}
	}
	sum1 = 0;
	sum2 = 0;
	for (var k = index1; k < m; k++) {
		sum1 += arr1[k];
	}
	for (var l = index2; l < n; l++) {
		sum2 += arr2[l];
	}
	sum += Math.max(sum1, sum2);
	console.log(sum);
	//search common elements
	function bs(target, arr) {
		var lo = 0;
		var hi = n - 1;
		var ans = -1;
		// console.log(target,arr)
		while (lo <= hi) {
			var mid = Math.floor((lo + hi) / 2);
			if (arr[mid] == target) {
				return mid;
			} else if (arr[mid] < target) {
				lo = mid + 1;
			} else {
				hi = mid - 1;
			}
		}
		return ans;
	}
}
