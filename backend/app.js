const path= require("path");
const express= require('express');
const bodyParser= require('body-parser');
const app = express();
const property = require('./models/Property');
const cors= require('cors');
const mongoose=  require("mongoose");
const username= "sandeep";
var PropertyController= require('./controller/PropertyController');


mongoose.connect("mongodb+srv://sandeep:e0eLk7pqN9YdkgDX@cluster0.fbgglgi.mongodb.net/PropertyManagementSystemDB?retryWrites=true&w=majority"
).then(()=>{
  console.log('Connected to database!');
})
.catch(()=>{
  console.log('Connection failed');
});


var corsOptions = {
 " origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,

}
app.use(cors(corsOptions ));
app.use((req,res,next)=>{
  // res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers',
  "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  // res.setHeader("Access-Control-Allow-Methods",
  // "GET, POST,PATCH,PUT,DELETE,OPTIONS")
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/property',PropertyController);


module.exports= app;
