function processData(input) {
    input = input.trim().split("\n");
var [n, m] = input[0]
	.trim()
	.split(" ")
	.map((a) => parseInt(a));
var box = input[1]
	.trim()
	.split(" ")
	.map((a) => parseInt(a))
	.sort((a, b) => a - b);
var trucks = input[2]
	.trim()
	.split(" ")
	.map((a) => parseInt(a))
	.sort((a, b) => a - b);
console.log(search());
function search() {
	var lo = 0;
	var hi = n * 2;
	var ans = 0;
	while (lo <= hi) {
		var mid = Math.floor((lo + hi) / 2);
		// console.log(isPossible(mid))
		if (isPossible(mid)) {
			ans = mid;
			hi = mid - 1;
		} else {
			lo = mid + 1;
		}
	}
	// console.log(ans)
	return ans;
}
function isPossible(time) {
	var truck = 0;
	var item_num = 0;
	// console.log(n,m)
	while (truck < m) {
		// console.log("item_num",item_num)
		// console.log(trucks[truck])
		for (
			var curr_time = 0;
			curr_time < time && item_num < n && trucks[truck] >= box[item_num];
			curr_time = curr_time + 2
		) {
			item_num++;
			// console.log("hi")
		}
		// console.log(curr_time)
		truck++;
	}
	// console.log(item_num)
	if (item_num == n) {
		return true;
	}
	return false;
}
}