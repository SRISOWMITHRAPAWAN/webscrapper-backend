const {MongoClient} =require("mongodb");


module.exports={
    selecteddb:{},
    async connect(){
        try{
            const client=await MongoClient.connect(process.env.MONGODB_URL, { useUnifiedTopology: true });
           
            this.selecteddb=client.db("products");
        // console.log(this.selectedDb);
        console.log("connection successfull")
        } catch(err){
            console.log(err);
        }
    },
};