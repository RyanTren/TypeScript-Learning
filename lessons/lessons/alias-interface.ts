// Lesson Type Aliases

type User = { id: number; name: string; isActive: boolean }

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser(user: { id: number; name: string; isActive: boolean }): {
    id: number;
    name: string;
    isActive: boolean;
  } {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
  }

  type StringOrNumber = string | number;

  let value:StringOrNumber = 'hello';
  value = 10;

  type Theme = 'light' | 'dark';

  let theme: Theme;
  theme = 'light';
  theme = 'dark';

  function setTheme(t: Theme){
    theme = t;

  }

  setTheme('dark');


//Challenge for Type Alias
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(bob);

//Intersection Types
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
};

const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
};

// Type Alias - Computed Properties
const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };

// Inferface - Fundamentals
// interface Books {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
// }

// const deepWork: Books = {
//   isbn: 9781455586691,
//   title: 'Deep Work',
//   author: 'Cal Newport',
//   genre: 'Self-help',
// };

// deepWork.title = 'New Title'; // allowed
// // deepWork.isbn = 654321; // not allowed

// Interface - Methods
interface Books {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Books = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // second option
  printSomething: (someValue) => {
    // "this" gotcha
    console.log(deepWork.author);
    return someValue;
  },
  // third option
  // printSomething(someValue) {
  //   return someValue;
  // },
  // alternative
  // printAuthor: () => {
  //   console.log(deepWork.author);
  // },
};
console.log(deepWork.printSomething(34));

deepWork.printAuthor();
const resulted = deepWork.printTitle('is an awesome book');
console.log(resulted);

// Challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}

const laptopOne: Computer = {
  id: 1,
  brand: 'HP',
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

laptopOne.storage = 256; // assigning value to optional property

console.log(laptopOne.upgradeRam(4)); // upgrades RAM by 4GB
console.log(laptopOne);

// Interface - Merging, Extend, TypeGuard
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Person {
  age: number;
}

// Usage
const person: Person = {
  name: 'John',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

// Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// Extending the interface
/*
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'jane',
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

// Interface multiple inheritance
interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing people...');
  },
};
*/

// Challenge - Part 1

/*
interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'john',
    };
  } else if (random < 0.66) {
    return {
      name: 'sarah',
      dogName: 'Rex',
    };
  } else {
    return {
      name: 'bob',
      managePeople: () => console.log('Managing people...'),
      delegateTasks: () => console.log('Delegating tasks...'),
    };
  }
}
*/

// Challenge - Part 2
// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return 'managePeople' in obj;
// }

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}