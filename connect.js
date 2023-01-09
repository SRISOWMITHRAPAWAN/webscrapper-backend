const {MongoClient} =require("mongodb");


module.exports={
    selecteddb:{},
    async connect(){
        try{
            const client=await MongoClient.connect(process.env.MONGODB_URL)

                this.selecteddb=client.db("products");
        
           
           
        // console.log(this.selectedDb);
        console.log("connection successfull")
        } catch(err){
            console.log(err);
        }
    },
};