const numbers = [2, 3, 44, 6, 73, 1, 67, 80];

const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0;
});

console.log(oddNumbers);

const people = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 30 },
  { name: "Michael", age: 17 },
  { name: "Emily", age: 22 },
  { name: "David", age: 13 },
];

// We can do it in just one line
const adults = people.filter((person) => person.age >= 18);
// when we have only one condition in just one line we don't need the curly brackets neither the return.
console.log(adults);
