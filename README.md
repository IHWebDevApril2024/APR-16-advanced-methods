# Arrow functions and callbacks

## Arrow functions
An arrow function is a shorter syntax for writing function expressions. 
    
```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```
As you can see, the arrow function is shorter. If the expression is more than one line, you need to use curly braces and return the value, but if it's only one line, you can omit the curly braces and the return statement. Whatever we add after the arrow is returned by the function.

## Callbacks
A callback function is a function that is passed as an argument to another function. This function is executed inside the other function. 
A lot of array methods in JavaScript use callbacks. For example, the `forEach` method. We can use the arrow syntax to pass a callback function to the `forEach` method. 

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number);
});
```

In this example, we pass an arrow function to the `forEach` method. This function is executed for each element in the array. The arrow function takes one argument, which is the current element in the array.

# setTimeout and setInterval
The `setTimeout` method is used to execute a function after a specified amount of time. The first argument is the function to execute and the second argument is the time in milliseconds. 

```javascript
setTimeout(() => {
    console.log('Hello, world!');
}, 2000);
```
This code is going to print 'Hello, world!' after 2 seconds. The code outside the `setTimeout` method is executed immediately, no matter how long the timeout is.

The `setInterval` method is used to execute a function at specified intervals. The first argument is the function to execute and the second argument is the time in milliseconds. 

```javascript
setInterval(() => {
    console.log('Hello, world!');
}, 2000);
```

This code is going to run forever, printing 'Hello, world!' every 2 seconds.

Remember the error we tried to solve in class to stop the timer? We can use the `clearInterval` method to stop the it. 

```javascript
let timer = 0;
const intervalId = setInterval(() => {
    console.log('Hello, world!');
    timer++;
    // in case you need a condition to stop the timer, make sure to clear the interval inside the setInterval, then we are going to check te condition every time the interval runs
    if (timer === 5) {
        clearInterval(intervalId);
    }

}, 2000);

```	

# Advanced array methods
## Map
The `map` method creates a new array with the results of calling a provided function on every element in the array. 

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```
As you can see, we are storing the result of the `map` method in a new array called `doubledNumbers`. This does not modify the original array, it creates a new one.

## Reduce
The `reduce` method needs a callback function and an initial value. The callback function takes two arguments, the accumulator and the current element. The accumulator is the value that is returned by the function and is passed to the next iteration.   

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // 15
```
In this example, at the beggining, the accumulator is 1 and the current value is 2. The result of the function is 3, which is passed as the accumulator to the next iteration. This process is repeated until the end of the array.

We can also add a second argument to the `reduce` method, which is the initial value of the accumulator. This is useful when we work with arrays of objects. 

```javascript
const cities = [
    { name: 'Madrid', population: 3223000 },
    { name: 'Barcelona', population: 1620343 },
    { name: 'Valencia', population: 794288 },
    { name: 'Seville', population: 688711 }
];

const totalPopulation = cities.reduce((accumulator, city) => accumulator + city.population, 0);

console.log(totalPopulation); 
```
This way we start the accumulator with a value of 0 and on each iteration we add the population of the current city. If we don't provide an initial value, the first element of the array is used as the initial value of the accumulator, in that case we will not get the expected result.

## Filter

The `filter` method creates a new array with all elements that pass the test implemented by the provided function. 

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

In this example, we are storing the result of the `filter` method in a new array called `evenNumbers`. This array contains only the elements that are even.

## Sort

The `sort` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending. 

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

We have to use `a - b` to sort the array in ascending order. If we want to sort the array in descending order, we have to use `b - a`. That's because the `sort` method needs a return value. If the return value is negative, `a` comes before `b`, if it's positive, `b` comes before `a`, and if it's zero, the order is unchanged.
In class we saw the complexity of the `sort` method, it's going to check absolutely every element with every other element. 

