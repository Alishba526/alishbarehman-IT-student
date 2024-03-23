#!/usr/bin/env node;

import inquirer from "inquirer";
 const randomNumber=Math.floor(Math.random()*7+1 ); 
 
const answer=await inquirer.prompt([
    {
        name:"userGUESSEDnumber",
        type:"input",
        message:"please guessed a number 1-7"
    }
]);
if(answer.userGUESSEDnumber===randomNumber){
    console.log("😎congtratulation! you winner the game🥳");  

}else{
  console.log(" 😢opps you guess wrong  number sorry you loss the game");
  
}
