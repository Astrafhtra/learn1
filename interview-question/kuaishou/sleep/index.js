//1000s
// sleep(3000);
// console.log('helloworld');
//实现功能 + 发散理解

// const sleep = time=>{
//   return new Promise((resolve,reject)=>setTimeout(resolve,time))
// }
// sleep(3000)
//   .then(()=>{
//     console.log('Hello World!')
//   })

// ------------------------------------------------------------------
// function *sleepGenerator(time){
//   yield new Promise((resolve,reject)=>setTimeout(resolve,time))
//   console.log('aaa')
// }
// sleepGenerator(3000)
//   .next()
//   .value
//   .then(()=>{
//     console.log('一千年以后')
//   })
// console.log(sleepGenerator().next().value.then(()=>{
//   console.log('两千年之后')
// }))
// console.log(sleepGenerator().next())


// --------------------------------------------
// function sleep(time){
//   return new Promise((resolve,reject)=>setTimeout(resolve,time))
// }
// async function output(){
//   let out = await sleep(3000);
//   console.log(11);
//   return out;
// }
// output();

// -----------------------------------------------------------------
function sleep(callback,time){
  if(typeof callback === 'function') 
  setTimeout(callback,time);
}
sleep(function(){
  console.log('一万年')
},3000)