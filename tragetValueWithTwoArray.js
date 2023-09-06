var arr = [1,3,2,2,-4,-6,-2,8]
let traget =4
let subArr =[]

function returnSumOfValueInTwoDArray(arr,val){
let twoDval =val/2
    if (arr.length <twoDval) return 0;

MakingTwoD(arr,twoDval,val)

const newArr = removeDuplictes(subArr)
const sortarray =get1DArray(newArr) 

console.log(newArr, "traget val",val)
console.log(sortarray)


 return returnSumOfValueInTwoDArray(sortarray , val*2)
}

returnSumOfValueInTwoDArray(arr,traget)


function removeDuplictes(arr){
    const unqiueArray = Array.from( new Set(arr.map(JSON.stringify)))

    return unqiueArray.map(JSON.parse)
}

function get1DArray(arr){
    return arr.join().split(",").sort((a,b)=>{return a-b})
}

function MakingTwoD(arr,twoDval,val){
    
    for(let i=0;i<=arr.length-1;i++){
     let  element = twoDval
     let jArr =[]
        for(let j=i+1;j<=arr.length-1;j++){
           
             if(Math.abs(arr[i]+arr[j])==val && element){
               
                if(element==twoDval){
                    jArr.push(arr[i],arr[j])
                    element--  
                }else{
                    jArr.push(arr[j])
                    element--  
                }
                
                
                
             }
            
           
        }
        subArr.push(jArr)
      
       
    }
}