二分查找 binary_search
  加速查找 
  前提条件是啥？  有序数组，折半排序，可以将查找的时间复杂度，从N => log2N
  [1,2,10,3,5,7,9].sort((a,b)=>a-b)
  [1,2,3,5,,7,9,10] 6


   JavaScript heap out of memory 内存溢出
   什么出问题？ 一亿左右的大数相加 CPU 
   ？ arr[] 物理空间 下标的引用
   0 - 一亿 for 没有问题
   mid = (min + max) / 2
   
