// const sampleInput = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const sampleInput = [1 ,1, 3, 1, 2, 1, 3, 3, 3, 3]
const setOfParis=[]

function  PariedSets(arr){
  
//    for(let i=0;i<=arr.length-1;i++){
//         for(let j=i+1;j<=arr.length-1;j++){
//             if(arr[i]==arr[j] && i==j-1){
//                 setOfParis.push([arr[i],arr[j]])
//                 console.log(i, "in the ith ",arr[i],arr[j])
//                 arr.splice(i,j)
//                 i=i-2
//             }
//             if(arr[i]==arr[j]){
//                 setOfParis.push([arr[i],arr[j]])
//                 console.log(i, "in the ith ",arr[i],arr[j])
//                 arr.splice(i,j)
//                 i--
//             }
//         }
//    }

for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr[j]="@"
            break
        }
    }
}
let c=0
for(let i=0;i<arr.length;i++){
    if(arr[i]=="@"){
        c++
    }
}
console.log(c);

}


PariedSets(sampleInput)
// console.log(setOfParis.length)