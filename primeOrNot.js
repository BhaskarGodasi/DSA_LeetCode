
var num = 5;
if(num == 2){
   console.log(num ,"it is  a prime")
   
}else if(num <= 1){
   return console.log(num , " it is not a prime")
}

for (let i=2;i<num;i++){
    
    if(num%i==0){
        console.log(num ,"it is not a prime")
      break
    }
    
   
}


    console.log(num ,"it is a prime")
