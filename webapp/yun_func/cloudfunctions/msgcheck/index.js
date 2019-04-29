// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')

let appid = 'wx0cdb69dde7630671';
let secret = '0be73c7e0f4bbe554d3c6ba96cae9c6a';

let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token=';
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid +'&secret=' + secret;
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx0cdb69dde7630671&secret=0be73c7e0f4bbe554d3c6ba96cae9c6a
// 云函数入口函数
exports.main = async (event, context) => {
  // 令牌许可
  let tokenResponse = await got(tokenUrl);
  let token = JSON.parse(tokenResponse.body).access_token;
  console.log(token);
  let checkResponse = await got(msgCheckUrl + token,{
    body: JSON.stringify({
      content: event.text
    })
  })
  console.log(tokenResponse);
  return checkResponse.body;
  return event.a + event.b;
}