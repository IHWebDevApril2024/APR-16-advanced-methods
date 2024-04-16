// SORT

const numbers = [0, 15, 12, 321, 4, 7, 8, 79, 5, 654, 6, 2, 13, 2, 1];

const sortedNumbers = numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
});

console.log(sortedNumbers);

numbers.sort((a, b) => a - b);

console.log(numbers); // Careful! This method modifies the origina array too

const africanCities = [
  "Lagos",
  "Cairo",
  "Nairobi",
  "Johannesburg",
  "Casablanca",
];

africanCities.sort().reverse();


africanCities.sort((a,b)=> a.length - b.length)

console.log(africanCities);