// issue with double zero three digit number following second process will be essay

// let num = "000400059"

// var largestGoodInteger = function(num) {
//   let  arrStr=[]

//     for(let i=0;i<=num.length-2;i++){
//         let ThreeDigitStr =num[i]
//         for(let j=i+1;j<=num.length-1;j++){
//             if(num[i]==num[j]){
//                 console.log(`${ThreeDigitStr} in num[i] = ${num[i]} and ${num[j]}maufug ${j}`)
//                  ThreeDigitStr += num[j]
//                  if(ThreeDigitStr.length==3){
//                     arrStr.push(ThreeDigitStr)
//                     i=j
//                 }
               
//             }else{
//                 break
//             }
            
//         }
        
//     }
//     console.log(arrStr)
//     var large
//     if(arrStr.length<=0){
//         large =''
//         return large
//     }else if(arrStr.length == 1){
//          large = arrStr[0]
//     }
//     else{
//         large= arrStr.reduce((a, b) => Math.max(a, b), -Infinity)
//     }

//     let largestThreedigit =large.toString()
//     console.log(largestThreedigit)

//     return largestThreedigit
// };

// console.log(largestGoodInteger(num))




function largestGoodInteger(num) {
  let maxGoodInteger = "";
  
  // Check each possible triplet of consecutive digits
  for (let i = 0; i <= num.length - 3; i++) {
    // Check if three consecutive digits are the same
    if (num[i] === num[i+1] && num[i] === num[i+2]) {
      const goodInteger = num.substring(i, i+3);
      
      // Update maxGoodInteger if current triplet is larger
      if (goodInteger > maxGoodInteger) {
        maxGoodInteger = goodInteger;
      }
    }
  }
  
  return maxGoodInteger;
}

const num = "000400059";
console.log(largestGoodInteger(num));