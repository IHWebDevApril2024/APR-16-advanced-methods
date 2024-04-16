// MAP METHOD

const animals = ["dog", "cat", "elephant", "lion", "lizard"];

// RETURNS A NEW ARRAY
const duplicatedAnimals = animals.map((animal) => {
  return "Friendly " + animal; // DON'T FORGET THE RETURN!
});

duplicatedAnimals.push("Friendly whale");
console.log(duplicatedAnimals);
console.log(animals);

// TO DO this with a forEach loop (what we did before):

const newCopy = [];

animals.forEach((animal) => {
  newCopy.push("Dangerous "+animal);
});

console.log(newCopy);