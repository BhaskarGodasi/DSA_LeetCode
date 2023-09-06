const arr = [1, 23, 4, 748, 8, 59, 5,9];
let size = 2;
let x=size
let n = 0;
var Arr = [];
var subArray = [];

if(size==arr.length){
    Arr.push(arr)
}

for (let i = 0; i <= arr.length - 1; i++) {  
  if (n == x) {  
    Arr.push(subArray);
    x +=size;
    subArray = [];
    i--
  }else if(i==arr.length-1){
    subArray.push(arr[i]);
    Arr.push(subArray);
  } else {
    subArray.push(arr[i]);
    n = n + 1;
    
  }
 
}

console.log(Arr);
