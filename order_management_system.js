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

// Task 2 - Create an Orders Array of Order Objects

class Order {
    constructor (customerName, items, status) {
        this.customerName = customerName;
        this.items = items;
        this.status = status;
    }
}

let orders = [];


// Task 3 - Create a Function to Place an Order
//checking stock for each item
function placeOrder (customerName, items) {
for (let i = 0; i < items.length; i++) {
    let orderedItem = items[i];
    let product = null;


// find matching product
for (let j = 0; j < inventory.length; j++) {
    if (inventory[j].name === orderedItem.name) {
        product = inventory[j];
        break;
    }
}
// if product not found
if (product === null) {
    console.log(orderedItem.name  + "not found in inventory");
    return;
}
// if product not in stock
if (product.quantity < orderedItem.quantity) {
    console.log(" Not enough stock " + orderedItem.name);
    return;
}
}

// If items in stock ,update inv
for (let i = 0; i < items.length; i++) {
    let orderedItem = items[i];

for  (let j = 0; j < inventory.length; j++) {
    if (inventory[j].name === orderedItem.name) {
        inventory[j].quantity -= orderedItem.quantity;
    }
}
}
// creat new order using push
let newOrder = new Order(customerName, items, "Pending")
orders.push(newOrder);
console.log("Placed Order, Thanks " + customerName);
}

let itemsOrdered = [
    { name: 'latte', quantity: 2 },
    { name: 'croissant', quantity: 1 }
];

// Place the order - testing 3 REMOVE // to test below
//placeOrder("John", itemsOrdered);

//console.log(inventory);
//console.log(orders);

//Task 4 - Create a Function to Calculate Total for an Order

const calculateOrderTotal = (order) => {
    return order.items.reduce((sum, orderedItem) => { // sum total
        let product = inventory.find(x => x.name === orderedItem.name); //find inventory with .find method
        return sum + product.price * orderedItem.quantity; //calc total and add to sum
    }, 0); // ensure sum begins from 0
};

// REMOVE // below to test output
//let total = calculateOrderTotal(orders[0]);
//console.log("John's total is: $" + total);

// Task 5 - Create a Function to Mark an Order as Completed
const completeOrder = (customerName) => {
    let order = orders.find(c => c.customerName === customerName); // find the order to match customers name

    // if statement for completion
    if (order) {
        order.status = "complete";
        console.log (customerName + " order is complete ")
     } else {
console.log("Order not found for " + customerName)
     }
};

// TO TEST REMOVE // BELOW
// completeOrder("John")
// console.log(orders)

// Task 6 - Create a Function to Check Pending Orders
const checkPendingOrders = () => {
for (let i = 0; i < orders.length; i++) { //loop thorugh array
    let order = orders[i];
    
    // if pending, log
    if (order.status === "Pending") {
        console.log("Order pending for", order)}

}
}
// TEST BELOW BY REMOVING //
//checkPendingOrders();

// DISREGARD ANYTHING BELOW THIS--------------------------------------------------------------------------------------------------------


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
 
// for (let i = 0; i < 98; i++) {
//      console.log(i+100)
// } 

// DISREGARD PRACTICE - Program to add first n natural numbers

// let sum = 0
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//     sum += (i+1)
// }
// console.log(" Sum of first " + n + " natural numbers is " + sum)
//