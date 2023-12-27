let str = "innomaticsomatc"
const arr= [...str.split("")];
console.log(Array.isArray(arr))
function findFristCha(arr){


for (let i=0;i<=arr.length-1;i++){
    const repeating = Checking(arr[i])

            if(repeating==1){
                console.log(i)
                return i
               } 

}

return -1
}
findFristCha(str)
console.log(findFristCha(str))

function Checking(char){
    let firstNon = arr.reduce((acc,val)=>{
        if(val==char){
            acc++
        }
        return acc
    },0)

    return firstNon
}