//forEach

// it is used to itreate an array it is immutable

// const arr = [1,2,3,4,5,6,7,8]

// arr.forEach((val)=>val+1)

// console.log(arr)


//passsing cb argument

// const ratings = [5, 4, 5];
// let sum = 1;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
//   return sum
// });

// console.log(ratings);


//Map

// sample array of object

const objarr={"employees":[    
    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"name":"John", "email":"john@gmail.com", "age":33},    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
]}  

// second sample arr

const secarr =[2, 3, 4, 5, 35] 

//  const ea=  objarr.employees.map((val)=>({
//    email:val.email,
//    age:val.age
//  }))
//  console.log(ea)

// const secres =secarr.map((val)=>{
//     return val*2
// })

// console.log(secres)


 const data = [
    {
        "id": 1,
        "locationone": "California, United States",
        "idtwo": 2,
        "locationtwo": "Atherton, United States"
    },
    {
        "id": 3,
        "locationone": "London",
        "idtwo": 4,
        "locationtwo": "New Jersey"
    }
]


// const result= data
        // .map(({ id,locationone, idtwo, locationtwo }) => ({
        //   name: locationone,
        //   id: id,
        //     name: locationtwo,
        //     id : idtwo
        
        // }))
        // const result= data.map((val)=>({
        //    val]: val.locationone,
        //    id: val.id
        // }))
        // console.log(result)


        const result= objarr.employees.filter((val)=>{
          return val.age>30
         })
         console.log(result)
