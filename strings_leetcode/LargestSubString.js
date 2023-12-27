const str = "abcabcbb";

let newSetStr = str.split("");
let arr = [];
for (let i = 0; i <= newSetStr.length - 1; i++) {
  let subArr = [newSetStr[i]];
  for (let j = i+1; j <= subArr.length; j++) {
    if (newSetStr[j] != subArr[i]) {
        subArr.push(newSetStr[j]);
     let s=   Checking(subArr)
     if(s==2){
        subArr.pop()
        return subArr
     }
     
      i++;
    } else {
      return;
    }
  }
  arr.push(subArr);
}

// console.log(newSetStr)

console.log(arr, ": array");

function Checking(char){
    let firstNon = arr.reduce((acc,val)=>{
        if(val==char){
            acc++
        }
        return acc
    },0)

    return firstNon
}
