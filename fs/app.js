const fs = require ("fs");

let users = "";

fs.readdir("/home", (error, data) =>{

  // Create a string with all of the users
 
  data.forEach((user)=>{
  
    if (user != "pete") {
      users = users + " " + user;
    }
  
  });

 // Write to user.txt file

  fs.appendFile("users.txt", users);

   


});
