const express = require('express');
const { mongoose } = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/routes');

const app = express();
dotenv.config();

//MIDDLEWARE
app.use(cors());

//MONGO CONNECT
mongoose.connect(process.env.MONGO_URL)
.then(()=>{ 
    console.log("Connection to DB is succcessful")   
})
.catch(()=>{    
    console.log(err)    
});


app.use('/api',router)

app.listen(process.env.PORT,()=>{
    console.log(`Connected at port ${process.env.PORT}`)
});