// 'aba'
// 判断是否为回文

// function validPalindrome(str){
//   if(!str || typeof str != 'string') return false
//   return str.split("").reverse().join("") === str;
// }

// 大小写
// 空 特殊符号 忽略
// A man, a plan, a canal: Panama 回文串
// /[0-9a-zA-Z]/.test('str')是否为数字和字母
var isValidChar = (c)=>{//abc 123
  return /^[\w]$/.test(c);
}
var isPalindrom = (s)=>{
  if(!isValidChar(s[left])){
    left++;
    continue;
  }
  if(!isValidChar(s[right])){
    right--;
    continue;
  }
  s = s.toLowerCase();//变小写
  let left = 0,right=s.lenght-1;
  while(left < right){
    if(s[left] === s[right]){
      left++;
      right--;
    }else{
      break;
    }
  }
  return right <= left;
}