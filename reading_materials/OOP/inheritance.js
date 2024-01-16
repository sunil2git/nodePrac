//allows a new class (subclass or derived class) to inherit attributes and behaviors from an existing class (superclass or base class).

//Base class (Superclass)
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method in the base class
  makeSound() {
    console.log('Some generic sound');
  }
}

// Derived class (Subclass) inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    // Call the constructor of the superclass
    super(name);
    this.breed = breed;
  }

  // Override the method from the base class
  makeSound() {
    console.log('Woof! Woof!');
  }

  // New method introduced in the subclass
  fetch() {
    console.log(`${this.name} is fetching.`);
  }
}

// Using the classes
const genericAnimal = new Animal('Generic Animal');
genericAnimal.makeSound(); // Output: Some generic sound

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.makeSound(); // Output: Woof! Woof!
myDog.fetch(); // Output: Buddy is fetching.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log('Some generic sound');
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log('Woof! Woof!');
//   }
//   fetch() {
//     console.log(`${this.name} is fetching.`);
//   }
// }

// const myDog = new Dog('Buddy', 'Golden Retriever');
// myDog.makeSound(); // Output: Woof! Woof!
// myDog.fetch(); // Output: Buddy is fetching.

//class SubclassName extends SuperclassName { /* ... */ } //syntax

// SubclassName: The name of the derived class (subclass).
// SuperclassName: The name of the base class (superclass) from which the subclass inherits.

// class Animal {
//   makeSound() {
//     console.log('Some generic sound');
//   }
// }
// class Dog extends Animal {
//   makeSound() {
//     console.log('Woof! Woof!');
//   }
//   fetch() {
//     console.log('Fetching...');
//   }
// }

// const myDog = new Dog('Buddy', 'Golden Retriever');
// myDog.makeSound()
// myDog.fetch()

