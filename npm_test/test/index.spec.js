const expect = require('chai').expect;
const {add} = require('../index');

describe('test-add',()=>{
  // 举出各种例子 方方面面
  it('两数相加应该返回其和',()=>{
    expect(add(0,1)).to.equal(1);
    expect(add(0,12)).to.equal(12);
  })
  it('should return NaN when param invalid',()=>{
    expect(isNaN(add(0,undefined))).to.equal(true);
    expect(isNaN(add(null,undefined))).to.equal(true);
    expect(isNaN(add({},undefined))).to.equal(true);
  })
})