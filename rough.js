var ashok = "dada"


function sample(){
    // let m =5
    // ashok = "good boy"
  var  ashok = "good boy"
return ashok
}

console.log(ashok)

console.log(sample())   //4 

console.log(ashok)

// var num=1
// console.log(num)

// if(num>0){
//         let n =10
//         console.log(n,"inside a condition")
   
//     }
//     console.log(n)
   
// for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }


// console.log('stack [1]');

// setTimeout(() => console.log("macro [2]"), 0);

// setTimeout(() => console.log("macro [3]"), 0);

// const p = Promise.resolve();

// for (let i = 0; i < 1; i++) {
//     p.then(() => {
//         setTimeout(() => {
//             console.log('macro [4]');
//             setTimeout(() => console.log("macro [5]"), 0);
//             p.then(() => console.log('micro [6]'));

//         }, 0);

//         console.log("micro [7]");
//     });
// }

// console.log("stack [8]");