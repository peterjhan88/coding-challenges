// Fuzzy Slippers
/*
Your friend is a veterinarian and wants to know how many pet slippers
he needs to knit before Christmas.
Your friend looks after three different species: dogs, cats, and chickens.
He asks, very politely, if you can write him a function that calculates
how many slippers he needs to make and provides you with the subtotal of
each species of animal. Please write a function for your friend that returns
the number of slippers that he will be knitting!
*/
const howManySlippers = (dogs, cats, chickens) => {
  return (dogs + cats) * 4 + chickens * 2;
};

// Amazing Anagrams
/*
Anagrams are words that contain the exact same letters in the same quantity.
Robin challenges you to write a function that accepts two words and returns
true if they are anagrams.
BONUS: write the function so that it can receive any number of words and
returns true if all of them are anagrams of each other.
*/
const checkAnagram = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) {
    return false;
  }
  let lettersOfFirstWord = firstWord.split("");
  let lettersOfSecondWord = secondWord.split("");
  lettersOfFirstWord = lettersOfFirstWord.sort();
  lettersOfSecondWord = lettersOfSecondWord.sort();
  for (let index = 0; index < lettersOfFirstWord.length; index++) {
    if (lettersOfFirstWord[index] !== lettersOfSecondWord[index]) {
      return false;
    }
  }
  return true;
};
const checkAnagramBonus = (...args) => {
  const wordLength = args[0].length;
  for (let index = 0; index < args.length; index++) {
    if (args[index].length !== wordLength) {
      return false;
    }
  }
  let wordForComparison = args[0];
  for (let indexForArgs = 1; indexForArgs < args.length; indexForArgs++) {
    if (!checkAnagram(wordForComparison, args[indexForArgs])) {
      return false;
    }
  }
  return true;
};

// Tax Season
/*
Hip hip hooray! It’s tax season! Your CPA has requested that you provide
your tax amounts in cents this year.Rather than using pen and paper,
wouldn’t it be faster for you to write a function that accepts a dollar amount
and a tax percentage and returns the taxed amount in cents ?
*/
const taxAmount = (dollarAmount, taxRate) => {
  return (dollarAmount * taxRate).toFixed(0);
};


// Finding Factorials
/*
Do you know what a factorial of a number is? You can get the factorial of
a number by multiplying all the numbers less than or equal to that number.
As an example, 5! (5 factorial), is equal to 5 X 4 X 3 X 2 X 1 = 120.
Would you please write a solution for Robin that returns the factorial of that number?
** In Recursion
*/
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(--num);
}

/*
You've been quarantined and have become addicted to online shopping and
start hoarding ramen. Much to your surprise, you discover that your favorite
online marketplace is not secure and displays your credit card details in
plain text. Being the good samaritan that you are, you decide to write a
function for them that takes in a credit card number and returns a string
that replaces all but the last four digits with stars,
like this: "************1111". Make sure that the number of stars matches
with the exact number of digits being replaced.
*/
const secureCreditCardNumber = cardNumber => {
  const re = /(\d*)(\d{4,4}$)/;
  let securedNumber = cardNumber.replace(re, (match, p1, p2) => {
    let hidingText = "";
    for (let i = 0; i < p1.length; i++) {
      hidingText += "*";
    }
    return hidingText + p2;
  });
  return securedNumber;
}

// other way
const secureCreditCardNumberOtherWay = cardNumber => {
  const re = /(?<first>\d*)(?<lastFour>\d{4,4}$)/;
  let matched = cardNumber.match(re);
  return matched.groups.first.split("").reduce((acc, elem) => acc += "*", "") + matched.groups.lastFour;
}


// Startup Name Generator
/*
You are a co-founder to a new, unnamed startup. After bickering
for hours over what the venture's name should be, the founding team
makes a compromise. They will take the first letter of each of their
names, capitalized, and sorted in alphabetical order - this will be
the name of the startup. Because your colleagues have pulled
wo all-nighters in a row, you decide to take one for the team and
write a function that will return this new name.
*/

const startupName = (nameOne, nameTwo) => {
  let newNameArray = [];
  newNameArray.push(nameOne.substring(0, 1).toUpperCase());
  newNameArray.push(nameTwo.substring(0, 1).toUpperCase());
  return newNameArray.sort().join("");
};


// Loose Change
/*
Having no coffee left in the house, you run out to grab some,
hastily leaving your wallet behind. You come to this realization
after the barista hands over your Ristretto, and pull out some
loose change from your pocket. Embarrassed, you go home empty-handed
and start on a function to save you next time. Your function will
accept a total amount due and an array that represents the change in
your pocket, and holds values in this order: pennies, nickels, dimes,
quarters. For example, if you provide this array: [1,2,3,4],
it means that the contents in your pocket consist of
one penny, two nickels, three dimes, and four quarters.
If you have enough change to cover your order, the function will return true.
Otherwise, it'll return false. Good luck!
*/

const enoughCoins = (amount, changes) => {
  let inMyPocket =
    changes[0] + changes[1] * 5 + changes[2] * 10 + changes[3] * 25;
  // assuming the amount is given in dollar
  return inMyPocket >= amount * 100;
};


// Math Wiz AKA The Calculator
/*
You're at an in-person interview for a software engineering role that
you applied to last week. The interview starts off as expected, until
the hiring manager asks you this: "If I give you any two numbers and
ask you to add them together, subtract one from the other, multiply
them, or divide one from the other, could you do it?" You pause at first,
because you aren't a math genius. But then you realize something - this
is a technical interview! You could just write a function that receives
two numbers, an operator ( +, -, x, or / ) and returns the correct answer.
Right? Let's ace this interview! Don't forget, dividing by 0 is an illegal
operation, so make sure to return a message when that case appears.
*/
const simpleMath = (numberOne, operator, numberTwo) => {
  let num1 = parseFloat(numberOne);
  let num2 = parseFloat(numberTwo);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Dvidiing a nuumber by 0 is not allowed";
      }
      return num1 / num2;
    default:
      return "Invalid Operator! (+,-,x,/ only!)";
  }
};
