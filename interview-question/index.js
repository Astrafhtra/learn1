// function Person(name){
//   this.name = name
// }
// let p = new Person('wn')
// 1. p.__proto__ = Person.prototype(实例的隐式原型链等于构造函数的显示原型链)
// 2. Person.__proto__ = Function.prototype(FUnction的隐式原型链object)

// var foo = {},
//     F = function(){};
    
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'

// console.log(foo.a)//valA
// console.log(foo.b)//undefined
// console.log(F.a)//valA(object的值向下传递Function)

// ------------------------------------------------
// 构造函数是不需要返回值的,使用new来创建对象时,如果return返回值是非对象类型,会忽略返回值,
// 如果return返回值是对象,则返回该对象,若return null 也会忽略返回值
// function Person(name){
//   this.name = name
//   return {}
// }
// let p = new Person('wn')
// console.log(p)//{}

// -----------------------------------------------
// function Person(name){
//   this.name = name
// }
// function Student(){

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student

// let s = new Student('wn')
// console.log(s instanceof Person)//true


// ----------------------------------------
// 因为let每次循环都会生成一个封闭作用域和setTimeout绑定,var每次循环会覆盖掉上一次的作用域
// for(var i=0;i<10;i++){
//   setTimeout(()=>{
//     console.log(i)//十个10
//   },0)
// }
// 闭包
// for(var i=0;i<10;i++){
//   (function(i){
//     setTimeout(()=>{
//       console.log(i)//0,1.....9
//     },0)
//   })(i)
// }

// --------------------------------------------
// var myArry = [1,2,3,4,5,6]
// for(let index of myArry){
//   console.log(index)//1,2,3,4,5,6
// }
// for(let index in myArry){
//   console.log(index)//0,1....5
//   console.log(myArry[index])//1,2,3,4,5,6
// }
// Array.prototype.method = function(){
//   console.log('wn')
// }

// for in 
// 1. index索引为字符串型的数字,不能直接进行几何运算
// 2. 遍历顺序有可能不是按照实际数组的内部顺序进行排序的
// 3. 使用for in会遍历数组所有可枚举属性,包括原型链,所以for in更适合遍历对象

// for of
// 1. for in遍历的是数组的索引,for of 遍历的是数组的元素
// 2. for of遍历的只是数组的元素,而不包括原型属性和索引

// -----------------------------------------------------
let gArr = [1,2,[3,4],5,[2,7,[3,9]]]
let oArr = [1,2,3,4,5,2,7,3,9]
// function outputArr(arr){
//   let res = []
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//       res = res.concat(outputArr(arr[i]))
//     }else{
//       res.push(arr[i])
//     }
//   }
//   return res
// }
function outputArr(arr){
  return arr.reduce(function(pre,item){
    return pre.concat(Array.isArray(item)?outputArr(item):item)
  },[])
}
console.log(outputArr(gArr))