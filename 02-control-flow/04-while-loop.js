const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', function(input) {
    const num = Number(input); 
    let i = 1;
    let factorial = 1;
    let series = [];
    
    while (i <= num) {
        factorial = i * factorial;
        series.push(factorial);
        i++;
    }
    
    let k = 0;
    while (k < series.length) { 
        console.log(series[k]);
        k++;
    }
    
    rl.close();
});
