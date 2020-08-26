function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	var arr = input[1].split(" ").map((a) => parseInt(a));
	arr.sort((a, b) => a - b);
	var last_width = arr[0];
	var layer = 1;
	var cur_width = 0;
	var temp = 0;
	var count_temp = 1;
	for (var i = 1; i < n; i++) {
		cur_width += arr[i];
		temp++;
		if (cur_width > last_width && temp > count_temp) {
			layer++;
			count_temp = temp;
			last_width = cur_width;
			temp = 0;
			cur_width = 0;
		}
	}
	console.log(layer);
}
