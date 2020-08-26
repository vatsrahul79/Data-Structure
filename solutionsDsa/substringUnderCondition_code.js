function processData(input) {
	//Enter your code here
	var str = input;
	var count = 1;
	function isSubstring(len, left, right) {
		if (len == 0) {
			count++;
			if (count <= str.length) {
				return isSubstring(str.length, left + 1, str.length);
			} else {
				return 0;
			}
		} else if (str[left] == str[right] && left <= right) {
			// console.log(left,right)
			return 1 + isSubstring(len - 1, left, right - 1);
		} else {
			return isSubstring(len - 1, left, right - 1);
		}
	}
	console.log(isSubstring(str.length, 0, str.length - 1));
}
// Approach 2
function processData(input) {
    //Enter your code here
    var str = input;
    var count = 1;
    function isSubstring(n) {
        if(n<0){
            return 0
        }
        else{
            var firstHalf = isSubstring(n-1)
            var secHalf = 0
            for(var j = 0;j<n+1;j++){
                if(str[n]==str[j]){
                    secHalf++
                }
            }
            return firstHalf+secHalf
            
        }
       
    }
    console.log(isSubstring(str.length-1))
}
