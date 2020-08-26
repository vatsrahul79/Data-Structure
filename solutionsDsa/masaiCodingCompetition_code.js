function processData(input) {
	//Enter your code here
	input = input.split("\n");
	let cases = Number(input[0]);
	var Master = [];
	var Q1 = [];
	var Q2 = [];
	var Q3 = [];
	var Q4 = [];
	var flag1 = true;
	var flag2 = true;
	var flag3 = true;
	var flag4 = true;
	for (i = 1; i <= cases; i++) {
		input[i] = input[i].split(" ");
		check(input[i]);
	}

	function check(arra) {
		if (arra[0] == "E") {
			if (arra[1] == "1") {
				if (flag1 == true) {
					Master.push(1);
					flag1 = false;
				}
				Q1.push(arra[2]);
			}
			if (arra[1] == "2") {
				if (flag2 == true) {
					Master.push(2);
					flag2 = false;
				}
				Q2.push(arra[2]);
			}
			if (arra[1] == "3") {
				if (flag3 == true) {
					Master.push(3);
					flag3 = false;
				}
				Q3.push(arra[2]);
			}
			if (arra[1] == "4") {
				if (flag4 == true) {
					Master.push(4);
					flag4 = false;
				}
				Q4.push(arra[2]);
			}
		} else {
			if (Master[0] == 1) {
				console.log(1, Number(Q1.shift()));
			}

			if (Master[0] == 2) {
				console.log(2, Number(Q2.shift()));
			}

			if (Master[0] == 3) {
				console.log(3, Number(Q3.shift()));
			}

			if (Master[0] == 4) {
				console.log(4, Number(Q4.shift()));
			}
		}
		if (Q1.length == 0 && Master[0] == 1) {
			Master.shift();
			flag1 = true;
		}
		if (Q2.length == 0 && Master[0] == 2) {
			Master.shift();
			flag2 = true;
		}
		if (Q3.length == 0 && Master[0] == 3) {
			Master.shift();
			flag3 = true;
		}
		if (Q4.length == 0 && Master[0] == 4) {
			Master.shift();
			flag4 = true;
		}
	}
}
