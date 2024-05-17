//Tuples
// let persons: [string, number] = ['johnny', 25];
// console.log(persons[0]); // Outputs: john
// console.log(persons[1]); // Outputs: 25

// let johnny: [string, number?] = ['john'];

// function getPerson(): [string, number] {
//   return ['johnny', 25];
// }

// let randomPerson = getPerson();
// console.log(randomPerson[0]); // Outputs: john
// console.log(randomPerson[1]);

// // let susan: [string, number] = ['susan', 25];
// // susan[0] = 'bob';
// // susan.push('some random value');

// let susane: readonly [string, number] = ['susane', 25];
// // susane[0] = 'bob';
// // susan.push('some random value');
// console.log(susane);

//Enums

// enum ServerResponseStatus{
//     Success = 200,
//     Error = 'Error',
// }

// interface ServerResponse {
//     result: ServerResponseStatus;
//     data: String[];
// }

// function getServerResponse(): ServerResponse {
//     return {
//         result: ServerResponseStatus.Success,
//         data: ['first item', 'second item']
//     };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);

//Enums - Reverse Mapping
// enum ServerResponseStatus {
// Success = 'Success',
// Error = 'Error',
// }

// Object.values(ServerResponseStatus).forEach((value) => {
// console.log(value);
// });


// enum ServerResponseStatus {
// Success = 200,
// Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value) => {
// if (typeof value === 'number') {
//     console.log(value);
// }
// });

// enum NumericEnum {
// Member = 1,
// }

// enum StringEnum {
// Member = 'Value',
// }

// let numericEnumValue: NumericEnum = 1; // This is allowed
// console.log(numericEnumValue); // 1

// let stringEnumValue: StringEnum = 'Value'; // This is not allowed

// enum ServerResponseStatus {
//     Success = 'Success',
//     Error = 'Error',
// }

// function getServerResponse(): ServerResponse {
// return {
//     // result: ServerResponseStatus.Success,
//     // this will not fly with string enum but ok with number
//     result: 'Success',
//     data: ['first item', 'second item'],
// };
// }

// Challenge 1
// Define an enum named UserRole
// enum UserRole {
//     Admin,
//     Manager,
//     Employee,
//   }
  
//   // Define a type alias named User
//   type User = {
//     id: number;
//     name: string;
//     role: UserRole;
//     contact: [string, string]; // Tuple: [email, phone]
//   };
  
//   // Define a function named createUser
//   function createUser(user: User): User {
//     return user;
//   }
  
//   // Call the createUser function
//   const user: User = createUser({
//     id: 1,
//     name: 'John Doe',
//     role: UserRole.Admin,
//     contact: ['john.doe@example.com', '123-456-7890'],
//   });
  
//   console.log(user);

let someValue: any = 'this is a string';
let strLength:number = (someValue as string).length;

type Bird = {
    name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird; //Eagle
let dog = dogObject as Bird; //Undefined
console.log(bird.name + dog.name);


enum Status{
    Pending = 'pending',
    Declined  = 'declined',
}

type User = {
    name: string;
    status: Status;
};

/*
Senario

save Status.Pending in the DB as a String and retrieve string
from the DB
*/

const statusValue = 'pending';

const user:User = {name: 'john', status: statusValue as Status};

// Type - 'unknown'

let unknownValue: unknown;

unknownValue = 'string'; //this works
unknownValue = [1, 2, 3]; //this works
unknownValue = 42.3344556; //this works

// unknownValue.toFixed(2); //this will not work

// another example
if (typeof unknownValue === 'number') {
    console.log(unknownValue.toFixed(2)); // now this works because ts knows that unknownValue is a string in this block
}


function runSomeCode(){
    const random = Math.random();
    if(random < 0.5){
        throw new Error('This is an error');
    } else{
        throw 'some error';
    }
}

try {
    runSomeCode();
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    } else{
        console.log(error);
    }
}

// let someValue:never = 0; can't assign anything

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme){
    if(theme === 'light'){
        console.log('light theme');
        return;
    }
    if(theme === 'dark'){
        console.log('dark theme');
        return;
    }
    theme;
}

enum Color {
    Red,
    Blue,
    // Green,
}

function getColorName(color: Color){
    switch(color){
        case Color.Red:
            return 'Red';
        case Color.Blue:
            return 'Blue';
        default:
            // at build time
            let unexpectedColor:never = color;
            // at runtime
            throw new Error (`Unhandled color: ${color}`)
    }
}

console.log(getColorName(Color.Red)); // Red
console.log(getColorName(Color.Blue)); // Blue
// console.log(getColorName(Color.Green)); // undefined (no case handled in switch)

