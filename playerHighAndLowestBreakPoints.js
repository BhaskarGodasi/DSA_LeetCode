// var scores=[3 ,4 ,21 ,36, 10, 28 ,35 ,5 ,24, 42]

var scores=[10 ,5 ,20, 20, 4, 5, 2, 25, 1]

function playerRecord(scores){
    let HighestR=scores[0]
    let LowestR=scores[0]
  let countOfH =0
  let countOfL =0
  
  const arr=[]
  
      for(let i=0;i<=scores.length-1;i++){
        // console.log("hi",i)
         if(scores[i]>HighestR){
            HighestR=scores[i]
            countOfH++
            
         }
      }
      for(let j=0;j<=scores.length-1;j++){
        if(scores[j]<LowestR){
            LowestR=scores[j]
            countOfL++
            console.log("hi",j)
        }
    }
      
      arr.push(countOfH)
      arr.push(countOfL)
  
  return arr
  

}
console.log(playerRecord(scores))