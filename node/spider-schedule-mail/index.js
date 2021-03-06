const superagent = require('superagent');
const cheerio = require('cheerio');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const local = 'jiangxi/qingshanhu-district';
const weatherUrl = `https://tianqi.moji.com/weather/china/${local}`;
const getOneData = function(){
  return new Promise((resolve,reject)=>{
    superagent.get('http://wufazhuce.com/')
    .end((err,res)=>{
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      let selectItem = $("#carousel-one .carousel-inner .item");
      let todayOne = selectItem[0];
      let todayOneData = {
        type: $(todayOne)
          .find(".fp-one-imagen-footer")
          .text()
          .replace(/\s/g, ''),
        text: $(todayOne)
          .find(".fp-one-cita")
          .text()
          .replace(/\s/g, '')
      };
      resolve(todayOneData)
    })
  })
}
const getWeatherTips = function(){
  return new Promise((resolve,reject)=>{
    superagent.get(weatherUrl)
    .end((err,res)=>{
      if(err){
        reject(err)
      }
      const $ = cheerio.load(res.text);
      const $weatherTip = $('.wea_tips');
      const weatherTip = $weatherTip.find('em').text();
      let threeDaysData = [];
      $('.forecast .days').each((index,dayNode)=>{
        const $singleDay = $(dayNode).find('li');
        const day = $singleDay.eq(0).text().trim();
        const weatherText = $singleDay.eq(1).text().trim();
        const temperature = $singleDay.eq(2).text().trim();
        threeDaysData.push({
          day,weatherText,temperature
        })
      })
      resolve({weatherTip,threeDaysData});
    })
  })
}
getWeatherTips()
.then(tip=>{
  console.log(tip);
})

// 复合数据
function getSpiderData(){
  const htmlData = {};
  Promise.all([getWeatherTips(),getOneData()])
  .then(spiderArr=>{
    // spoderArr 数组 由promise resolve 出来的数组组成
    const [weatherData,oneData] = spiderArr;
    htmlData['weatherTip'] = weatherData.weatherTip;
    console.log(weatherData,oneData);
    sendEmail(htmlData);
  })
}
function sendEmail(htmlData){
  const template = ejs.compile(
    fs.readFileSync(path.resolve(__dirname,'email.ejs'),'utf-8'),
  )
  const html = template(htmlData);
  // 发送邮件
  let transporter = nodemailer.createTransport({
    service:'qq',
    port:465,//smtp 端口
    secureConnection:true,
    auth:{
      user:'1935889830@qq.com',
      pass:'qzzjqfcjouslfcag'
    }
  })
  transporter.sendMail(
    {
    from:'皮卡丘<1935889830@qq.com>',
    to:'1710643285@qq.com',
    subject:'邮件',
    html:html
    },
    (err,info)=>{
      if(err){
        console.log('err',err);
        return false;
      }
      console.log('info',info);
    })
}
getSpiderData();