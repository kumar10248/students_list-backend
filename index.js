const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port=3000;
require('./connection');
const studentRoute= require("./Routes/StudentRoute");
app.get('/',(req,res)=>{

    res.send('Welcome to my server')
})
app.use('/',studentRoute);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);

})



