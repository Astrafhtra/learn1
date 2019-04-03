const people =[
  {age:46,name:'roger'},
  {age:99,name:'lili'},
  {age:266,name:'lisa'},
  {age:76,name:'white'},
]
var orderPeople = function(people){
  return people.sort((a,b)=>{
    return a.age-b.age>0;
  })
}
console.log(orderPeople(people));