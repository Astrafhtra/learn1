// [1,2,3,4,5,6] 2
// 排序 nlogN 已排序
function binarySearch(arr,data){
  var end = arr.length -1,
      start = 0;
  while(start<=end){
    var mid = Math.floor((start+end)/2);
    if(arr[mid] > data){
      end = mid -1;
    }else if(arr[mid] < data){
      start = mid + 1
    }else{
      return mid
    }
  }
}
var arr = [1,2,3,4,5,6];
console.log(binarySearch(arr,2))