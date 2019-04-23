// S 5
// A 3
// B 2
// C 1
// let key 计算函数
 
let strategies = {
  'S':function(salary){
    return salary * 5;
  },
  'A': function(salary){
    return salary * 3;
  },
  'B': function(salary){
    return salary * 2;
  },
  'C': function(salary){
    return salary * 1;
  }
}
function calculate(level, salary){
  return strategies[level](salary);
}
console.log(calculate('S',100000))
