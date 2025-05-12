// In simple terms , variable are a container that holds a specific value;
var age = 19;
// this is called variable decleration
// console.log(age)



// PRIMITIVE DATA TYPES
// NUMBER
var age = 20;
var discount = 20.5;
// STRING  
var name = "Wasay";
// BOOLEAN
var isLoggedIn = true;

// Project: Age Calculator

// Input birth year

// Calculate and show age
const date = new Date()
const currentYear = date.getFullYear()


// console.log(date.getFullYear())



console.log("Enter your Birth Year");

// process.stdout.write("Enter your Birth Year")
process.stdin.on('data', (data) => {
    const BirthYear = data;
    const yourAge = currentYear - BirthYear
    console.log(yourAge)
 
    process.exit(); // Exit the process after receiving input
  });
