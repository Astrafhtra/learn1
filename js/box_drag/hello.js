const arr = [1,2,3];
arr.map((res)=>console.log(res),arr);
arr.map(function(res){
  console.log(res)
},arr)