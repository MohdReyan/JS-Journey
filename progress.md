# JavaScript Journey — Progress Log

## Day 1 — 20 October 2026

**Focus:** JavaScript Fundamentals

### Topics Covered

- [x] **Variables**
  - Variable declaration and initialization
  - `let` vs `const`
  - Reassignment
  - Practical product order calculator

- [x] **Data Types**
  - Primitive types: Number, String, Boolean, Undefined, Null, BigInt, and Symbol
  - Objects, arrays, and functions
  - Using `typeof`
  - Understanding why `typeof null` returns `"object"`

- [x] **Operators**
  - Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**`
  - Comparison operators: `>`, `<`, `>=`, `<=`, `===`, `!==`
  - Logical operators: `&&`, `||`, `!`

- [x] **Type Conversion**
  - Explicit conversion using `Number()`, `String()`, and `Boolean()`
  - Implicit type conversion
  - String concatenation vs numeric arithmetic
  - Receiving runtime input using Node.js `readline`

### Practical Files

- `01-fundamentals/01-variables.js`
- `01-fundamentals/02-datatypes.js`
- `01-fundamentals/03-operators.js`
- `01-fundamentals/04-type-conversion.js`

### Linux and Git Skills Practiced

- Navigating directories using `cd`
- Creating directories and files using `mkdir` and `touch`
- Renaming files using `mv`
- Checking repository status using `git status`
- Staging, committing, and pushing changes
- Inspecting commit history using `git log`
- Correcting commit messages through interactive rebase

### Important Lessons

- Variables and data types are related but different concepts.
- JavaScript is dynamically typed.
- Terminal input received as text may need explicit conversion before calculations.
- Implicit conversion can produce unexpected results if the data types are not understood.
- Git commits should have clear, descriptive messages.

### Next Session

**Control Flow**

Planned topics:
- Conditional statements (`if`, `else if`, `else`)
- `switch`
- Loops (`for`, `while`, `do...while`)
- Practical decision-making programs

---

*Day 1 complete: Fundamentals practiced through code, terminal execution, and GitHub version control.*


# JavaScript Journey — Progress Log

## Day 2 — Control Flow

**Learning period:** 21–23 October 2026

**Focus:** Conditional statements, loops, and runtime input.

### Topics Covered

- [x] **If-Else Statements**

  - Making decisions using `if` and `else`
  - Evaluating conditions with comparison operators
  - Applying conditions to a shopping discount calculator

- [x] **Switch Statements**

  - Using `switch`, `case`, `break`, and `default`
  - Building a product selection menu
  - Handling invalid menu selections

- [x] **For Loop**

  - Loop initialization, condition, and increment
  - Repeating instructions using a counter
  - Generating a multiplication table

- [x] **While Loop**

  - Repeating code while a condition is true
  - Updating a counter to terminate a loop
  - Calculating the sum of numbers from 1 to a given number

- [x] **Factorial Using a While Loop**

  - Calculating factorials using repeated multiplication
  - Building the factorial series as a string
  - Displaying the series and final result
  - Handling non-negative integer input

- [x] **Runtime Input with Node.js**

  - Importing the built-in `readline` module
  - Using `readline.createInterface()`
  - Understanding `process.stdin` and `process.stdout`
  - Receiving input through `rl.question()`
  - Converting input strings into numbers using `Number()`

### Practical Files

- `02-control-flow/01-if-else.js`
- `02-control-flow/02-switch.js`
- `02-control-flow/03-for-loop.js`
- `02-control-flow/04-while-loop.js`

### Important Lessons

- Conditional statements control which code executes based on a condition.
- `switch` is useful when comparing one value against several possible cases.
- A `for` loop is useful when the iteration process has a clear initialization, condition, and update.
- A `while` loop repeats as long as its condition remains true.
- Forgetting to update a loop counter can cause an infinite loop.
- Node.js terminal input is received as text and often needs conversion before numerical calculations.
- A factorial can be calculated by multiplying consecutive integers from the input down to 1.
- The factorial of zero is 1.

### Next Session

**Arrays and Objects**

Planned topics:

- Creating and accessing arrays
- Array indexes and updating elements
- Common array operations
- Creating objects and accessing their properties
- Building a small practical program using arrays and objects

---

*Day 2 complete: Control flow concepts practiced through conditional logic, loops, runtime input, and practical programs.*

**# Day 3 — Functions**

**\*\*Focus:\*\*** Functions, parameters, return values, and reusable logic.

**### Topics Covered**

\- [x] **\*\*Function Basics\*\***

&#x20; \- Function declaration and function calling
&#x20; \- Understanding reusable blocks of code
&#x20; \- Executing functions when needed

\- [x] **\*\*Parameters and Arguments\*\***

&#x20; \- Passing values into functions
&#x20; \- Understanding parameters vs arguments
&#x20; \- Working with multiple parameters

\- [x] **\*\*Return Values\*\***

&#x20; \- Returning results using `return`
&#x20; \- Storing returned values in variables
&#x20; \- Returning objects from functions

\- [x] **\*\*Practical Functions\*\***

&#x20; \- Building an order calculator using functions
&#x20; \- Calculating subtotal, discount, and final total
&#x20; \- Creating a calculator using `switch` statements
&#x20; \- Handling division by zero

\- [x] **\*\*Runtime Input with Node.js\*\***

&#x20; \- Receiving input using `readline`
&#x20; \- Passing user input into functions
&#x20; \- Converting input strings into numbers
&#x20; \- Using callback functions with `rl.question()`

**### Practical Files**

\- `03-functions/01-function-basics.js`
\- `03-functions/02-parameters-return.js`
\- `03-functions/03-calculator.js`

**### Important Lessons**

\- Functions help organize code into reusable blocks.
\- Parameters allow functions to receive different values.
\- Arguments are the actual values passed when calling a function.
\- `return` sends a result back to the caller and terminates the function execution.
\- Functions can return objects containing multiple calculated values.
\- Runtime input can be processed and passed into functions.

**### Next Session**

**\*\*Arrays and Objects\*\***

Planned topics:

\- Creating and accessing arrays
\- Understanding array indexes
\- Creating and accessing object properties
\- Storing objects inside arrays
\- Adding and deleting objects from arrays
\- Building a practical Product Management system

**---**

*\*Day 3 complete: Functions practiced through reusable logic, calculations, return values, and runtime input.\**


**# Day 4 — Arrays and Objects**

**\*\*Focus:\*\*** Arrays, objects, and managing structured data.

**### Topics Covered**

\- [x] **\*\*Arrays\*\***

&#x20; \- Creating arrays
&#x20; \- Storing multiple values in a single variable
&#x20; \- Accessing and working with array elements
&#x20; \- Adding objects to an existing array using `push()`

\- [x] **\*\*Objects\*\***

&#x20; \- Creating objects using object literals
&#x20; \- Understanding key-value pairs
&#x20; \- Working with properties such as SKU, Title, category, MRP, price, and inventory
&#x20; \- Storing multiple objects inside an array

\- [x] **\*\*Array of Objects\*\***

&#x20; \- Managing structured product data
&#x20; \- Displaying product information using `console.table()`
&#x20; \- Adding new product objects dynamically
&#x20; \- Deleting products using `filter()`

\- [x] **\*\*Practical Application\*\***

&#x20; \- Building a Jewellery Product Management system
&#x20; \- Creating a menu-driven program
&#x20; \- Implementing View Product, Add Product, and Delete Product
&#x20; \- Using functions to organize different operations
&#x20; \- Handling user input through Node.js `readline`

**### Practical Files**

\- `04-array-object/01-inventory-manager.js`

**### Important Lessons**

\- Arrays can store multiple values and objects.
\- Objects represent structured data through key-value pairs.
\- Array indexes start from 0.
\- `push()` adds a new element to the end of an array.
\- `filter()` creates a new array based on a condition.
\- Functions can organize array and object operations into separate tasks.
\- Practical applications help combine previously learned concepts.

**### Next Session**

**\*\*Strings and String Methods\*\***

Planned topics:

\- Creating and accessing strings
\- String properties and methods
\- Searching within strings
\- Extracting parts of strings
\- Modifying and transforming strings
\- Practical string manipulation

**---**

*\*Day 4 complete: Arrays and Objects practiced through structured product data and a menu-driven Product Management system.\**

