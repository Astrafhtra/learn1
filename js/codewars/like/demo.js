// 1.跟PhoneNumber 一样的解法 字符串模式 数组遍历
// 2.多种模式情况 [下标] 
// nums.length

function likes(names){
  // 规则模板
  var templates = ['no one like this' , '{name} like this' , '{name} and {name} like this',
  '{name},{name} and {name} like this','{name},{name} and {n} oters like this'
];
var idx = Math.min(names.length,4);
return templates[idx].replace(/{name}|{n}/g, function(val){
  return val === '{name}'?names.shift():names.length;
})
}

console.log(likes([]));
console.log(likes(['寡姐']));
console.log(likes(['寡姐','雷神']));
console.log(likes(['寡姐','雷神','浩克']));
console.log(likes(['寡姐','雷神','浩克','队长']));

