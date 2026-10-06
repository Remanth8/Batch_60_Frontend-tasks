// 1. Mobile Phone
// class Mobile {
//     static brand = "Samsung";
//     static country = "South Korea";
//     constructor(id, model, storage, ram, price, color) {
//         this.mobileId = id;
//         this.mobileModel = model;
//         this.storage = storage;
//         this.ram = ram;
//         this.price = price;
//         this.color = color;
//     }
//     displayDetails() {
//         console.log("Brand ", Mobile.brand);
//         console.log("Country ", Mobile.country);
//         console.log("Mobile ID ", this.mobileId);
//         console.log("Model ", this.mobileModel);
//         console.log("Storage ", this.storage);
//         console.log("RAM ", this.ram);
//         console.log("Price ", this.price);
//         console.log("Color ", this.color);
//     }
// }
// let mobile1 = new Mobile(101, "Galaxy A55", "128GB", "8GB", 35000, "Black");
// console.log("----- Mobile 1 -----");
// mobile1.displayDetails();
// let mobile2 = new Mobile(102, "Galaxy S24", "256GB", "8GB", 65000, "Blue");
// console.log("----- Mobile 2 -----");
// mobile2.displayDetails();
// let mobile3 = new Mobile(103, "Galaxy M35", "128GB", "6GB", 20000, "Green");
// console.log("----- Mobile 3 -----");
// mobile3.displayDetails();
// let mobile4 = new Mobile(104, "Galaxy S24 Ultra", "512GB", "12GB", 120000, "Grey");
// console.log("----- Mobile 4 -----");
// mobile4.displayDetails();

// 2. Restaurant
// class Restaurant {

//     static restaurantName = "Paradise";
//     static city = "Hyderabad";

//     constructor(id, name, type, rating, price, location) {
//         this.restaurantId = id;
//         this.restaurantName = name;
//         this.foodType = type;
//         this.rating = rating;
//         this.price = price;
//         this.location = location;
//     }

//     displayDetails() {
//         console.log("Restaurant Name ", Restaurant.restaurantName);
//         console.log("City ", Restaurant.city);
//         console.log("Restaurant ID ", this.restaurantId);
//         console.log("Name ", this.restaurantName);
//         console.log("Food Type ", this.foodType);
//         console.log("Rating ", this.rating);
//         console.log("Price ", this.price);
//         console.log("Location ", this.location);
//     }
// }

// let restaurant1 = new Restaurant(201, "Biryani House", "Indian", 4.5, 250, "Kukatpally");
// console.log("----- Restaurant 1 -----");
// restaurant1.displayDetails();

// let restaurant2 = new Restaurant(202, "Food Corner", "Chinese", 4.2, 300, "Madhapur");
// console.log("----- Restaurant 2 -----");
// restaurant2.displayDetails();

// let restaurant3 = new Restaurant(203, "Spice Hub", "Indian", 4.4, 200, "Ameerpet");
// console.log("----- Restaurant 3 -----");
// restaurant3.displayDetails();

// let restaurant4 = new Restaurant(204, "Tasty Bites", "Italian", 4.1, 350, "Gachibowli");
// console.log("----- Restaurant 4 -----");
// restaurant4.displayDetails();

// 3. Smart Phone Store Product
class Product {
  static storeName = "Croma";
  static storeCity = "Hyderabad";

  constructor(id, name, category, price, quantity, warranty) {
    this.productId = id;
    this.productName = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
    this.warranty = warranty;
  }

  displayDetails() {
    console.log("Store Name ", Product.storeName);
    console.log("Store City ", Product.storeCity);
    console.log("Product ID ", this.productId);
    console.log("Product Name ", this.productName);
    console.log("Category ", this.category);
    console.log("Price ", this.price);
    console.log("Quantity ", this.quantity);
    console.log("Warranty ", this.warranty);
  }
}

let product1 = new Product(301, "Sony TV", "Television", 45000, 10, "2 Years");
console.log("----- Product 1 -----");
product1.displayDetails();

let product2 = new Product(302, "HP Mouse", "Accessories", 800, 25, "1 Year");
console.log("----- Product 2 -----");
product2.displayDetails();

let product3 = new Product(303, "Canon Camera", "Camera", 55000, 5, "2 Years");
console.log("----- Product 3 -----");
product3.displayDetails();

let product4 = new Product(304, "JBL Speaker", "Audio", 6000, 15, "1 Year");
console.log("----- Product 4 -----");
product4.displayDetails();
