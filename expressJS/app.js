
const express = require ("express");
const app = express();
const fs = require ("fs");

let allUsers = "";

app.get ("/ha", (req, res)=>{

  fs.readdir("/home", (err, data)=>{
    data.forEach((user)=>{
      if (user !== "pete"){
         allUsers = allUsers + " " + user; 
      } 
    });

    res.send(allUsers);
  });

});


app.listen (3613);
