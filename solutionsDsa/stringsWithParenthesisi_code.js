function processData(input) {
    //Enter your code here
   var arr=input.split("")
    // console.log(input)
  var open =[]
    for (var j = 0; j < arr.length; j++) {
                if (arr[j] == "[" || arr[j] == "{" || arr[j] == "(") {
                    open.push(arr[j]);
                } else {
                    if (
                        (open[open.length - 1] == "[" && arr[j] == "]") ||
                        (open[open.length - 1] == "{" && arr[j] == "}") ||
                        (open[open.length - 1] == "(" && arr[j] == ")")
                    ) {
                        open.pop();
                    }
                    else if(arr[j] == "}" || arr[j]=="]"||arr[j]==")"){
                        open.push(arr[j])
                    }
                }
            }
            if (open.length == 0) {
                console.log("balanced");
            } else {
                console.log("unbalanced");
            }
        }
