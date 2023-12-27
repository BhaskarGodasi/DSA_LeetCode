
let string = "";
function staircase(n) {
  
    // Write your code here
    for (let i = 1; i <= n; i++) {
        
        for (let j = 0; j < n - i; j++) {
          string += " ";
        }
        
        for (let k = 0; k < i; k++) {
          string += "*";
        }
       string += "\n";
      }
      console.log( string)

}
console.log(staircase(6))
