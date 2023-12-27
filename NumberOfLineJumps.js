// // const  sample =[0,3,4,2]
// const sample = [0,5,4,3]

// function NumberOfJumps(sample){
//     // let sum = x2-x1
    
//     //     let k1=v1;
//     //     let k2=v2;

//     let sum =parseInt( sample[2]-sample[0])
//     console.log(sum)
//     if(sample[1]<sample[3]){
//         console.log("hi")
//         return "NO"
//     }
//         let k1=sample[1];
//         let k2=sample[3];
//         for(let i=0;i<=100;i++){
             
//             if((k1*i) - (k2*i)==sum){
//                 console.log(i , k1*i ,k2*i)
//                 return "YES"
//             }
//         }
//         return "NO"
//     }

// console.log(NumberOfJumps(sample))



let sample=[0,2,5,3]
console.log(jumps(sample))
function jumps(arr){
    if(arr[0]>arr[2] || arr[1]<arr[3]){
        return "no"
    }else{
        for(let i=1;i<=1000;i++){
            if((arr[0]+arr[1]*i)-(arr[2]+arr[3]*i)==0){
                return "yes"
            }
        } return "no"
}
}
console.log(jumps(sample))


if(x1>x2 || v1<v2){
    return "no"
}else{
    for(let i=1;i<=1000;i++){
        if((x1+v1*i)-(x2+v2*i)==0){
            return "yes"
        }
    } return "no"
}