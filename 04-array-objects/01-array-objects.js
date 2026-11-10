const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
let product = [
    {
        SKU: 'RN001',
        Title: 'Silver Ring',
        category: 'Ring',
        MRP: 2999,
        price: 1999,
        inventory: 12
    },
    {
        SKU: 'BR001',
        Title: 'Silver Bracelet',
        category: 'Bracelet',
        MRP: 5999,
        price: 2499,
        inventory: 12
    },
    {
        SKU: 'PS001',
        Title: 'Silver Pendant',
        category: 'Pendant',
        MRP: 5999,
        price: 2999,
        inventory: 12
    },
    {
        SKU: 'AK001',
        Title: 'Silver Anklet',
        category: 'Anklet',
        MRP: 4999,
        price: 2299,
        inventory: 12
    },
]

function PM(){
    console.log('\n---Product Management---')
    console.log('\n')
    rl.question('choose \n1.View Product \n2.Add Product \n3.Delete Product \n4.Exit \nEnter you value:', function(Input){
        choice = Number(Input)
        if (choice=== 1){
            console.log('\n------Current Products------')
            console.table(product)
            return PM();
        }else if (choice === 2){
            return addProduct()
        }else if(choice === 3){
            return deleteProduct()
        }
        else if(choice === 4){
            console.log('Goodbye! ')
            process.exit()
        }
        else{
            console.log('invalid choice');
            return PM();
        }
    });
}
function addProduct(){
 rl.question('Enter the SKU :',function(SKU){
    rl.question('Enter the Title :', function(Title){
        rl.question('Enter the Category :', function(category){
            rl.question('Enter the MRP',function(MRP){
                rl.question('Enter the price', function(price){
                    rl.question('Enter the inventory', function(inventory){
                        let mrp = Number(MRP);
                        let Price = Number(price);
                        let Inventory = Number(inventory);
                        product.push({
                            SKU: SKU,
                            Title: Title,
                            category: category,
                            MRP: mrp,
                            price: Price,
                            inventory: Inventory
                        });
                    console.log('Product added successfully')
                    return PM()
                    })
                })
            })            
        })
    })
 })   
}
function deleteProduct(){
    rl.question('Do you want to delete(yes/no): ',function(Input1){
        
            if(Input1=='yes'){
                rl.question('Enter The SKU: ', function(Input2){
                    product = product.filter(item => item.SKU !== Input2);
                    return deleteProduct()
                })
            }else{
                return PM();
            }
    })
}

PM();