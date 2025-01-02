const mongoose = require('mongoose');
require('dotenv').config();

const url=process.env.MONGO_URI||"mongodb://localhost:27017/StudentDB";
mongoose.connect(url).then(()=>{console.log("Connection Created Successfully")}).catch(error=>console.error(error));
module.exports=mongoose;
