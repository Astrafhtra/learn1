const puppeteer = require('puppeteer');
const sleep = (time)=> new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(1);
  },time)
});

async function getLeetCode(){
  // 默认 以无头启动
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  page.setViewport({
    width:1376,
    height:768
  })
  await page.goto('https://leetcode-cn.com/u/yan-bo-yi',{
    waitUntil:'networkidle2'
  });
  // sleep(1000) 等待一秒
  await sleep(1000);
  // evaluate
  const data = await page.evaluate(()=>{
    const rank = document.querySelector('.css-1x529is-RankNumber');
    console.log('这数字来自evaluate');
    const submitHistory = document.querySelectorAll('.css-i7v0bm-StackRow');
    const submitHistoryArray = Array.from(submitHistory);
    const submitHistoryList = submitHistoryArray.map(submitNode=>{
      return submitNode.innerText;
    })
    return{
      rank:rank.innerText,
      submitHistoryList
    };
  });
  console.log('data:',data);
  await page.screenshot({
    path:'./yanboyi.png'
  })
  // browser.close();
}
getLeetCode();