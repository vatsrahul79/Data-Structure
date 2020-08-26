function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var tcs = Number(data[0]);
    var line = 1;
    // to get input
	for (var i = 0; i < tcs; i++) {
		var arr = [];
		var [N, M] = data[line].split(" ").map(a => parseInt(a));
		for (var j = line + 1; j <= N + line; j++) {
			arr.push(data[j].split(""));
		}
		line += N + 1;
		var string = data[line].split("");
		line++
		var res = stringMatrix(arr, string, N);
		console.log(res)
    }
	function stringMatrix(arr, string, N) {
		var i = 0;
		var j = 0
		while (j < string.length) {
			var ans = arr[i].indexOf(string[j]);
			if (ans != -1) {
				arr[i].splice(ans, 1);
				i++;
				j++;
				if (i == N) {
					i = 0;
				}
			} else {
				return "No";
			}
		}
		return "Yes";
	}
}

