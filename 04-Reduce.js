// REDUCE METHOD FOR ARRAYS

const numbers = [1, 2, 3, 4, 5];

console.log(
  numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  })
);

const expenses = [
  { amount: 100, type: "expense" },
  { amount: 200, type: "expense" },
  { amount: 500, type: "expense" },
  { amount: 1000, type: "income" },
  { amount: 300, type: "income" },
];

const totalBudget = expenses.reduce((accumulator, currentValue) => {
  if (currentValue.type === "expense") {
    return accumulator - currentValue.amount;
  } else if (currentValue.type === "income") {
    return accumulator + currentValue.amount;
  }
}, 0);

console.log(totalBudget);

const words = ["Hello", "World", "This", "is", "Amazing"];

const resultString = words.reduce((acc, cur) => {
  return acc + " " + cur;
});

console.log(resultString);

const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

const averageCalorires = menu.reduce((acc, cur) => {
    return acc + cur.calories
},0)/menu.length;

console.log(averageCalorires);
