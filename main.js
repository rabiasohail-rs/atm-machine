import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("welcome to atm machine");
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin code",
        type: "number"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    console.log("current account balance is: " + myBalance);
    let operationAns = await inquirer.prompt([{
            name: "operation",
            mesage: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        },
    ]);
    console.log("operationAnswer");
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficent balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("withdraw successfully" + amountAns.amount);
            console.log("your remaining balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your account balance is:" + myBalance);
    }
}
else {
    console.log("incorrect pin number,try again");
}
