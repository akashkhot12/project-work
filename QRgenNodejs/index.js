import inquirer from "inquirer";
inquirer.prompt([{
    message:"type in your URL",
    name:"URL"
},
]).then((answer)=>{
    const url = answer.URL;
}).catch((error)=>{
    if (error.isTtyError) {
        
    }
    else{
        
    }
})