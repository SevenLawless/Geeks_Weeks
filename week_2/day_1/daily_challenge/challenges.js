let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : { 
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = () => {
  groceries.fruits.forEach(fruit => {
    console.log(`Fruit: ${fruit}`);
  });
};

const cloneGroceries = () => {
    const user = client;
    client = "Betty";
    // user will stay John
    let shopping = groceries;
    shopping.totalPrice = "35$";
    // but groceries.totalPrice also become "35$"
    shopping.other.paid = false;
    // groceries.other.paid will also become false
}

cloneGroceries();