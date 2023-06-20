
var arr = [[1,2],[3,7],[1,5]];
let max= Number.MIN_SAFE_INTEGER
let sum =0
function twoDemensional(arr,max){

    for(let i=0;i<=arr.length-1;i++){
        for(let j=0;j<=arr[i].length-1;j++){
            // console.log(arr[i])
          sum = sum+arr[i][j]
          // console.log(sum)
         
        } 
       
        if (sum>max){
            max=sum
          }
       sum=0
    }
    

    
    return max
}

console.log(twoDemensional(arr,max))


