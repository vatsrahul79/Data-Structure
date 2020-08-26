function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	var arr = input[1].split(" ").join("");
	var res = permutations(arr);
	console.log(res.join("\n"));
	function permutations(str) {
		if (str.length === 1) {
			return str;
		}
		let result = [];
		for (let i = 0; i < str.length; i++) {
			const currentChar = str[i];
			const remainingChars = str.slice(0, i) + str.slice(i + 1);
			var remCharPer = permutations(remainingChars);
			for (let j = 0; j < remCharPer.length; j++) {
				result.push(currentChar + " " + remCharPer[j]);
			}
		}
		return result;
	}
}
