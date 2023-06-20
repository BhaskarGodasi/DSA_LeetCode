var arr1 = [{"id": 1,"x": 6}]
var arr2 =[{"id": 1,"x": 15,"y": 7},{"id": 2,"x": 9,"y": 18}]
var joinedArray = [];

MergingArrayWithId(arr1, arr2);

function MergingArrayWithId(arr1, arr2) {
  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr2.length - 1; j++) {
      if (arr1[i].id == arr2[j].id) {
        let property = arr1[i];

        let property2 = arr2[j];

        for (const key1 in property) {

            for (const key2 in property2) {
               if(key1==key2){
                property[key1] = property2[key2]
               }
               else{
                property[`${key2}`]=property2[key2]
               }
              }
              
        }
        
        
        
        arr2.splice(j, 1);
      }
    }

    joinedArray.push(arr1[i]);
  }

  for (let i = 0; i <= arr2.length - 1; i++) {
    joinedArray.push(arr2[i]);
  }

  joinedArray.sort((a,b)=>{
    return a.id-b.id
})


  console.log(joinedArray);
}
