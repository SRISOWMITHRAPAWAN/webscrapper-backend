const express=require("express");
const router=express.Router();
const scrapModule=require("../modules/scrapModule");


router.get("/get",scrapModule.getDetails);
router.post("/create",scrapModule.createDetails);

module.exports=router;