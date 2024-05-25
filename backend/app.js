const express=require('express');
const morgan=require('morgan');
require('dotenv').config();
require('./DB/connection')
 const cors=require('cors')
const userRoute=require('./Routes/userRoutes');

const PORT=process.env.PORT;
const app=express();
app.use(morgan('dev'));
app.use(cors());

app.use('/api',userRoute)


app.listen(PORT,()=>{
    console.log(`${PORT} is up and running`);
})