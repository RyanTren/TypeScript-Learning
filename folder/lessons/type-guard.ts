// typeof type guards

type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType):void{
    if(typeof value === 'string'){
        console.log(value.toLowerCase());
        return;
    }
    if(typeof value === 'number'){
        console.log(value.toFixed(2));
        return;
    }
    console.log(`boolean : ${value}`);
}

checkValue(value);

// check for property type guard

type Dog = {type: 'dog'; name: string; bark : () => void};
type Cat = {type: 'cat'; name: string; meow : () => void};
type Animal = Dog | Cat;

// function makeSound(animal: Animal){
//     if(animal.type === 'dog'){
//         animal.bark();
//         return;
//     }
//     animal.meow();
// }


function makeSound(animal: Animal){
    if('bark' in animal){
        animal.bark();
        return;
    }
    animal.meow();
}

// truthy/falsey type guard

function printLength(str:string | null | undefined){
    if(str){
        console.log(str.length);
    } else { 
        console.log('no string provided');
    }
}

printLength('helo');
printLength('');
printLength(null);
// printLength(); // this will throw an error
printLength(undefined);


// try{
//     throw new Error('This is an error');
// } catch (error){
//     if(error instanceof Error){
//         console.log(`Caught an Error object : ${error.message}`);
//     }
//     else{
//         console.log('unknown error...');
//     }
// }

function checkInput (input: Date | string): string{
    if(input instanceof Date){
        return input.getFullYear().toString();
    }
    return input;
}

const year = checkInput(new Date());
const rand = checkInput('2020-05-05');

console.log(year);
console.log(rand);

// type predicate type guard

// type Student = {
// name: string;
// study: () => void;
// };

// type Users = {
// name: string;
// login: () => void;
// };

// type Person = Student | User;

// const randomPerson = (): Person => {
// return Math.random() > 0.5
//     ? { name: 'john', study: () => console.log('Studying') }
//     : { name: 'mary', login: () => console.log('Logging in') };
// };

// const person = randomPerson();

// function isStudent(person:Person){
//     // return 'study' in person
//     return (person as Student).study !== undefined;
// }

// if(isStudent(person)){
//     person.study();
// }
// person.login();
