// Regology

// const arr = [4,6,4,5,7,5,5,7]

// function removeDulipcates(arr){
//     let DistictArr =[]

//     for(let i=0 ; i<=arr.length-1;i++){
//         if(!DistictArr.includes(arr[i])){
//                 DistictArr.push(arr[i])
//         }
//     }
// return  DistictArr
    

// }
// console.log(removeDulipcates(arr))

const Arr=  [[1,2], 3, [4], [[5,6],7]];
function flattenArray(arr){
    let flattedVal =[] 

    if (arr.length == 0){
        return 1
    }
    
  arr.map((val)=>{
        if(Array.isArray(val)){
            flattedVal.push(...flattenArray(val))
        }else{
            flattedVal.push(val)
        }
  })

  return flattedVal
}
console.log(flattenArray(Arr))

// n represents how nested we have to flatten the array
function flattenDepth(arr, depth) {
    if (depth === 0) return arr; // Base case: No flattening

    let result = [];

    arr.forEach((val) => {
        if (Array.isArray(val) && depth > 0) {
            result.push(...flattenDepth(val, depth - 1)); // Recursive flattening
        } else {
            result.push(val);
        }
    });

    return result;
}

// **Example 1: depth = 0 (No flattening)**
console.log(flattenDepth([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));
// Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// **Example 2: depth = 1 (Flatten only top-level arrays)**
console.log(flattenDepth([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]



// Best Time to Buy and Sell Stock


// function MaxPorfit(val){
//     let HighestReturn =0

//     for(let i=0;i<=val.length-1;i++){
//         for(let j=i+1; j<=val.length-1;j++){
//             let diff =val[j]-val[i]
//             if(HighestReturn< diff){
//                 HighestReturn = diff
//             }
                   
//         }
//     }
// console.log(HighestReturn)
//     return HighestReturn

// }
// MaxPorfit([7,1,5,3,6,4])

// time excceds for larger sample

function MaxProfit(prices) {
    let minPrice = Infinity; // Track the lowest price
    let maxProfit = 0; // Store the max profit

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Update minPrice if a lower value is found
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice); // Check if we get a better profit
        }
    }

    console.log(maxProfit);
    return maxProfit;
}

MaxProfit([7, 1, 5, 3, 6, 4]); // Output: 5
