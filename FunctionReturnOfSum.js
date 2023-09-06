var arr =[11, 14,16,10,9,8,24,5,4,3]
let n=10;

function twoFunctionsReturn(arr,n){
let f1 ,f2
var totalSum=0;
    for(let i=0;i<=arr.length-1;i++){
       totalSum += addingOfDigits(arr[i])
    }
   console.log(totalSum)
    f1 =totalSum%10
    console.log(f1)

    sumOfArr=arr.reduce((accumulator, currentValue) =>  accumulator + currentValue);
    console.log(sumOfArr)
    f2=sumOfArr%10

  const result=  f1-f2
  console.log(result)


}

twoFunctionsReturn(arr,n)


function addingOfDigits(num){
    let sum =0

    while(num>0){
    let digit = num%10
     sum =sum+digit
     num = parseInt(num/10)
    }

    console.log(sum , "sum val")
    return sum
   
}