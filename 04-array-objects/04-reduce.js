// const products = [
    // { SKU: "R101", title: "Silver Ring", price: 1200, inventory: 15 },
    // { SKU: "N102", title: "Silver Necklace", price: 2500, inventory: 0 },
    // { SKU: "B103", title: "Silver Bracelet", price: 1800, inventory: 8 },
    // { SKU: "P104", title: "Silver Pendant", price: 900, inventory: 20 },
    // { SKU: "E105", title: "Silver Earrings", price: 1500, inventory: 0 }
// ];
// 
// const totalValue = products.reduce((total,product) => {return total + (product.price*product.inventory)},0);
// console.log("Total Inventory cost: ",totalValue)

const sales = [500, 1200, 800, 1500, 1000];
const totalvalue = sales.reduce((total,sale)=>{return total+sale},0);
console.log(totalvalue)