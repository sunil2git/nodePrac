// // Base class
// class Boy {
//   constructor(name) {
//     this.name = name;
//   }

//   // Common method for both roles
//   introduce() {
//     console.log(`Hi, I'm ${this.name}.`);
//   }
// }

// // Derived class 1: Student
// class Student extends Boy {
//   // Override introduce method for Student role
//   introduce() {
//     console.log(`Hi, I'm ${this.name}, and I'm a student.`);
//   }

//   // Additional method specific to Student role
//   study() {
//     console.log(`${this.name} is studying.`);
//   }
// }

// // Derived class 2: Monitor
// class Monitor extends Boy {
//   // Override introduce method for Monitor role
//   introduce() {
//     console.log(`Hi, I'm ${this.name}, and I'm the class monitor.`);
//   }

//   // Additional method specific to Monitor role
//   organize() {
//     console.log(`${this.name} is organizing the class.`);
//   }
// }

// // Function that demonstrates polymorphism
// function roleIntroduction(roleBoy) {
//     console.log('role: - ',roleBoy)
//   roleBoy.introduce();
// }

// // Using polymorphism
// const john = new Student('John');
// const mike = new Monitor('Mike');

// roleIntroduction(john); // Output: Hi, I'm John, and I'm a student.
// john.study(); // Output: John is studying.

// roleIntroduction(mike); // Output: Hi, I'm Mike, and I'm the class monitor.
// mike.organize(); // Output: Mike is organizing the class.

class Student {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, and I'm a ${this.role}.`);
  }

  action() {
    console.log(`${this.name} is performing an action.`);
  }
}

// Using polymorphism
const student = new Student('Alice', 'student');
const moniter = new Student('Alice', 'also moniter');

student.introduce(); // Output: Hi, I'm Alice, and I'm a student.
student.action(); // Output: Alice is performing an action.

moniter.introduce(); // Output: Hi, I'm Bob, and I'm a moniter.
moniter.action(); // Output: Bob is performing an action.

// The Student class has a name and role property, and a method introduce that prints a role-specific introduction.
// The action method represents a common behavior for both roles.
// Objects like student and moniter demonstrate polymorphism as they share a common interface(introduce and action methods)
// while having different role-specific behavior.
