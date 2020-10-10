//Arrow Functions

//Rewrite the following functions as arrow functions
function sum(num1, num2) {
    return num1 + num2;
  }
  
  //# arrow function that does the same thing as the above function
  const sum = (num1, num2) => {
    return num1 + num2;
  };
  
  function sayMyName(name) {
    return `Your name is ${name}`;
  }
  
  //# arrow function that doesn't need () because it only has one parameter
  let sayMyName = (name) => {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
    return `Your name is ${name}`;
  };
  
  //Rewrite the following function as an arrow function on a single line.
  function favoriteSong(song) {
    return `My favorite song is ${song}`;
  }
  
  //# arrow function without {} or a return keyword because the return is implied
  const favoriteSong = (song) => `My favorite song is ${song}`;
  
  //Higher Order Methods
  // .forEach
  
  let numArr = [1, 2, 3, 4, 5];
  const stringArr = ["Andrew", "Banana", "Tesla", "Carbon Fiber"];
  
  //This is a basic for loop that console logs numbers 1 - 5.
  for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
  }
  
  //Write a function using .forEach that accomplishes the same thing.
  numArr.forEach((element, index, array) => {
    //# element is the same thing as numArr[index] or array[index]
    console.log(element);
    console.log(index);
    console.log(array[index]);
  });
  
  //Below is a function we wrote yesterday for building a sentence from an array of words.  Modify it to work with a .forEach method.
  const wordsArr = [`Won't`, `you`, `be`, `my`, `neighbor`];
  
  function makeMeASentence(arr) {
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
      newStr = `${newStr} ${arr[i]}`;
    }
  
    return newStr;
  }
  
  makeMeASentence(wordsArr);
  
  // .map
  
  const friends = ["Jonathan", "Josh", "Brandon"];
  //Here is an array of friends.  Write a function called coolFriends that takes in an array of names and returns a new array stating that they are cool.  For example, a friend named Charles would be returned as 'Charles is cool'.  Use .map
  
  const ages = [22, 25, 27, 30];
  //Write a function called happyBirthday that will take in an array of ages.  This function should return a new array of all of the ages incremented by one.  Use .map
  
  const dogs = [
    {
      breed: "Poodle",
      goodBoy: true,
      name: "Timmy",
    },
    {
      breed: "Lab",
      goodBoy: true,
      name: "Sandwich",
    },
    {
      breed: "Yorkie",
      goodBoy: false,
      name: "Josh",
    },
  ];
  
  //Above is an array containing objects, each describing a dog.  Write a function called goodBoys which will take in an array of dog objects.  The function should return a new array containing a sentence describing each dog and whether they are a good boy or not.
  
  const goodBoys = (dogArr) => {
    const dogDescriptions = dogArr.map((element, index, array) => {
      return `${element.name} is a ${element.breed}, and they are ${
        element.goodBoy ? " " : "not "
      }a good boy`;
    });
    //#wants us to return a new array with a sentence describing each dog
  };
  
  // .filter
  
  const nums = [1, 2, 3, 4, 5, 6];
  //Using .filter, create a new array containing only the even numbers
  //# filter works by returning either true or false in the callback to include or exclude the element, respectively
  nums.filter((element, index, array) => {
    //#if we return true, the element stays in the array
    return element % 2 === 0;
  });
  
  const turtles = ["snapping", "leatherback", "ninja", "green", "sea"];
  //Using .filter, create a new array containing only the turtles that start with s.
  
  //Using .filter and the dogs array above, create a new array containing only the good boys.
  
  // .reduce
  
  const moreNums = [12, 22, 14, 23, 20, 1001];
  //Write a function called sumNums that takes in an array of numbers.  Use .reduce to return the sum of all the numbers.
  
  moreNums.reduce((acc, element, index, array) => {
    // if(element % 2 === 0){
    //   return acc + element
    // } else {
    //   return acc
    // }
  
    return element % 2 === 0 ? acc + element : acc;
  });
  
  const friendsArr = [
    {
      name: "Jonathan",
      age: 27,
    },
    {
      name: "Josh",
      age: 28,
    },
    {
      name: "Brandon",
      age: 35,
    },
  ];
  //Above is an array of friends.  Use .reduce to create a single string listing all of the friends.  The final result should look like: 'The friends are Jonathan, Josh, and Brandon'
  
  friendsArr.reduce((acc, element, index, array) => {
    if (index + 1 === array.length) {
      return `${acc}and ${element}.`;
    } else {
      return `${acc} ${element}, `;
    }
  }, "The friends are ");
  
  // ARROW FUNCTIONS IN ARRAY METHODS
  
  const ages2 = [22, 23, 45, 26, 87];
  
  const birthday2 = ages.map((element) => ++element);
  
  //OBJECTS
  
  //delete
  
  const andrew = {
    name: "Andrew",
    age: 27,
    biggestFear: {
      animal: "Spider",
      crisis: "Existential",
    },
  };
  
  //Delete the biggestFear property from the above object.
  
  //for in loops
  
  const andrewObj = {
    name: "Andrew",
    age: 27,
    biggestFear: "Spiders",
    smallestFear: "Evil babies",
    favorites: {
      number: 38,
      person: "Becca",
      brand: "J Crew",
    },
  };
  
  //Using a for in loop change the value of any key in the andrew object above containing the word fear to 'Nothing'
  
  for (let key in andrewObj) {
    console.log(key);
  }
  
  //Using a nested for in loop, change the value of every key in the favorites object to 'Adam Driver'
  
  //Object.assign
  
  const person = {
    name: "Billy Bob",
    age: 59,
    handsome: "Maybe?",
  };
  //Using Object.assign create a new object called billyBob that will be a copy of the person object above.
  
  const info = {
    tall: true,
    married: true,
    favoriteCity: "St. Petersburg",
  };
  //Again using Object.assign, add all of the keys in the info object to the billyBob object.
  
  //Spread Operator (...)
  
  const smallNums = [1, 2, 3, 4, 5, 6];
  const bigNums = [77, 889, 99, 10000];
  
  //Using the spread operator, make a copy of the smallNums array.
  
  //Using the spread operator make a copy of both the smallNums and bigNums array as a single array.
  
  const person2 = {
    name: "Charles",
    age: 106,
    married: false,
  };
  
  const info2 = {
    married: true,
    tall: true,
    handsome: "Maybe?",
  };
  
  //Using the spread operator, make a copy of the person2 object above called charles
  
  //Again using the spread opeartor, make a copy of the charles object called charlesInfo with all of the keys from the info2 object included.
  
  const charlesInfo = { ...charles, ...info2 };
  
  // console.log(charlesInfo)
  
  //destructuring
  
  const andrew2 = {
    name: "Andrew",
    birthday: "May 29",
    email: "andrew@andrew.com",
    age: 27,
    biggestFear: "Spiders",
  };
  
  const brandon = {
    name: "Brandon",
    birthday: "August 6",
    email: "bran@don.com",
  };
  
  // Destructure the birthday and email properties from the andrew2 object.
  
  // Destructure the birthday and email properties from the brandon object.  You will need to alias the variables to avoid duplicate declarations.
  
  //NESTING
  
  const duplicateNums = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9];
  //Using a nested for loop, remove all duplicates from the array above.
  
  //# one for loop starts at index 0, other one starts 1 in front of wherever the first for loop is
  for (let i = 0; i < duplicateNums.length; i++) {
    for (let j = i + 1; j < duplicateNums.length; j++) {
      if (duplicateNums[i] === duplicateNums[j]) {
        //#this is where we remove the duplicate at index j
        duplicateNums.splice(j, 1);
      }
    }
  }
  
  //# When to use FOREACH: if you need to directly change the data in an array and don't want a copy out
  
  //# When to use MAP: if you need to change the structure or do something to the data in an array and still keep it all in an array of the same size
  
  //# When to use a FILTER: if you don't need all the data in an array, you just want to keep some of it that satisfies a certain condition (ex. divisible by 2)
  
  //# When to use a REDUCE: if you need to sum or combine all the information in an array into one value - whether that value is a string, an object, or just a number
  