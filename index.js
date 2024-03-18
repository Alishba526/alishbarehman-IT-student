import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: " enter first number", type: "number", name: "firstNumber" },
    { message: " enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "devision"],
    },
]);
console.log(answer);
//condition statment;
if (answer.operator === "additon") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "devision") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please valid a number");
}
