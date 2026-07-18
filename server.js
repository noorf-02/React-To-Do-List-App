const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./DB CONNECTION/dbConnection');
app.use(cors());
const port = process.env.PORT;


app.use(express.json());
connectDB();
app.get('/', (req,res)=>{
    res.send(`The Homepage is running on port ${port}`);
});

app.all('/*path', (req,res)=>{
    res.send('This path does not exist');
})

app.listen(port, ()=>{
    console.log(`The application is running on ${port}`);
});

