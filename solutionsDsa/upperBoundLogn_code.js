var data = input.split("\n");
var fline = data[0].split(" ").map((a) => parseInt(a));
var n = fline[0];
var k = fline[1];
var arr = data[1].split(" ").map((a) => parseInt(a));
var lo = 0;
var hi = n - 1;
var res = upperBound(arr, k);
console.log(res);
function upperBound(arr, k) {
	while (lo < hi) {
		var mid = Math.floor((lo + hi) / 2);
		if (arr[mid] > k) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}
	if (arr[hi] > k) {
		return hi;
	}
}
