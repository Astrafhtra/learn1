
有一段字符

如果字符超过140字符，返回false
如果是空字符串，返回false
以#开始
每个单词都大写


"How are you".split(' ').map((w)=>{ return w.charAt(0).toUpperCase() + w.slice(1)})
将单词字符串变成单词数组 split(' ') //分割单词
数组里每个元素都是单词，首字母要大写 map遍历每个元素，使用箭头函数
每个单词 charAt(0) 第一个字符 toUpperCase()
除第一个字符 其余的呢？ slice(1)