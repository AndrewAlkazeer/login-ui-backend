const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const env = require('dotenv/config');
const path = require('path');
//const MongoClient = require('mongodb').MongoClient;
//const userSchema = require('./Mongoose');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// changed path to public but it should be back to build

// Serve static files from the React frontend app

// app.use(express.static(path.join(__dirname, 'client/build')))
// // Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })

    
    // Exprees will serve up production assets
  
  //  app.use(express.static(__dirname + '/client/build'));
  
    app.use(express.static(__dirname + '/client/build'));
    // Express serve up index.html file if it doesn't recognize route
    
    app.get('/', (req, res) => {
      res.sendFile(__dirname + "/client/public/index.html");
    });
 
  
const mongoose = require('mongoose');

//User Schema
const userSchema = mongoose.Schema;
var template = new userSchema({
    Username: String,
    Password: String,
    Email: String
    });
    const modelClass = mongoose.model('userInfo', template);

    //Message Schema
const messageSchema = mongoose.Schema;
var temp = new messageSchema({
  Message: String
});
const modelClassMessage = mongoose.model('message', temp);

app.post('/api/login', (req, res) => {
    // Open Mongoose Connection in the Server
    mongoose.connect(process.env.URI, { useNewUrlParser: true }, (err)=>{
        if(err) throw err;
      });

      modelClass.find({Username: req.body.username, Password: req.body.password}, (err, result)=>{
    if(err) {console.log('Error finding in the database')};
    if(!result.length){
      res.json({Status: 'Username or Password is incorrect!'})
      //  console.log(result.length)
    }
    else if(result.length){
    // res.json(result);
    res.redirect('/home');
    
    }
});

// redirect will have success to redirecting but crashing the back end server! (Not Fixed Yet)
// res.redirect('/home');


//creating a new comment to commit
});

app.post('/api/signup', (req, res) => {
    // Open Mongoose Connection in the Server
    mongoose.connect(process.env.URI, { useNewUrlParser: true }, (err)=>{
        if(err) throw err;
      });

    var data = new modelClass({
        Username: req.body.username,
        Password: req.body.password,
        Email: req.body.email
       });
    
// Fix Registered users cant signup

modelClass.find({Username: req.body.username}, (err, result) => {
  if(err){console.log('Error finding in database')}
  if(result.length){
    res.json({Status: "You are already registered in the database"})
  } else {

  data.save((err) => {
    if(err) console.log('Error Saving to the database');
   
})
// res.json({Status: "You are now registered!", Data: data});
res.redirect('/home');
  }
});

})    

app.post('/posts', (req, res) => {

// Open Mongoose Connection in the Server
mongoose.connect(process.env.URI, { useNewUrlParser: true }, (err)=>{
  if(err) throw err;
});

if(req.body.message !== undefined){
var dataMsg = new modelClassMessage({
  Message: req.body.message
})

dataMsg.save((err) => {
  if(err) console.log('Error saving to the database!');
});
return res.redirect('/home');
}

modelClassMessage.find({}, (err, result) => {
  if(err) console.log('Error finding in the database');

  res.json(result);

  
})

})

app.post('/users', (req, res) => {

// Open Mongoose Connection in the Server
mongoose.connect(process.env.URI, { useNewUrlParser: true }, (err)=>{
  if(err) throw err;
});

modelClass.find({}, (err, result) => {
if(err) console.log('Error reading the database');

res.json(result);

});

});




app.listen(port, () => console.log('Server is listening...'));