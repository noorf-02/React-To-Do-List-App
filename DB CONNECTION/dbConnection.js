const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.URL).then(()=>{
        console.log("DB IS CONNECTED SUCCESSFULY")
    }).catch(err=>{
        console.log("Error in DB connection");
    })
}

module.exports = connectDB;