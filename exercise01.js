const europeanCities = [
    { name: 'Paris', people: 2140526 },
    { name: 'London', people: 8908081 },
    { name: 'Berlin', people: 3769495 },
    { name: 'Madrid', people: 3266126 },
    { name: 'Rome', people: 2870500 },
    { name: 'Amsterdam', people: 872680 },
    { name: 'Vienna', people: 1897491 }
];

/// 1 Calculate the averga of people in this cities
const averagePeople = europeanCities.reduce((acc, cur) => {
    return acc + cur.people;
}, 0) / europeanCities.length;

console.log(averagePeople);

// 2 create a new array with the cities objects in alphabetical order by the city name
const citiesByName = europeanCities.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else if (a.name === b.name) {
        return 0;
    } else if (a.name < b.name) {
        return -1;
    }
});

console.log(citiesByName);

// 3 create a new array with only the names of the cities
const citiesNames = europeanCities.map(city => city.name);
console.log(citiesNames);

// 4 create a new array with the cities that have more than 1M people
const bigCities = europeanCities.filter(city => city.people > 1000000);
console.log(bigCities);
