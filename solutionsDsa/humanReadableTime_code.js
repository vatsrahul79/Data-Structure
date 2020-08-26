function processData(input) {
	//Enter your code here
	var num = Number(input);
	var hr = Math.floor(num / 60);
	var min = num % 60;
	if(min == 0){
		min = "00"
	}
	if (hr == 1) {
		console.log(hr + "hr" + " " + min + "mins");
	} else {
		console.log(hr + "hrs" + " " + min + "mins");
	}
}
