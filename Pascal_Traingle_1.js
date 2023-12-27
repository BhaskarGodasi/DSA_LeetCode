var rowIndex=5;
const Arr=[]
function getrow(rowIndex){
    

    for(let i=0;i<=rowIndex;i++){
        
        const rowArray=[]
        for(let j=0;j<=i;j++){

            if(j==0 || j==i){
                rowArray.push(1)
            }else{
               rowArray.push(toGetValueForPerviousArray(j)) 
            }
        }
        Arr.push(rowArray)
    }

    return Arr
}
console.log(getrow(rowIndex))


function toGetValueForPerviousArray(val){

let lastArray = Arr[Arr.length-1]
let sum = lastArray[val-1]+lastArray[val]
return sum

}