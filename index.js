const express=require('express');
const mailRoutes = require('./routes/mailRoutes');
const cors=require('cors');
const app=express();

require("dotenv").config();

app.use(cors());
app.use(express.json())

app.use('/api/v1',mailRoutes)

app.get('/',(req,res)=>{
    res.send({message:"welcome to Internship task"});
})

const port=process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})