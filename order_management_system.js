//Task 1 - Create an Inventory Array of Product Objects

// Setting up a class
class Product {
    constructor (name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
// Create 4 products
let latte = new Product ('latte', 4.50, 100);
let coffee = new Product ('coffee', 2.50, 100);
let espresso = new Product ('espress', 3, 100);
let pastry = new Product ('croissant', 3.50, 100);

// create an array of products
const inventory = [latte, coffee, espresso, pastry];

// console.log(inventory); // To Test output







// DISREGARD BELOW PRACTICE - Creating classes
// class Human {
//     constructor (weight, height, wingspan) {
//         this.weight = weight;
//         this.height = height;
//         this.wingspan = wingspan;
//     }
// }
// DISREGARD BELOW
// class Car {
//     constructor (year, mileage, color) {
//         this.year =  year;
//         this.mileage = mileage;
//         this.color = color;
//     }
// }

// // Create an object 
// let apple = new Product('Apple', 1.99, 10);
// console.log(apple.price);

// let Honda = new Car('Honda', 100000, 'red')
// console.log(Honda.mileage);

// let Kyle = new Human('Kyle', 1.97, 1.5)
// console.log(Kyle.height);
