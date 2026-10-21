const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number: ',function(input){
    const num = Number(input);
    for(let i=1;i<=10;i++){
        console.log(num,'x',i,'=',num*i);
    rl.close();
    };
});