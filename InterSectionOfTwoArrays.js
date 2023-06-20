var arr1 = [
  95, 20, 12, 30, 67, 93, 42, 34, 19, 55, 34, 34, 94, 11, 49, 6, 19, 67, 80, 56,
  32, 89, 14, 91, 19, 32, 82, 78, 83, 17, 20, 98, 10, 26, 75, 3, 53,
];
var arr2 = [
  99, 94, 23, 51, 26, 54, 38, 59, 35, 86, 24, 70, 52, 83, 17, 40, 47, 82, 26,
  12, 38, 6, 50, 57, 79, 21, 10, 26, 61, 80, 7, 6, 5, 32, 7, 65, 39, 37, 28, 54,
  7, 97, 12, 56, 39, 81, 61, 0, 61, 86, 77, 21, 46, 31, 95, 87, 18, 77, 91, 77,
  20, 35, 34, 77, 43, 28, 71, 37,
];
var UnionArray = [];

function InterSectionOfTwoArrays(a, b) {
  removeDulipcatesInArray(a);
   console.log(a)
  removeDulipcatesInArray(b);
   console.log(b)

  for (let i = 0; i <= a.length - 1; i++) {
    for (let j = 0; j <= b.length - 1; j++) {
      if (a[i] == b[j]) {
        UnionArray.push(b[j]);
      }
    }
  }
}
InterSectionOfTwoArrays(arr1, arr2);

function removeDulipcatesInArray(x) {
  for (let i = 0; i <= x.length - 1; i++) {
    for (let j = i + 1; j <= x.length-1; j++) {
        if (x[i] == x[j]&&x[i]==x[j+1]) {
            x.splice(j, 2);
          }
     
        if (x[i] == x[j]) {
        x.splice(j, 1);
      }
    }
  }
}

console.log(UnionArray);
//[94,26,83,17,82,12,6,10,80,32,56,95,91,20,34]
// [95, 20, 12, 34, 34, 94,6, 80, 56, 32, 91, 82,83, 17, 10, 26]
