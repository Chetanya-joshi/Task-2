const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./Schema');
const bodyParser = require('body-parser')
require('./Config');
require('dotenv').config({path : './.env'})
const app = express();
app.use(cors());
app.use(bodyParser.json());




app.listen(3001 , ()=>{
    console.log("Server is Running")
})



app.get("/" , (req,res)=>{
    User.find({})
    .then(user => res.json(user))
    .catch(err => console.log(err));
})


app.get("/getUser/:id" , (req ,res)=>{
    const id = req.params.id;
    User.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => console.log(err));
})


app.post("/createuser" , (req,res)=>{
User.create({name , email , age}=req.body)
.then((user)=>{
   res.json(user); 
}).catch(err =>{
    res.json(err);
})
})



app.put("/updateUser/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    User.findByIdAndUpdate(id, { name, email, age }, { new: true })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      });
  });