// Step 1: Personalized Greeting
let userName = prompt("Please enter your first name:") || "Guest";

// Step 2: Welcome Message
alert(`Welcome to EatNow cafe, ${userName}!`);

// Step 3: Display Menu Items
const menuItems = ["Grilled Chicken", "Pasta Carbonara", "Caesar Salad", "Margherita Pizza", "Tomato Soup"];

function displayMenu(items) {
    console.log("Menu:");
    items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

displayMenu(menuItems);

// Step 4: Adding a New Dish
const newDish = prompt("Please suggest a new dish to add to the menu:");
if (newDish === "") {
    console.log("Invalid input. No dish was added.");
} else if (newDish) {
    menuItems.push(newDish);
    console.log("Menu updated successfully. Here's the updated menu:");
    displayMenu(menuItems);
} else {
    console.log("No dish was added.");
}
