//位移运算符（右移）
// 二进制 0000 1011
// 右移一位 0101（5）
// 左移一位 0001 0110 （22）
// 利用位移运算， /2 *2的效果
// console.log(11 >> 1);
// console.log(11 << 1);


// 猛哥给蜗牛买香蕉
//  N piles of bananas 每挂香蕉上的香蕉数不一样
// [4,8,11,23], H小时内吃完 一小时吃几根香蕉 一个小时吃mid根香蕉，一次只能吃一挂 一小时内吃最少吃几根，可以在H小时内吃完

/**
 * @desc  最少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} piles
 * @param {number} H
 * @param {number}
 */


function minEatingSpeed (piles,H) {
  let lo = 1;
  hi = Math.max(...piles);
  // 二分查找，一直丢一半
  while(lo <= hi){
    // lo++;
    let mid = lo +((hi-lo) >>1);
    if(canEatAllBananas(piles,H,mid)){
      hi = mid -1;
    }else{
      // 没有吃完 吃完？
      // 小的一半值没有意义
      lo = mid +1;
    }
  }
  return lo;
}

/**
 * @desc 判断是否能吃完香蕉
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid
 * @return {boolean} 
 */
// Boolean
function canEatAllBananas(piles,H,mid){
  let h = 0;
  // mid,余下的吃完
  for(let pile of piles){
    h +=Math.ceil(pile / mid);
  }
  return h <= H;
}
let piles = [3, 6, 7, 11];
// console.log(canEatAllBananas(piles, 8, 6));
console.log(minEatingSpeed(piles, 8));
// H小时内吃完
// 最小的一个数