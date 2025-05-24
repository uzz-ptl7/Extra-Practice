// Fruit Basket Counter (Very Simple Version)

let fruitBasket = {};

// Add fruits
function addFruit(fruit, quantity) {
  if (fruitBasket[fruit]) {
    fruitBasket[fruit] += quantity;
  } else {
    fruitBasket[fruit] = quantity;
  }
  console.log(`Added ${quantity} ${fruit}(s).`);
}

// Remove fruits
function removeFruit(fruit, quantity) {
  if (fruitBasket[fruit]) {
    if (fruitBasket[fruit] >= quantity) {
      fruitBasket[fruit] -= quantity;
      if (fruitBasket[fruit] === 0) delete fruitBasket[fruit];
      console.log(`Removed ${quantity} ${fruit}(s).`);
    } else {
      console.log(
        `Not enough ${fruit}(s) to remove. Only ${fruitBasket[fruit]} available.`
      );
    }
  } else {
    console.log(`${fruit} not found in the basket.`);
  }
}

// Display total fruits
function displayTotalFruits() {
  let total = 0;
  console.log("\nFruit basket contents:");
  for (let fruit in fruitBasket) {
    console.log(`- ${fruit}: ${fruitBasket[fruit]}`);
    total += fruitBasket[fruit];
  }
  console.log(`Total fruits: ${total}\n`);
}

// Manually Call Functions Example actions
addFruit("Apple", 4);
addFruit("Banana", 2);
removeFruit("Apple", 1);
displayTotalFruits();
