//the super keyword is used to call methods on an object's parent or superclass.
//It is often used in the context of classes and inheritance.
//Here are the main use cases for the super keyword:

//Calling Superclass Constructor:

//superclass or baseclass
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // Call the constructor of the superclass (Animal)
    super(name);
    this.breed = breed;
  }
}

//const myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever

//Calling Superclass Methods:

class Animal {
  makeSound() {
    console.log('Some generic sound');
  }
}

class Dog extends Animal {
  makeSound() {
    // Call the makeSound method of the superclass (Animal)
    super.makeSound();
    console.log('Woof! Woof!');
  }
}

const myDog = new Dog();
myDog.makeSound();
// Output:
// Some generic sound
// Woof! Woof!
