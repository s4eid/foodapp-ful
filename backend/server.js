const express=require('express');
const app =express();
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors');
app.use(cors());
app.use(express.json());


//connect to mongo 
const uri=process.env.MONGOO;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
const connection=mongoose.connection;
connection.once('open',()=>console.log('Mongoo Connected'))


const foodRout=require('./routes/food');
app.use('/food',foodRout);



app.get('/',(req,res)=>{
    res.send('hellooo')
})















const port=process.env.PORT||3030;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)});