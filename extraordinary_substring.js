let str1= 'bdh'
let result = str1.length
const allSubStringValues =[]
main()

function main(){
    for (let i=0;i<+str1.length;i++){
        let val= assigningValue(str1[i])
        // console.log(val,"val for array")
        allSubStringValues.push(val)
     }

     extraordinarySubstr(2)
    //  console.log(allSubStringValues)
     console.log(result)
}


function assigningValue(i){
    switch(i){
        case 'a':
        case 'b':
            return 1;
        case 'c':
        case 'd':
        case 'e':
            return 2;
        case 'f':
        case 'g':
        case 'h':
            return 3;
        case 'i':
        case 'j':
        case 'k':
            return 4;
        case 'l':
        case 'm':
        case 'n':
            return 5;
        case 'o':
        case 'p':
        case 'q':
            return 6;
        case 'r':
        case 's':
        case 't':
            return 7;
        case 'u':
        case 'v':
        case 'w':
            return 8;
        case 'x':
        case 'y':
        case 'z':
            return 9;
        default:
            return 0;
       
    }
}


function extraordinarySubstr(substringvalue){
    if (substringvalue > str1.length){
        // console.log(substringvalue, str1.length)
        return 
    }
    for(let i=0;i<allSubStringValues.length-1;i++){
        let sum = 0
        let counter =0
          for(let j=i;j<=substringvalue;j++){
               counter++
               sum +=allSubStringValues[j]
            //    console.log(sum , "itration",i)
               if(counter==substringvalue){
                i++
               }
          }
         

          if(sum%substringvalue==0){
            // console.log(result,"how many times entireing",i,substringvalue)
              result++
          }
    }

    // console.log(allSubStringValues,"in itration",result)
    

    return extraordinarySubstr(substringvalue+1)
}




