let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter the Shopping amount: ',function(input){
    let amount = Number(input);
    let discount = 0;
    if(amount>=2000){
        discount = amount*10/100;
        console.log(`Your Discount is Rs.${discount}!`);
    }else{
        console.log('No Discount');
    }
    
    const finalAmount = amount-discount;
    console.log('\n---Shopping Bill---')
    console.log(`Shopping Amount: Rs.${amount}`);
    console.log(`Discount: Rs.${discount}`);
    console.log(`Final Amount: Rs.${finalAmount}`);
    rl.close;
});