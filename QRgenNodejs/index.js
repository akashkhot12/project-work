import inquirer from "inquirer";
import qr from "qr-image"

inquirer.prompt([{
    message:"type in your URL",
    name:"URL"
},
]).then((answer)=>{
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(require("fs").createWriteStream("qr-immg.png"));
}).catch((error)=>{
    if (error.isTtyError) {
        
    }
    else{

    }
})