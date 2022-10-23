
const request = require("request");
const cheerio = require("cheerio");
const dotenv=require("dotenv");

const express=require("express");


const scraprouter=require("./router/scraprouter");
const app=express();
app.use(express.json());
const mongo=require("./connect");

dotenv.config();
mongo.connect();


app.use("/scrapdata",scraprouter);




let arr=[];
  

request('https://www.flipkart.com/search?q=iphone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', (error,
  response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('._3pLy-c').each((i, el) => {
      const title = $(el).find('._4rR01T').text();
      const price = $(el).find('._30jeq3').text();
      const rating = $(el).find('._3LWZlK').text();
      const imgurl = $(el).find('._396cs4 _3exPp9').attr('src');
      const website = "flipkart";
      arr.push({website, title ,price,rating,imgurl});
    });
    // console.log(arr);
 
}
  else {
    console.log(error)
  }
});

request('https://www.amazon.in/s?k=iphone&crid=58MTH0QRSPCR&sprefix=iphone%2Caps%2C274&ref=nb_sb_noss_1', (error,
  response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('.sg-row').each((i, el) => {
      const title = $(el).find('.a-size-medium').text();
      const rating = $(el).find('.a-icon-alt').text();
      const price = $(el).find('.a-offscreen').text();
      const imgurl = $(el).find('.a-link-normal').attr('href');
      const website = "amazon";
      arr.push({ website,title,rating,price,imgurl});
      
    });
    // console.log(arr)
    
 
}
  else {
    console.log(error)
  }
});


app.listen(process.env.PORT || 8800);


