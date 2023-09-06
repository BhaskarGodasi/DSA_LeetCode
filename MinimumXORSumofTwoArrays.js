// const nums1 = [1,0,3];
// const nums2 = [5,3,4]

const nums1 =[72,97,8,32,15]
const nums2 =[63,97,57,60,83]

let newArray =[]

let indexOfI
let indexOfJ

function MinimumXORSumofTwoArrays(nums1,nums2){

    checkingSameNumbers(nums1,nums2)

    for(let i=0;i<=nums1.length-1;i++){
        for(let j=0;j<=nums2.length-1;j++){
            if(nums1[i]==nums2[j]){
                newArray.push(0) 
                i++
            }else{
               
               newArray.push(Math.abs( nums1[i]-nums2[j]))
               i++
            }
            
        }
        
}

const outPut = newArray.reduce((acc,val)=>{
 return acc+val
},0)
console.log(outPut)

}

MinimumXORSumofTwoArrays(nums1,nums2)



function checkingSameNumbers(nums1,nums2){

    for(let i=0;i<=nums1.length-1;i++){
            for(let j=0;j<=nums2.length-1;j++){

                if(nums1[i]==nums2[j] && i==j){
                    return
                }
                 else if(nums1[i]==nums2[j]){
                    indexOfI =i
                    indexOfJ=j
                    swap(indexOfI,indexOfJ)
                }
            }

            
    }

}

function swap(indexOfI,indexOfJ){
    let temp =nums2[indexOfI]
    nums2[indexOfI]=nums2[indexOfJ]
    nums2[indexOfJ]=temp

    temp = null

}

console.log(newArray)