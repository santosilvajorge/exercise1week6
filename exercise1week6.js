/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

let x = 10
let y = 2

if (x < y) {
  console.log("y is bigger!")
  console.log(`Y = ${y}`)
} else if (x > y){
  console.log("x is bigger!")
  console.log(`X = ${x}`)
} else {
  console.log(`X and Y are equal`)
}



/* EXERCISE 2.1
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

if (x !== 5){
  console.log(`not equal`)
} else{
  console.log(`equal`)
}



/* EXERCISE 2.2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

if (x % 5 == 0){
  console.log('x is divisible by 5')
} else {
  console.log('x is not divisible by 5')
}



/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

if (x == 8 || y == 8 || x + y == 8 || x - y == 8){
  console.log('Check!')
} 



/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let shoppingCart = 55
let shipping = 10
let totalShoppingCart = shoppingCart + shipping

if (shoppingCart > 50){
  console.log(`Total = ${shoppingCart}€`)
} else {
  console.log(`Total = ${shoppingCart+shipping}€`)
}



/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let blackFryday = true

if (blackFryday = true){
  console.log(`Black Fryday Price :${totalShoppingCart * 0.8}€`)
}



/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let a = 4
let b = 5
let c = 3

if (a < b && c < a){
  console.log(b, a, c)
} else if (a > b && c > a){
  console.log(c, a, b)
} else if (c < b && a < c){
  console.log(b, c, a)
} else if (c > b && a > c){
  console.log(a, c, b)
} else if (b < a && c < b){
  console.log(a, b, c)
} else if (b > a && c > b){
  console.log(c, b, a)
}



/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

if (typeof a === 'number'){
  console.log('"a" is a integer')
}



/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/

if (b % 2 == 0){
  console.log('"b" is a Even Number')
} else {
  console.log('"b is a Odd Number')
}



/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/

let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val > 10) {
    console.log("Greater than 10");
  } else {
    console.log("equal to 10");
  }
 


/*
EXERCISE 10
Write chained if/else statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

let num = 40

if (num < 5){
  console.log("Tiny")
} else if (num < 10){
  console.log("Small")
} else if (num < 15){
  console.log("Medium")
} else if (num < 20){
  console.log("Large")
} else if (num >= 20){
  console.log("Huge")
}



/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

 isMale = true
 console.log(isMale ? "male" : "female")



/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

let number = 0;

while (number <= 5) {
  console.log(number);
  number = number + 1;
}



/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

for (let number = 0; number <= 10; number++){
  console.log(number)
}



/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/

for (let number = 0; number <= 10; number++){
  if (number == 3) continue;
  if (number == 8) continue;
  console.log(number)
}



/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

for (let number = 0; number < 15; number++){
  if (number % 2 == 0) {console.log('Even')};
  if (number % 2 == 1) {console.log('Odd')};
  console.log(number)
}



/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

  for (let number = 1; number < 100; number++){
    if (number % 3 == 0 && number % 5 == 0) {console.log('FizzBuzz') };
    if (number % 3 == 0) {console.log('Fizz')};
    if (number % 5 == 0) {console.log('Buzz')};
    if (number % 3 == 0 || number % 5 == 0) continue;
    console.log(number)
  }



/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}