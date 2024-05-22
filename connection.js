const mongoose = require('mongoose');
const url=process.env.MONGO_URL||"mongodb://localhost:27017/semester";
mongoose.connect(url).then(()=>{console.log("Connection Created Successfully")}).catch(error=>console.error(error));
module.exports=mongoose;
