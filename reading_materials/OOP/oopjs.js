        // Keep in mind that JavaScript's OOP is prototype-based.
		// In JavaScript, Object-Oriented Programming (OOP) can be implemented using prototypes.
		
        // Using object literals:
		const person = {
			name: 'John',
			age: 30,
			greet: function() {
				console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
			}
		};

        //Using constructor functions:
		function Person(name, age) {
			this.name = name;
			this.age = age;
			this.greet = function() {
				console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
			};
		}

		const person3 = new Person('John', 30);
		const person4 = new Person('Jane', 25);

        // Prototypes:
		// JavaScript uses prototypal inheritance. 
        // You can add methods and properties to an object's prototype to be shared among all instances.
		
		// Using prototype
		function Person(name, age) {
			this.name = name;
			this.age = age;
		}

		Person.prototype.greet = function() {
			console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
		};

		const person1 = new Person('John', 30);
		const person2 = new Person('Jane', 25);

		person1.greet(); // Output: Hello, my name is John and I'm 30 years old.
		person2.greet(); // Output: Hello, my name is Jane and I'm 25 years old.


       //Inheritance:
	   //You can achieve inheritance by using the prototype chain. 
       //Create a child constructor function and set its prototype to an instance of the parent constructor.		
	   
	   function Student(name, age, grade) {
			// Call the parent constructor
			Person.call(this, name, age);
			this.grade = grade;
		}

		// Set the prototype to an instance of the parent
		Student.prototype = Object.create(Person.prototype);

		const student1 = new Student('Alice', 18, 'A');
		student1.greet(); // Output: Hello, my name is Alice and I'm 18 years old.
		console.log(`Grade: ${student1.grade}`); // Output: Grade: A

