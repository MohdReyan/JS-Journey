// Product Order Calculator

const productName = "Silver Ring";
const unitPrice = 1299;
const discountPercent = 10;

let quantity = 2;

console.log("Initial Quantity:", quantity);

// Customer adds one more item
quantity = quantity + 1;

const subtotal = unitPrice * quantity;
const discount = subtotal * discountPercent / 100;
const finalTotal = subtotal - discount;

console.log("\n----- ORDER SUMMARY -----");
console.log("Product:", productName);
console.log("Unit Price:", unitPrice);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final Total:", finalTotal);