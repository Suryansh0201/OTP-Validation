const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const userRoutes = require('../Server/routes/userRoutes');

const app = express();
const port = process.env.PORT;

//CORS POLICY
app.use(cors());

//JSON
app.use(express.json());

app.use('/server/user',userRoutes);



app.listen (port,(req,res)=>{
    console.log(`Sever is running at port: ${port}`)
})