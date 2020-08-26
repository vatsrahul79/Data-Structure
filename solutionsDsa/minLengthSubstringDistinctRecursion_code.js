function processData(input) {
	//Enter your code here
	var str = input;
	function removeDuplicates(str) {
		var obj = {};
		for (var i = 0; i < str.length; i++) {
			obj[str[i]] = str[i];
		}
		var s = Object.values(obj);
		return s;
	}
	var distLen = removeDuplicates(str).length;
	var minSoFar = Number.MAX_SAFE_INTEGER;
	var res = minLength(str, 0, 0, str.length);
	console.log(res);
	function minLength(str, i, j, n) {
		if (i == n) {
			return minSoFar;
		}
		if (i < n && j >= n) {
			return minLength(str, i + 1, i + 1, n);
		} else {
			var subStr = str.substring(i, j + 1);
			var subStrUniq = removeDuplicates(subStr);
			if (subStrUniq.length == distLen) {
				if (subStr.length < minSoFar) {
					minSoFar = subStr.length;
				}
			}
			return minLength(str, i, j + 1, n);
		}
	}
}
