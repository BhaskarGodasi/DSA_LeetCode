// var nums = [[3,1,2,4,5,1,4],[1,2,3,4,4,3,0],[3,4,4,5,6,5,6]]

var nums = [[7,34,45,10,12,27,13],[27,21,45,10,12,13]]
let UnionArray=[]

function IntersectionMultipleArrays(arr){
    
    for(let i=0;i<=arr.length-1;i++){
        removeDulipcatesInArray(arr[i])
    }
if(arr.length<=1){
    UnionArray=arr[0]
    UnionArray.sort((a,b)=>{
                  return  a-b
                })
return UnionArray
}
// else if(arr.length<=2){
//         divingintoTwoArrays(arr[0],arr[1])
//         UnionArray.sort((a,b)=>{
//           return  a-b
//         })
//         return UnionArray
//     }
    else{
        divingintoTwoArrays(arr[0],arr[1])
        
        for(let i=2;i<=arr.length-1;i++){
            let nextArray =UnionArray
            divingintoTwoArrays(nextArray,arr[i])
            
        }

        UnionArray.sort((a,b)=>{
          return  a-b
        })
        return UnionArray
    }

}


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

  function divingintoTwoArrays(a,b){
   UnionArray =[]
   
    for (let i = 0; i <= a.length - 1; i++) {
        for (let j = 0; j <= b.length - 1; j++) {
          if (a[i] == b[j]) {
            UnionArray.push(b[j]);
          }
        }
      }
     
      return UnionArray
  }


//   IntersectionMultipleArrays(nums)
console.log(IntersectionMultipleArrays(nums) ,"main function")