
// Classes Introduction
// class w/ a constructor
/*class Book {
    title: string;
    author: string;
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
  }
  
  const deepWork = new Book('deep work ', 'cal newport');*/

// class w/ instance property/deafault property
// class Book {
//     title: string;
//     author: string;
//     checkedOut: boolean = false;
//     constructor(title: string, author: string) {
//       this.title = title;
//       this.author = author;
//     }
//   }
  
//   const deepWork = new Book('deep work ', 'cal newport');
//   deepWork.checkedOut = true;
//   // deepWork.checkedOut = 'something else'; // error

// readonly property

// class Book {
//     readonly title: string;
//     author: string;
//     checkedOut: boolean = false;
//     constructor(title: string, author: string) {
//       this.title = title;
//       this.author = author;
//     }
//   }
  
//   const deepWork = new Book('deep work ', 'cal newport');
  
//   deepWork.title = 'something else';


// private and public modifiers
/*
class Book {
    public readonly title: string;
    public author: string;
    private checkedOut: boolean = false;
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
    public checkOut() {
      this.checkedOut = this.toggleCheckedOutStatus();
    }
    public isCheckedOut() {
      return this.checkedOut;
    }
    private toggleCheckedOutStatus() {
      return !this.checkedOut;
    }
  }
  
  const deepWork = new Book('Deep Work', 'Cal Newport');
  deepWork.checkOut();
  console.log(deepWork.isCheckedOut()); // true
  // deepWork.toggleCheckedOutStatus(); // Error: Property 'toggleCheckedOutStatus' is private and only accessible within class 'Book'.
  */

// getters and setters

/*
class Book {
private checkedOut: boolean = false;
constructor(public readonly title: string, public author: string) {}
get info() {
    return `${this.title} by ${this.author}`;
}

private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
}
get checkOut() {
    return this.checkedOut;
}
public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
}
}

const deepWork = new Book('deep work', 'cal newport');
console.log(deepWork.info);
// deepWork.checkOut = true;
console.log(deepWork.someInfo);
console.log(deepWork.checkOut);
*/

// implement interface

interface IPerson {
    name: string;
    age: number;
    greet(): void;
  }
  
  class Person implements IPerson {
    constructor(public name: string, public age: number) {}
  
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I'm ${this.age} years old.`
      );
    }
  }
  
  const hipster = new Person('shakeAndBake', 100);
  hipster.greet();