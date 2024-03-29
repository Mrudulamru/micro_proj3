const food = require("./food.json");

// list all the food items
const all = food;
console.log("---All---");
console.log(all);

// list all the food items with category vegetables
const vegetables = food.filter((f) => f.category.includes("Vegetable"));
console.log("---Vegetables---");
console.log(vegetables);

// list all the food items with category fruit
const fruits = food.filter((f) => f.category.includes("Fruit"));
console.log("---Fruits---");
console.log(fruits);

// list all the food items with category protien
const protien = food.filter((f) => f.category.includes("Protein"));
console.log("---Protein---");
console.log(protien);

// list all the food items with category nuts
const nuts = food.filter((f) => f.category.includes("Nuts"));
console.log("---Nuts---");
console.log(nuts);

// list all the food items with category grains
const grains = food.filter((f) => f.category.includes("Grain"));
console.log("---Grains---");
console.log(grains);

// list all the food items with category dairy
const dairy = food.filter((f) => f.category.includes("Dairy"));
console.log("---Dairy---");
console.log(dairy);

// list all the food items with calorie above 100
const calorieAbove100 = food.filter((f) => f.calorie > 100);
console.log("---Calorie Above 100---");
console.log(calorieAbove100);

// list all the food items with calorie below 100
const calorieBelow100 = food.filter((f) => f.calorie < 100);
console.log("---Calorie Below 100---");
console.log(calorieBelow100);

// list all the food items with highest protien content to lowest
const sortedByCalore = food.sort((a, b) => b.calorie - a.calorie);
console.log("---Sorted By Calorie---");
console.log(sortedByCalore);

// list all the food items with lowest cab content to highest
const sortedByCab = food.sort((a, b) => a.cab - b.cab);
console.log("---Sorted By Cab---");
console.log(sortedByCab);