#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; //dollar
let myPin = 6789;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "enter your correct pin code ......💯",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code✅");
}
let operationAns = await inquirer.prompt([
    { name: "operation",
        message: "please select option.....❓",
        choices: ["withdraw", "check balance"],
        type: "list",
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        { name: "amount",
            message: "enter your amount ...💲💱💱 ",
            type: "number",
        }
    ]);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is:" + myBalance);
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is: " + myBalance);
}
else {
    console.log("incorrect pin number");
}
