let car: { brand: string; year: number} = { brand: 'toyota', year: 2020};
car.brand = 'ford';
// car.color = 'blue';

let car1: { brand: string; year: number} = { brand: 'audi', year: 2022};

let book = {title: 'book', cost: 20};
let pen = {title: 'pen', cost: 10};
let notebook = {title: 'notebook'};

let items:{title: string; cost?:number}[] = [book,pen,notebook];
// items[0].title = 'new book';

let bike:{brand:string; year:number} = {brand: 'yamaha', year: 2010};
// bike.year = 'old';
let laptop:{brand:string; year:number} = {brand: 'Dell', year: 2010};
// let laptop2:{brand:string; year:number} = {brand: 'HP'};

let product1 = {title:'shirt', price: 20};
let product2 = {title:'pants'};
let products: { title: string; price?: number }[] = [product1, product2];

products.push({title: 'shoes', price: 50});

function sayHi(name:string){
    console.log(`Hello, ${name.toUpperCase()}`);

}

// - any
// - config
// type

sayHi('john');
// sayHi(3);

function calculateDiscount(price:number):number {
    const hasDiscount = true;

    if(hasDiscount){
        return price;
        // return 'Discount Applied';
    }
    return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

function addThree(number: any){
    let anotherNumber:number = 3;
    return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

// run time error
// someValue.myMethod();


const namer:string[] = ['john', 'jane', 'jill'];

function isNameInList(name:string):boolean{
    return namer.includes(name);
}

let nameToCheck = 'jane';

if(isNameInList(nameToCheck)){
    console.log(`${nameToCheck} is in the list`);
} else{
    console.log(`${nameToCheck} is not in the list`);
}

// Optional Parameters & Default Parameters
function calculatePrice(price:number, discount?:number): number{
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(initialScore:number, penaltyPoints:number = 0):number{
    return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

function sum(message:string, ...numbers:number[]):string{
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);

    let total = numbers.reduce((previous, current) => {
        return previous + current;
    }, 0);
    return `${message} ${total}`;
}

let results = sum('The totals is : ', 1, 2, 3, 4, 5);
console.log(results);

function logMessage(message:string): void{
    console.log(message);
    // return 'hello world';
}

logMessage('Hello, TypeScript');

function processInput(input:string | number){
    
    if(typeof input === 'number'){
        console.log(input * 2);
    } else{
        console.log(input.toLowerCase());
    }
}

processInput(10);
processInput('Hello');

function createEmployee({ id }: { id:number }):{id:number; isActive:boolean}{
    return {id, isActive:id % 2 === 0};
};

const first = createEmployee({id:1});
const second = createEmployee({id:2});
console.log(first, second);

// alternative

function createStudent(student:{id:number, name:string}):void{
    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
    id: 5,
    name: 'anna',
    email: 'anna@gmail.com'
}

createStudent(newStudent);
// createStudent({id: 1, name: 'bob', email: 'bobo@gmail.com'});

