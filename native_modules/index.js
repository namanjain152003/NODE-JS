const fs = require("fs")
/*fs.writeFile("Message.txt", "hello from nodejs" ,(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); */

  fs.readFile('native_modules/Message.txt', "utf8" ,(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 