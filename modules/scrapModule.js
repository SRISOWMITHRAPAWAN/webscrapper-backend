const mongo=require("../connect");

db=mongo.selecteddb
module.exports.getDetails=async (req,res,next)=>{
   try{
   const scrapedData=await db
    .collection("scrapdata")
    .find({})
    .toArray();
    res.send(scrapedData);
   }catch(err){
    console.log(err)
    res.status(500).send(err);
   }
// res.send({
//     "name":"RRR",
//     "AGE":25
// })
};

module.exports.createDetails=async (req,res,next)=>{
  try{
   const insertedResponse= await db
   .collection("scrapdata")
   .insertOne(req.body);
res.send(insertedResponse);  
}catch(err){
    console.error(err);
    res.status(500).send(err);
}
};
