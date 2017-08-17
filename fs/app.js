const fs = require ("fs");

fs.readdir("/home", (error, data) =>{

    console.log (data);

});
