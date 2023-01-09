const mongo=require("../connect");


module.exports.getDetails=async (req,res,next)=>{
   try{
   const scrapedData=await mongo.selecteddb
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
   const insertedResponse= await mongo.selecteddb
   .collection("scrapdata")
   .insertOne(req.body);
res.send(insertedResponse);  
}catch(err){
    console.error(err);
    res.status(500).send(err);
}
};
