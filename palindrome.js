var num =123021;
let str="sameer"


function palindromeForNUmber(num){
    let temp = num;
    
    // var digit =temp.toString().split('').reverse().join('')
 
// var digit=0;
//    while(temp>0){
//         digit =(digit*10)+temp%10
//        temp=parseInt(temp/10)
//     }


// for(; temp>0;){  
//     digit =(digit*10)+temp%10
//     temp=parseInt(temp/10)
//  }

//    console.log(digit)
// if(digit==num){
//     console.log(num , "is a palindrome")
// }else{
//     console.log(num , "is not a palindrome")
// }

}
palindromeForNUmber(num)



function palindromeForString(str){

var nnnn ="";
console.log(typeof(nnnn))
    let newstr = str

    for(let i=newstr.length-1;i>=0;i--){
        let s=newstr[i]
        // console.log((newstr[i]),typeof(newstr[i]))
        nnnn += s
        console.log(nnnn)
    }


    if(nnnn==str){
        console.log(str , "is a palindrome")
    }else{
        console.log(str , "is not a palindrome")
    }
}
palindromeForString(str)
