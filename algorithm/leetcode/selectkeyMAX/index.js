// console.log([1,3,2,4,7,0].sort((a,b)=>{return b-a})[0])
function findKthLargest(nums,k){
  if(k <0||k>nums.length-1) return NaN;
  return nums.sort((a,b)=>{return b-a})[k-1]
}
console.log(findKthLargest([1,3,2,4,7,0],2))