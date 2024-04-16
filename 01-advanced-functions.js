// Declare a function

function myFunction(parameter1, parameter2) {
  // the code for the function goes here
}

const myfunctionConst = function (parameter1) {
  // this also works
};

const myArrowFunctions = (parameter1, parameter2) => {
  // we store the function in a variable
};

const arrayOfNames = [
  "John",
  "Emma",
  "Michael",
  "Sophia",
  "William",
  "Olivia",
  "James",
  "Ava",
  "Benjamin",
  "Isabella",
];

arrayOfNames.forEach((name, index, theArray) => {
  console.log(name, index, theArray);
});

function standUp() {
  console.log("You are standing up!");
}

function walkOut() {
  console.log("You are leaving the campus");
}

function turnRight(direction) {
  if (direction === "right") {
    console.log("Turn Right!");
  } else {
    console.log("Turn Left!");
  }
}

function goToSonora() {
  console.log("Enter in sonora and ask for a BEER!");
}

function getABeer(callback1, callback2, callback3, callback4) {
  callback1();
  callback2();
  callback3("right");
  callback4();
}

getABeer(standUp, walkOut, turnRight, goToSonora);

function isUserAdmin(user) {
  if (user.role === "Admin") {
    return true;
  }
  else{
    return false
  }
}

const user1 = {
    name: "Marcel",
    role: "Teacher"
}

console.log("FUNCTION TO CHECK IF MARINA IS ADMIN: ", isUserAdmin(user1));

function deleteAllUsers(user, checkIfAdminCallback) {
    if(checkIfAdminCallback(user)){
        console.log("All the users have been deleted");
    }else{
        console.log("You don't have an admin role");
    }
}

deleteAllUsers(user1, isUserAdmin);
