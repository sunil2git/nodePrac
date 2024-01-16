//#fuel is declared as a private field within the Car class.
//It is only accessible and modifiable within the scope of the Car class.

// Encapsulation through a Car class
// class Car {
//   // Private data member
//   #fuel = 100;

//   // Public method to get fuel level
//   getFuel() {
//     return this.#fuel;
//   }

//   // Public method to drive the car
//   drive(distance) {
//     const fuelConsumed = distance / 10; // Assuming 10 miles per gallon
//     if (fuelConsumed <= this.#fuel) {
//       this.#fuel -= fuelConsumed;
//       console.log(
//         `Car is driven ${distance} miles. Fuel remaining: ${this.#fuel} gallons`
//       );
//     } else {
//       console.log('Not enough fuel');
//     }
//   }
// }

// Creating an instance of the Car class
// const myCar = new Car();

// // Using encapsulated methods
// console.log(`Initial fuel level: ${myCar.getFuel()} gallons`);
// myCar.drive(50); // Output: Car is driven 50 miles. Fuel remaining: 95 gallons

// Car constructor using closure for encapsulation
function Car() {
  // Private data member
  let fuel = 100;

  // Public method to get fuel level
  this.getFuel = function () {
    return fuel;
  };

  // Public method to drive the car
  this.drive = function (distance) {
    const fuelConsumed = distance / 10; // Assuming 10 miles per gallon
    if (fuelConsumed <= fuel) {
      fuel -= fuelConsumed;
      console.log(
        `Car is driven ${distance} miles. Fuel remaining: ${fuel} gallons`
      );
    } else {
      console.log('Not enough fuel');
    }
  };
}

// Creating an instance of the Car class
const myCar = new Car();

// Using encapsulated methods
console.log(`Initial fuel level: ${myCar.getFuel()} gallons`);
myCar.drive(50); // Output: Car is driven 50 miles. Fuel remaining: 95 gallons
