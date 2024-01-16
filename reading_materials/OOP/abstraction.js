// abstraction - focusing on essential properties and behaviors while hiding unnecessary details.
// Abstraction involves hiding the internal details of how a class or object works
// and exposing only what is necessary for the outside world to interact with it.

// Abstraction through a Car class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

//Abstracting the acceleration behavior
  accelerate() {
    console.log(`before Accelerating. Current speed: ${this.speed} mph`);

    this.speed += 10; // this.speed = this.speed + 10.
    console.log(`after Accelerating. Current speed: ${this.speed} mph`);
  }

//Abstracting the brake behavior
  brake() {
    console.log(`before Braking. Current speed: ${this.speed} mph`);

    this.speed -= 5; // this.speed = this.speed - 5.
    console.log(`after Braking. Current speed: ${this.speed} mph`);
  }
}

//Creating an instance of the Car class
const myCar = new Car('Toyota', 'Camry');

//Using the abstracted methods
myCar.accelerate(); // Output: Accelerating. Current speed: 10 mph
myCar.brake(); // Output: Braking. Current speed: 5 mph

// Abstract Account class
class Account {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  // Abstracted method for deposit
  deposit(amount) {
    this.balance += amount; // 1000 = 1000 + 500 = 1500 current balance.
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  // Abstracted method for withdraw
  withdraw(amount) {
    console.log(amount);
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Insufficient funds');
    }
  }
}

// SavingsAccount extends Account
class SavingsAccount extends Account {
  constructor(accountNumber, accountHolder, balance, interestRate) {
    super(accountNumber, accountHolder, balance);
    this.interestRate = interestRate;
  }

  // Abstracted method for calculate interest
  calculateInterest() {
    const interest = this.balance * (this.interestRate / 100);
    this.balance += interest;
    console.log(`Interest added: $${interest}. New balance: $${this.balance}`);
  }
}

// Using the abstraction
const savingsAccount = new SavingsAccount('123456', 'John Doe', 1000, 5);
savingsAccount.deposit(500); // Output: Deposited $500. New balance: $1500
savingsAccount.calculateInterest(); // Output: Interest added: $75. New balance: $1575
savingsAccount.withdraw(2000); // Output: Insufficient funds
savingsAccount.withdraw(1000); // Output: Withdrawn $1000. New balance: $575
