var list = [2, 4, 3];
var list2 = [5, 6, 4];
let arr=[]
let sum=0
let digit
let remainedValue=0

function addTwoNumbers(a, b) {
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
   if(a[i]&&b[j]){
    sum =a[i]+b[j]+remainedValue
    singleDigit(sum)
    arr.push(digit)
  
    i--
   }else if(a[i]){
      arr.push(a[i])
      i--
   }else{
    arr.push(b[j])
    j--
   }
    }
   
  }

 
  
  console.log(arr)
}

addTwoNumbers(list, list2);

function singleDigit(sum){
    for(let i=1;i>0;i--){
       let temp = sum
        digit = sum%10
        remainedValue=parseInt(temp/10)
    console.log(digit ,remainedValue,"in ihbvcihb")
    }
}
