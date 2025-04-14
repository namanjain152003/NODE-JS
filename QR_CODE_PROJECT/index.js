import inquirer from 'inquirer';
//var qr = require('qr-image');
import qr from "qr-image";
import fs from"fs";
inquirer
  .prompt([
    /* Pass your questions in here */
    {message:"type your url: ",
        name: "url"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.url
   // console.log(url);
   var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream('qr_code.png'));

   fs.writeFile("url.txt", url ,(err) => {
    if (err) throw err;
    console.log('The file has been saved!')
   });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });