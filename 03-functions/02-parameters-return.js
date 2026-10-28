function calcorder(price, quantity, discountPercent) {
    if (price < 0 || quantity <= 0 || discountPercent < 0 || discountPercent > 100) {
        return null;
    }

    const subtotal = price * quantity;
    const discount = subtotal * discountPercent / 100;
    const finalTotal = subtotal - discount;

    return {
        subtotal: subtotal,
        discount: discount,
        finalTotal: finalTotal
    };
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the Price of the Product: ', function(priceInput) {
    rl.question('Enter the Quantity of the Product: ', function(quantityInput) {
        rl.question('Enter the Discount on the Product: ', function(discountInput) {

            const price = Number(priceInput);
            const quantity = Number(quantityInput);
            const discountPercent = Number(discountInput);

            const order = calcorder(price, quantity, discountPercent);

            if (order === null) {
                console.log('Invalid input');
            } else {
                console.log('Subtotal:', order.subtotal);
                console.log('Discount:', order.discount);
                console.log('Final Total:', order.finalTotal);
            }

            rl.close();
        });
    });
});