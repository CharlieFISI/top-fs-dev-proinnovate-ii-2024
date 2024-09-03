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

//////////////////////////////////////////////////
/// Exercises Objects
