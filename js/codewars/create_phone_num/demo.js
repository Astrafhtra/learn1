// [1,2,3,4,5,6,7,8,9,0,]
// 输出格式 (123) 456-7890
// const createPhoneNumber = (arr) => "(" + arr[0] + arr [1] +arr[2] + ")" +" "+ arr[3] + arr[4] 
// + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9];

// function createPhoneNumber(numbers){
//   var phoneFormat="(xxx) xxx-xxxx";
//   numbers.forEach(d=>{
//       phoneFormat=phoneFormat.replace('x',d);
//   });
//   return phoneFormat;
// }


function createPhoneNumber(numbers){
  var phoneFormat="(xxx) xxx-xxxx";
  for(var i =0;i<numbers.length;i++){
    phoneFormat=phoneFormat.replace('x',numbers[i]); 
  }
  return phoneFormat;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0,]))
