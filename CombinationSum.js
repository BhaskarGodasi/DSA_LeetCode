const nums =[1,2,3];
// const nums = [9]
const target = 4;

function combinations(nums, target){
  console.log(nums)
    if(nums.length==0 || nums >target){
        console.log("false")
        return 0
    }
    let value=1
   
    for(let i=0;i<=nums.length-1;i++){
        let sum=0
        
              if(nums[i]<target){
                for(let j=0;j<=value;j++){
                    sum=sum+nums[j]
                      if(sum==target){
                        break;
                      }else{
                        j--
                      }
                }

                value++
              }
    }

    console.log(value)

}
combinations(nums,target)