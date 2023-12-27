let nums =[1,2,3,4,5,6,7]

function rotate(arr,k){
  
    for(let i=0;i<k;i++){
        arr.unshift(arr.pop())
    }
}
rotate(nums,3)
console.log(nums)