var ar=[1,1,3,1,2,1,3,3,3,3]

var n=9;
let val=0;

function countJoinSameNum(ar){
   for(let i=0;i<=ar.length-2;i++){
    for(let j=i+1;j<=ar.length-1;j++){
      if(ar[i]==ar[j]){
        val=val+1
        console.log(val, i,j ,"value", ar[i],ar[j])
          ar.splice(j,1)
          
          i++;
         j=i+1
      }
      console.log(i,"i",j,"inthis loop j",ar[j])
   }
    
     
 }
 console.log(val)
 console.log(ar)
}

countJoinSameNum(ar,n)




