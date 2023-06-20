var arr1=[1,3]
var arr2=[-2,-4]

var median

function medianOfTwoArrays(x,y){

    for(let i=0; i<=y.length-1;i++){
        x.push(y[i])
        
    }

    x.sort((a,b)=>{
        return a-b
    })

    
console.log(x)
    if(x.length%2==0){
        let med1 = parseInt(x.length/2)
        let med2= parseInt(x.length/2-1)
  
        median= (x[med1]+x[med2])/2

        return median
    }else{
        let med =parseInt(x.length/2)

        median=x[med]
        return median
    }

}

console.log(medianOfTwoArrays(arr1,arr2),"function return value")

