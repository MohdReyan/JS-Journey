const taskTitle = "  Create Promotional Banner  ";
const cleanTask = taskTitle.trim();
console.log(cleanTask)
console.log(cleanTask.toLowerCase());
console.log(cleanTask.includes('Banner'));
const email = "reyanansari@gmail.com"
console.log(email.includes("@"));
console.log(email.endsWith(".com"));
const words = taskTitle.split(" ");
console.log(words);
console.log(words.length);
const newWords = taskTitle.replace('  Create Promotional Banner  ','Most Stylish Watch Brand in India');
console.log(newWords);
// Exercise 1
const title = "   create new product listing   ";
const cleanTitle = title.trim();
const upperTitle = cleanTitle.toUpperCase()
const checkTitle = cleanTitle.includes('PRODUCT');
const countTitle = cleanTitle.length
const reTitle = title.replace("listing" , "banner")
// Exercise 2
const reference = "MARKETING-TASK-2026-001";
const startref = reference.startsWith("MARKETING")
const endref = reference.endsWith("MARKETING")
const splitref = reference.split("-")
console.log("\n---Exercise 1---")
console.log("\nRemoving WhiteSpaces :",cleanTitle)
console.log("\nUppercase :",upperTitle)
console.log("\nCheck Title have PRODUCT or not",checkTitle)
console.log("\nCount Number of words in Title :", countTitle)
console.log("\nChanging listing to banner", reTitle)
console.log("\n---Exercise 2---")
console.log("\nSearching if Starts with MARKETING",startref)
console.log("\nSearching if Ends with MARKETING",endref)
console.log("\nSpliting reference using -",splitref)
for(let i = 0;i < splitref.length;i++){
    console.log("\nDisplay the department, task type, year and serial number separately :",splitref[i])
};