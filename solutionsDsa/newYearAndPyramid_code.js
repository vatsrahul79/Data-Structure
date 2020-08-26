function processData(input) {
	//Enter your code here
	var n = Number(input)
    var requiredStones = 0
   	var level = 1
   	while(requiredStones<=n){
       	requiredStones += (level*(level+1))/2
       	var res = level-1
        level++
    } 
    console.log(res)
}
