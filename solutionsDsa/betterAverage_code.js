function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var player1 = data[1].split(" ").map(a => parseInt(a));
	var player2 = data[2].split(" ").map(a => parseInt(a));
	var p1Score = 0;
	var p2Score = 0;
	for (var i = 0; i < len; i++) {
		p1Score += player1[i];
		p2Score += player2[i];
	}

	var avg = Math.max(Math.ceil(p1Score / len), Math.ceil(p2Score / len));
	if (avg % 2 == 0) {
		console.log(avg);
	} else {
		console.log(-1);
	}
}
