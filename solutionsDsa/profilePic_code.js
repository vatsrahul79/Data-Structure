function processData(input) {
	//Enter your code here
	var [givenSizes, upload] = input.split("\n");
	var [L, W] = givenSizes.split(" ").map(a => parseInt(a));
	var [uploadedL, uploadedW] = upload.split(" ").map(a => parseInt(a));
	if (uploadedL > L && uploadedW > W) {
		console.log("Upload");
	} else if (uploadedL <= L) {
		console.log("Increase Length");
	} else if (uploadedW <= W) {
		console.log("Increase Width");
	}
}
