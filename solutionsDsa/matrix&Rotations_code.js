function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var n = Number(input[0])
    var refRow = input[1].split(' ')
    var resArr = printPermutations()
    function isPossible(){
        for(var i = 1;i<=n;i++){
        var row = input[i].split(' ').join('')
            if(resArr.indexOf(row) == -1){
                return "No"
            }
        }
        return "Yes"        
    }    
    console.log(isPossible())
    function printPermutations(){
        var possiblePer = []
         for(var j = 0;j<n;j++){
            var temp =refRow[0]
            for(var i = 0;i<n-1;i++ ){
                refRow[i] = refRow[i+1]
            }
             refRow[i] = temp
             possiblePer.push(refRow.join(''))
           }
        return possiblePer
    }    
} 
