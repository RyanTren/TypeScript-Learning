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
  brand: 'random brand',
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

laptopOne.storage = 256; // assigning value to optional property

console.log(laptopOne.upgradeRam(4)); // upgrades RAM by 4GB
console.log(laptopOne);