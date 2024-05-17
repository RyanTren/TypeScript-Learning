//types: string, number, and boolean
let awesomeName:string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName = 20;

let amount:number = 20;
amount = 12 - 1;
// amount = 'pants';
console.log(amount);


let isAwesome:boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake';
console.log(isAwesome);

// Challenge
/*
* Create a variable of type string and try to invoke a string method on it.
* Create a variable of type number and try to perform a mathematical operation on it.
* Create a variable of type boolean and try to perform a logical operation on it.
* Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
* You can use type annotation or inference
*/

// 1. String

let greeting: string = 'Hello, Typescript!';
greeting = greeting.toUpperCase();

// 2. Number
let age: number = 25;
age += 5;

// 3. Boolean
let isAdult: boolean = age >= 18;
isAdult = !isAdult;
console.log(isAdult);


// 4. Assigning Different Types
// greeting = 10;
// age= 'thirty';
// isAdult = 'yes';

console.log(greeting, age, isAdult);

// Union Types
let tax:number | string = 10;
tax = 100;
tax = '$10';


let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
// requestStatus = 'random';

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

let random;

// Arrays
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook:string | undefined;

for(let book of books){
    if(book === '1984'){
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break;
    }
}

console.log(foundBook?.length);


let discount:number | string = 20;
discount = '20%';
// discount = true;

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
// orderStatus = 'canceled';

// Array with Types
let prices:number[] = [100,75,42];
// prices.push('hello')

let fruit: string[] = ['apple', 'orange'];

// let randomValues: [] = ['hello'];
let emptyValues:number[] = [];

let names = ['peter', 'susan', 1];

let array:(string | boolean)[] = ['apple', true, 'orange', false];

let temperatures:number[] = [20, 25, 30];
// temperatures.push('hot');

let colors: string[] = ['red', 'blue', 'green'];
// colors.push(true);

let mixedArray:(number | string)[] = [1, 'two', 3];

// Objects
let car: {brand: string; year: number} = {brand:'toyota', year: 2020};

