const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
console.log('\n---XYZ Jewelry---')
console.log('1. Ring')
console.log('2. Earring')
console.log('3. Necklace')
console.log('4. Jewelry Set')
rl.question('Enter which product you want to buy: ',function(input){
    let choice = Number(input);
    switch(choice){
        case 1:
            console.log("You have selected Ring");
            break
        case 2:
            console.log("You have selected Earring");
            break
        case 3:
            console.log("You have selected Necklace");
            break
        case 4:
            console.log("You have selected Jewelry Set");
            break
        default:
            console.log("Invalid Product Selection");
    }
    rl.close();
})