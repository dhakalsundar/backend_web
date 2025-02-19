//Initialization
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const sequelize =  require("./database/db")
//creating a server
const app = express();1

// creating a port
const PORT = process.env.PORT || 5000;

//creating a middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/home',(req,res)=>{
    res.send("<h1>Welcome to home page</h1>");
})

// running on port
app.listen(PORT, () => {
    console.log(`Server is running on ............ port ${PORT}`);
    });