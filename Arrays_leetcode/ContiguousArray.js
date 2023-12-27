const ArrInput = [
  0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0,
  1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1,
  0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1,
];

var findMaxLength = function (nums) {
  let len = 0;
  let firstVal = nums[0];
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      console.log(i, j);
      if (firstVal == 0) {
        if (nums[i] == 0 && nums[j] == 1) {
          //  nums.splice(i,1)
          nums.splice(j, 1);
          len += 2;

          // i--
          j--;
          break;
        }
      } else {
        if (nums[i] == 1 && nums[j] == 0) {
          // nums.splice(i,1)
          nums.splice(j, 1);

          len += 2;
          // i--
          j--;
          break;
        }
      }
    }
  }

  return len;
};

console.log(findMaxLength(ArrInput));
