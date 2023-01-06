const {MongoClient} =require("mongodb");


module.exports={
    selectedDb:{},
    async connect(){
        try{
            const client=await MongoClient.connect(process.env.MONGODB_URL, {useNewUrlParser: true});
           
            this.selectedDb=client.db("products");
        // console.log(this.selectedDb);
        console.log("connection successfull")
        } catch(err){
            console.log(err);
        }
    },
};