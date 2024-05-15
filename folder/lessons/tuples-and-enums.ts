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