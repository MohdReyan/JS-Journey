// Type-Conversion
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter Product Price: ", function(priceInput){
    rl.question("Enter quantity: ", function(quantityInput){
        
        // Explicit Type Conversion

        // Convert String to Number
        const price = Number(priceInput);
        const quantity = Number(quantityInput);
        
        const total = price+quantity;
        
        console.log('\n---Product Bill---');
        console.log('Price: ',price);
        console.log('Quantity: ',quantity);
        console.log('Total: ',total);

        // Check Data Types
        console.log('\n---Data Types---');
        console.log(typeof priceInput);
        console.log(typeof price);
        console.log(typeof total);
        // Number to String
        const totalText = String(total);
        console.log("\nTotal as String", totalText);
        console.log(typeof totalText);
        
        // String to Boolean
        console.log('\n---Boolean Conversion---')
        console.log(Boolean('Hello'));
        console.log(Boolean(''));

        // Implicit Type conversion
        console.log('\n---Implicit Conversion---');
        console.log('10' + 5);
        console.log('10' - 5);
        rl.close();
    })
})