const fs = require('fs');
fs.writeFile('demo.txt',"hi hello",function(err){
  if(err){
    console.log(err);
  } else {
    console.log("success");
  }
});

fs.appendFile('demo.txt',"this is text",function(err){
  if(err){
    console.log(err);
  } else {
    console.log("success second with append");
  }
});
