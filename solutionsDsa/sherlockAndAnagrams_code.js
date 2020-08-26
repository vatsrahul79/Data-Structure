function sherlockAndAnagrams(s) {
	//     find substring
	var n = s.length;
	var res = [];
	for (var i = 0; i < n; i++) {
		for (var j = i + 1; j < n + 1; j++) {
			res.push(s.substring(i, j));
		}
	}
	// console.log(res)
	//     find anagram
	res = res.map((a) => a.split("").sort().join(""));
	var obj = {};
	for (let i = 0; i < res.length; i++) {
		// console.log(res[i])
		if (obj[res[i]] > 0) {
			obj[res[i]]++;
		} else {
			obj[res[i]] = 1;
		}
	}
	// console.log(obj)
	var sum = 0;
	for (let key in obj) {
		if (obj[key] > 1) {
			var ans = (obj[key] * (obj[key] - 1)) / 2;
			sum += ans;
		}
	}
	return sum;
}
