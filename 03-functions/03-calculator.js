function calculator(num1,operator,num2){
    switch (operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2===0){
                return 'cannot divide by zero'
            }
            return num1 / num2;
        default:
            return 'Invalid operator';
    };
};
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter First Number :', function(firstInput){
    rl.question('Enter Operator(+,-,*,/) :', function(operator){
        rl.question('Enter Second Number :', function(secondInput){
            const num1 = Number(firstInput);
            const num2 = Number(secondInput);

            const result = calculator(num1,operator,num2);

            console.log('Result', result);

            rl.close();
        })
    })
})