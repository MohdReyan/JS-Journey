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
Day 2 — Control Flow

Learning period: 21–23 October 2026

Focus: Conditional statements, loops, and runtime input.

Topics Covered

If-Else Statements

Making decisions using if and else

Evaluating conditions with comparison operators

Applying conditions to a shopping discount calculator

Switch Statements

Using switch, case, break, and default

Building a product selection menu

Handling invalid menu selections

For Loop

Loop initialization, condition, and increment

Repeating instructions using a counter

Generating a multiplication table

While Loop

Repeating code while a condition is true

Updating a counter to terminate a loop

Calculating the sum of numbers from 1 to a given number

Factorial Using a While Loop

Calculating factorials using repeated multiplication

Building the factorial series as a string

Displaying the series and final result

Handling non-negative integer input

Runtime Input with Node.js

Importing the built-in readline module

Using readline.createInterface()

Understanding process.stdin and process.stdout

Receiving input through rl.question()

Converting input strings into numbers using Number()

Practical Files

02-control-flow/01-if-else.js

02-control-flow/02-switch.js

02-control-flow/03-for-loop.js

02-control-flow/04-while-loop.js

Important Lessons

Conditional statements control which code executes based on a condition.

switch is useful when comparing one value against several possible cases.

A for loop is useful when the iteration process has a clear initialization, condition, and update.

A while loop repeats as long as its condition remains true.

Forgetting to update a loop counter can cause an infinite loop.

Node.js terminal input is received as text and often needs conversion before numerical calculations.

A factorial can be calculated by multiplying consecutive integers from the input down to 1.

The factorial of zero is 1.

Next Session

Arrays and Objects

Planned topics:

Creating and accessing arrays

Array indexes and updating elements

Common array operations

Creating objects and accessing their properties

Building a small practical program using arrays and objects

Day 2 complete: Control flow concepts practiced through conditional logic, loops, runtime input, and practical programs.