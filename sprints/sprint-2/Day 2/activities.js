//////////////////////////////////////////////////
// JSON Import
const fakeAPI = require("./fakeApiResponse.json");
//////////////////////////////////////////////////
// Activities for arrays
/// Exercises Based on the API Response
//// Beginner
///// 1. map()

function extractCustomerNames(data) {
  return data.map((order) => order.customerName);
}

// console.log(extractCustomerNames(fakeAPI));

///// 2. filter()

function hightValueOrders(data, amount) {
  return data.filter((order) => order.totalAmount > amount);
}

// console.log(hightValueOrders(fakeAPI, 1000));

///// 3. find()

function findOrderById(data, id) {
  return data.find((order) => order.orderId === id);
}

// console.log(findOrderById(fakeAPI, "003"));

///// 4. findIndex()

function findOrderIndexById(data, name) {
  return data.findIndex((order) => order.customerName === name);
}

// console.log(findOrderIndexById(fakeAPI, "Diana Ross"));

///// 5. includes()

function isProductInAnyOrder(orders, product) {
  return orders.some((order) =>
    order.items.some((item) => item.productName.includes(product))
  );
}

// console.log(isProductInAnyOrder(fakeAPI, "Charger"));

//// Intermediate
///// 1. reduce()

function totalAmount(data) {
  return data.reduce((acc, order) => acc + order.totalAmount, 0);
}

// console.log(totalAmount(fakeAPI));

///// 2. flatMap()

function extractProductNames(data) {
  return data.flatMap((order) => order.items.map((item) => item.productName));
}

// console.log(extractProductNames(fakeAPI));

///// 3. slice()

function getLastOrders(data, quantity) {
  return data
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, quantity);
}

// console.log(getLastOrders(fakeAPI, 3));

///// 4. splice()

function removeOrderById(data, id) {
  const index = data.findIndex((order) => order.orderId === id);
  return data.splice(index, 1);
}

// console.log(removeOrderById(fakeAPI, "002"));

///// 5. groupBy()

function groupOrdersByDate(data) {
  return data.reduce((acc, order) => {
    const date = order.date;
    const { date: _, ...orderWithoutDate } = order;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(orderWithoutDate);
    return acc;
  }, {});
}

// console.log(groupOrdersByDate(fakeAPI));

//// Advanced
///// 1. map() and reduce()

function calculateTotalQuantitySold(data) {
  return data
    .flatMap((order) => order.items)
    .reduce((acc, item) => {
      acc[item.productName] = (acc[item.productName] || 0) + 1;
      return acc;
    }, {});
}

// console.log(calculateTotalQuantitySold(fakeAPI));

///// 2. flatMap() and groupBy()

function groupOrdersByCustomer(data) {
  const orders = data.flatMap((order) => ({
    customerName: order.customerName,
    items: order.items,
  }));

  return orders.reduce((acc, order) => {
    const customerName = order.customerName;
    const { customerName: _, ...orderWithoutConsumer } = order;
    if (!acc[customerName]) {
      acc[customerName] = [];
    }
    acc[customerName].push(orderWithoutConsumer);
    return acc;
  }, {});
}

// console.log(groupOrdersByCustomer(fakeAPI));

///// 3. find() and splice()

function updateOrderById(data, id, updatedDetails) {
  const index = data.findIndex((order) => order.orderId === id);
  if (index !== -1) {
    const updatedOrder = { ...data[index], ...updatedDetails };
    return [...data.slice(0, index), updatedOrder, ...data.slice(index + 1)];
  }
  return data;
}

// console.log(updateOrderById(fakeAPI, "002", { totalAmount: 900 }));

///// 4. reduce() and flatMap()

function flattenAndSummarizeItems(data) {
  return data
    .flatMap((order) => order.items)
    .reduce((acc, item) => {
      acc[item.productName] = (acc[item.productName] || 0) + 1;
      return acc;
    }, {});
}

// console.log(flattenAndSummarizeItems(fakeAPI));

///// 5. map() and filter()

function getCustomersWithMultipleOrders(data) {
  const customers = data.filter((order) => order.items.length > 1);

  return customers.map((order) => order.customerName);
}

// console.log(getCustomersWithMultipleOrders(fakeAPI));

/// Exercises Objects
//// Beginner
///// 1. Create a class Book with properties title and author and a method to display the book's details.

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  displayDetails() {
    return `${this.title} by ${this.author}`;
  }
}

// console.log(new Book("The Alchemist", "Paulo Coelho").displayDetails());

///// 2. Create a private property #price in the Product class and add methods to get and set the price.

class ProductA {
  #price;

  constructor(price) {
    this.#price = price;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(price) {
    this.#price = price;
  }
}

// console.log(new ProductA(100).getPrice());

///// 3. Implement a Person class with a method that returns the person's full name using a traditional function.

