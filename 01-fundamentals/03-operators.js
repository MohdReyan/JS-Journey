const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the first number :', function(firstInput){
    rl.question('Enter the second number :', function(secondInput){
        const num1 = Number(firstInput);
        const num2 = Number(secondInput);
        //Arithmetic Operators
        console.log('\nArithmetic Operation');
        console.log('Addition :',num1,'+',num2,'=',num1+num2);
        console.log('Subtraction:',num1,'-',num2,'=',num1-num2);
        console.log('Multiplication :',num1,'x',num2,'=',num1*num2);
        console.log('Divison :',num1,'÷',num2,'=',num1/num2);
        console.log("Remainder :", num1 % num2);
         console.log("Power :", num1 ** num2);

        //Comparison Operators
        console.log('\nComparison Operators')
        console.log("Both are Equal  :",num1 === num2);
        console.log("First is Greater Than or Equal  :",num1 >= num2);
        console.log("First is Less Than or Equal :",num1 <= num2);
        console.log("First is Greater :",num1 > num2);
        console.log("First is Less :",num1 < num2);
        console.log("Both are Not Equal :",num1 != num2);
        
        //Logical Operators
        console.log('\nLogical Operators')
        console.log('Both are positive :', num1>0 && num2>0);
        console.log('Atleast one is positive :', num1>0 || num2>0);
        console.log('First number is not positive :', !(num1>0));

        rl.close;

    });
});