class PersonA {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// console.log(new PersonA("John", "Doe").getFullName());

///// 4. Create a class Phone with a static method that returns a list of supported models.

class Phone {
  static getSupportedModels() {
    return ["iPhone 12", "Galaxy S21", "Redmi Note 12"];
  }
}

// console.log(Phone.getSupportedModels());

///// 5. Implement a class Computer with an arrow function method that logs the model and year.

class Computer {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  displayDetails = () => {
    return `${this.model} salió en ${this.year}`;
  };
}

// console.log(new Computer("Macbook Pro", 2020).displayDetails());

//// Intermediate
///// 1. Create a class User with a private property #password. Implement methods to validate and update the password.

class UserA {
  #password;

  constructor(password) {
    this.#password = password;
  }

  validatePassword(password) {
    return this.#password === password;
  }

  updatePassword(password) {
    this.#password = password;
  }
}

// const user = new UserA("1234");
// console.log(user.validatePassword("1234"));
// user.updatePassword("12345");
// console.log(user.validatePassword("12345"));

///// 2. Extend a Vehicle class to create a Truck class. Use super() to call the parent constructor and add truck-specific properties.

class VehicleA {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Truck extends VehicleA {
  constructor(make, model, capacity) {
    super(make, model);
    this.capacity = capacity;
  }
}

// console.log(new Truck("Ford", "F150", 5000));

///// 3. Create a House class and define a method that uses an arrow function to log details about the house.

class House {
  constructor(address) {
    this.address = address;
  }

  displayDetails = () => {
    return `La casa se ubica en ${this.address}`;
  };
}

// console.log(new House("123 Main St").displayDetails());

///// 4. Implement a class Employee that inherits from Person class. Override a method using super() to include additional details.

class Person {
  constructor(name) {
    this.name = name;
  }

  displayDetails() {
    return `La persona se llama: ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }

  displayDetails() {
    return `${super.displayDetails()} y trabaja como ${this.role}`;
  }
}

// console.log(new Employee("John Doe", "Developer").displayDetails());

///// 5. Build a class Gadget with both public and private properties. Include methods that demonstrate the difference between traditional and arrow functions for accessing properties.

class Gadget {
  #price;
  model;

  constructor(price, model) {
    this.#price = price;
    this.model = model;
  }

  getPrice() {
    return this.#price;
  }

  getModel = () => {
    return this.model;
  };
}

// const gadget = new Gadget(100, "iPhone");
// console.log(gadget.getPrice());

//// Advanced
///// 1. Create a class hierarchy where Vehicle is the base class, and Car and Bike are derived classes. Use super() and private properties effectively.

class Vehicle {
  #make;

  constructor(make) {
    this.#make = make;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make);
    this.model = model;
  }
}

class Bike extends Vehicle {
  constructor(make, type) {
    super(make);
    this.type = type;
  }
}

// console.log(new Car("Ford", "Fiesta"));
// console.log(new Bike("Yamaha", "Sport"));

///// 2. Implement a class BankAccount with private properties for balance and methods for deposit, withdrawal, and balance inquiry. Include validation checks.

class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// const account = new BankAccount(100);
// console.log(account.getBalance());
// account.deposit(50);
// console.log(account.getBalance());

///// 3. Create a system where a User class has methods that utilize this in both traditional and arrow functions. Demonstrate how context affects method behavior.

class UserB {
  constructor(name) {
    this.name = name;
  }

  displayName() {
    return this.name;
  }

  displayArrowName = () => {
    return this.name;
  };
}

// console.log(new UserB("John").displayName());
// console.log(new UserB("John").displayArrowName());

///// 4. Design a class Organization that contains a nested structure of departments. Use methods and properties to calculate overall budget allocation.

class Organization {
  constructor(departments) {
    this.departments = departments;
  }

  calculateBudget() {
    return this.departments.reduce(
      (acc, department) => acc + department.budget,
      0
    );
  }
}

// console.log(
//   new Organization([
//     { name: "HR", budget: 1000 },
//     { name: "IT", budget: 2000 },
//   ]).calculateBudget()
// );

///// 5. Build a real-world example like a shopping cart system using classes, private properties, inheritance, and method overriding. Implement context-sensitive features using this and arrow functions.

class Product {
  #price;

  constructor(price) {
    this.#price = price;
  }

  getPrice() {
    return this.#price;
  }
}

class DiscountedProduct extends Product {
  #discount;

  constructor(price, discount) {
    super(price);
    this.#discount = discount;
  }

  getPrice() {
    return super.getPrice() * (1 - this.#discount);
  }
}

class Cart {
  #items;

  constructor() {
    this.#items = [];
  }

  addProduct(product) {
    this.#items.push(product);
  }

  getTotal() {
    return this.#items.reduce((acc, product) => acc + product.getPrice(), 0);
  }
}

class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class ShoppingCart extends Cart {
  #user;

  constructor(user) {
    super();
    this.#user = user;
  }

  getTotal() {
    const total = super.getTotal();
    console.log(`Total for ${this.#user.getName()}: $${total}`);
    return total;
  }
}

const user = new User("John");
const cart = new ShoppingCart(user);

cart.addProduct(new Product(100));
cart.addProduct(new DiscountedProduct(200, 0.1));

cart.getTotal();
