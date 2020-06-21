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
        return "Dviding a number by 0 is not allowed";
      }
      return num1 / num2;
    default:
      return "Invalid Operator! (+,-,x,/ only!)";
  }
};


// Diary of a Psychopath
/*
You are a newbie detective investigating a murder scene in the boardroom
at the Macrosoft Corp. While searching for clues, you discover a red notebook.
Inside of the notebook are long journal entries with inverted messages.
At that moment, you remembered from your profiler father’s advice that you could
stand in front of the mirror to see the messages. However, you have not slept
for 3 days in a row...and haven't showered either. Because you really don't want
to see your face, you decide that you would rather build an app that can take in
a message string and return the reversed message for you. Now you just need to
come up with a function to build your app - and don't take the shortcut using
the "reverse" method ;) Please reverse this message found in the spooky journal:
.uoy fo lla naht ynapmoc retteb a ekam nac I .ynapmoc siht ta OEC eht eb ot evresed I
*/
const reverseString = text => {
  let reversed = "";
  for (let index = text.length - 1; index >= 0; index--) {
    reversed += text[index];
  }
  return reversed;
}


// Housewarming Preparation
/*
You just got hired into a new engineering position - congratulations!
The employer required you relocate, so you moved into a new apartment
with a bunch of old typical boring picture frames. Before you even
think about hosting a housewarming party with your new coworkers, you
might want to decorate your living room with eccentric picture frames
that you can create using your coding skills. You wish to build a
machine that prints out a frame with the provided width, height,
and any character as an input. For example, if you were to build
a 4 x 4 frame with the # symbol, your frame would look like:

[["####"], ["# #"], ["# #"], ["####"]]

In this case, for all the enclosed brackets, there should 4 characters
printed, and only the start and end of the bracket should have the # character
printed - the remaining two characters should be two spaces. If the number
were five, for example, we should display the two brackets each started and
ending with # symbols and with three spaces in between.

Since you do not own any small photos, you need to make sure that your
machine won't make a frame if the width or height is 3 or less.
*/
const pictureFrame = (width, height, symbol) => {
  if (width <= 3 || height <= 3) {
    return "Width and/or height is too small. Must be greater than 3.";
  }
  let frame = [];

  let topAndBottom = "";
  for (let index = 0; index < width; index++) {
    topAndBottom += symbol;
  }

  let middlePart = "";
  for (let index = 1; index < width - 1; index++) {
    middlePart += " ";
  }
  middlePart = symbol + middlePart + symbol;

  let tempArray = [];
  tempArray.push(topAndBottom);
  frame.push(tempArray, tempArray);

  for (let vertical = 1; vertical < height - 1; vertical++) {
    tempArray = [];
    tempArray.push(middlePart);
    frame.splice(1, 0, tempArray);
  }
  return frame;
}

// answer by staff of Robin
// function frameMaker(width, height, char) {
//   if (width <= 3 || height <= 3) {
//     return "You can't make a frame!";
//   }
//   let frame = [];
//   for (let i = 0; i < height; i++) {
//     if (i === 0 || i === height - 1) frame.push([char.repeat(width)]);
//     else frame.push([char + " ".repeat(width - 2) + char]);
//   }
//   return frame;
// }


// Serious Diet for Blind Date
/*
Spring is here and your friend calls to see if you are interested in meeting
someone for a blind date next month.You have been a loner for so long - solo
for 3 years - and even gained 30 pounds.You are determined to meet the person
looking your best, so you decide to cut meals and do intensive cardio.You want
to track how often your daily caloric intake is lower than the day before and
daily hours spent excercising exceeds those from the previous day.If so, you
will mark it as a success day.Create a function that returns the total number
of success days.
*/

const extremeDiet = (recordsOfDiet) => {
  // assuming the user will input array of arrays
  // where the array is consist of daily calories taken and
  // hours of exercises
  /*
     ex) [  { calories:2000,
            exercise:0.5 },
            { calories:2010,
            exercise:1 },
            { calories:1900,
            exercise:1.2 },...]
    */
  if (recordsOfDiet.length <= 1) {
    return "Insufficient Data";
  }
  let successfulDiet = [];
  for (let index = 1; index < recordsOfDiet.length; index++) {
    let caloriesCheck =
      recordsOfDiet[index].calories < recordsOfDiet[index - 1].calories;
    let exerciseCheck =
      recordsOfDiet[index].exercise > recordsOfDiet[index - 1].exercise;
    if (caloriesCheck && exerciseCheck) {
      successfulDiet.push(true);
    }
  }
  return successfulDiet.length;
};
// console.log(
//   extremeDiet([
//     { calories: 2000, exercise: 0.5 },
//     { calories: 2010, exercise: 1 },
//     { calories: 1900, exercise: 1.2 },
//   ])
// );


// Big O Notation Episode I
/*
During your second round interview with a senior engineer, she asks
you to determine the time complexity for the following function:

const countUpAndDown = (n) => {

 console.log("You are going up!");

 for (let i = 1; i < n; i++) {console.log(i);}

 console.log("At the top!\nGoing down...");

 for (let j = n-1; j >= 0; j--) {console.log(j);}

 console.log("Back down. Bye!");

 }

You have 5 minutes to think about it and tell her what the time complexity is and why?
*/

// My Answer
/*
Big-O of provided function is 2n+3 which roughly equivalent O(n)
Because there are two simple loops which will operate 'n' times each and three simple commands.
*/

// Robin's Answer
/*
  As n gets larger, the function has n operations in the first loop. Similarly,
  as n grows larger, the function also has n operations in the second loop. It's
  simply performing the same operations in reverse order going back down.
  Therefore, you may think O(2n). However, we engineers don't care about
  multiples of n. We only care about the big picture. Hence, the function
  operates with the time complexity of O(n).
*/


// Shadow Scrabble
/*
Stuck in quarantine...still...and all alone, you decide to play a game of
Scrabble against YOURSELF - rather, against your shadow. That pesky shadow
of yours is known to be quite the Scrabble ace. In order to make sure that
you have the best chance at winning, you decide to create a function that
receives an array of words. The function should score the words and return
an array of the words (or word) with the highest score. Please use the
table below for reference:
*/
const wordsToScore = (words) => {
  const scoreTable = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 2,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };
  let scores = words.map((word) =>
    word
      .split("")
      .map((letter) => scoreTable[letter.toLowerCase()])
      .reduce((acc, charScore) => acc + charScore)
  );
  let forSorting = [...scores];
  let indexOfWordsWithHighestScore = [];
  let highestScore = forSorting.sort((a, b) => a - b).pop();
  for (let index = 0; index < scores.length; index++) {
    if (scores[index] === highestScore) {
      indexOfWordsWithHighestScore.push(index);
    }
  }
  let wordsWithHighestScore = indexOfWordsWithHighestScore.map(
    (elem) => words[elem]
  );
  return wordsWithHighestScore;
};
// console.log(
//   wordsToScore(["Zoo", "ant", "ZOO", "fooodies", "apples", "orange"])
// );

// answer of Robin's
// function winningWords(arr) {
//   const score = arr => {
//     [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 2, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10][arr.charCodeAt() - 97];
//     const wordScore = word =>[...word].reduce((a, b) => a + score(b), 0);
//     const highScore = Math.max(...arr.map(wordScore));
//     return arr.filter(word => wordScore(word) === highScore)
//   }
// }
// console.log(winningWords(["did", "you", "solve", "the", "challenge"]));


// Perfect Palindromes
/*
Sheltered at home, you are so bored out of your mind that you start thinking
about palindromes. A palindrome, in our case, is a number that reads the same
in reverse as it reads normally. Robin challenges you to write a function
that returns the closest palindrome to any number of your choice. If your
number is exactly in between two palindromes, return the smaller number. If
the number you chose IS a palindrome, return itself. Have fun!
*/
// const numberPalindrome = (yourNumber) => {
//   let stringNumber = yourNumber.toString(10).split("");
//   for (let index = 0; index < stringNumber.length / 2; index++) {
//     if (stringNumber[index] !== stringNumber[stringNumber.length - 1 - index]) {
//       let tempNumber = [...stringNumber];
//       tempNumber[stringNumber.length - 1 - index] = tempNumber[index];
//       return numberPalindrome(parseInt(tempNumber.join(""), 10));
//     }
//   }
//   return yourNumber;
// }
const numberPalindrome = (yourNumber) => {
  let stringNumber = yourNumber.toString(10);
  while (stringNumber !== stringNumber.split('').reverse().join('') ) {
    stringNumber = (parseInt(stringNumber, 10)+1).toString(10);
  }
  const palindromePositive = parseInt(stringNumber, 10);
  stringNumber = yourNumber.toString(10);
  while (stringNumber !== stringNumber.split('').reverse().join('') && parseInt(stringNumber, 10)>0) {
    stringNumber = (parseInt(stringNumber, 10) - 1).toString(10);
  }
  const palindromeNegative = parseInt(stringNumber, 10);
  return (yourNumber-palindromeNegative)<(palindromePositive-yourNumber)? palindromeNegative : palindromePositive;
}


// FizzBuzZFuzz
/*
You've been preparing for your next big interview, and have gone over the classic
FizzBuzz problem over and over. You decide to visit your Robin dashboard, and it
looks like the question of the day is not FizzBuzz, but FizzBuzzFuzz! Here are the
rules:
Write a function that will write out all the numbers from 1 to 150 to the console.
For multiples of 3, instead of writing "3", you should write "Fizz".
When a number is a multiple of "5", you should write "Buzz".
If a number is a multiple of "7", print "Fuzz".
For multiples of 7 AND 3, write out "FizzFuzz".
When a number is a multiple of 7 AND 5, write out "BuzzFuzz".
When a number is a multiple of 3,5, AND 7, you should write out "FizzBuzZFuzz".
*/
const FizzBuzzFuzz = () => {
  const multi3 = "Fizz";
  const multi5 = "Buzz";
  const multi7 = "Fuzz";
  for(let index=1; index<=150; index++) {
    let consoleOutput = "";
    if(index%3==0){
      consoleOutput += multi3;
    }
    if(index%5==0){
      consoleOutput += multi5;
    }
    if(index%7==0){
      consoleOutput += multi7;
    }
    if (index % 3 == 0 || index % 5 == 0 || index % 7 == 0){
      console.log(index, consoleOutput);
    };
  }
}


// Tweeting Thieves
/*
Traveling in Cairo, Egypt, with the Twitter executive team, you encounter
thieves in the middle of a desert.These thieves heard about your travels
from an informant a month prior to your trip, so they knew the great Twitter
team was going to be there.It turns out that the thieves were former interviewees
at Twitter who didn't get hired into the software engineering positions that
they had applied for. With anger, they ask you the following question:

Write a function that accepts a positive number X.

The function should console log a pyramid shape with X levels using
the #(Twitter's invention) character. Make sure the pyramid has spaces
on both the left and right hand sides

For example,

  pyramid(1)

'#'

pyramid(2)

' # '

'###'

pyramid(3)

' #  '

' ### '

'#####'

If you get it right, the thieves will steal your money. If you get it wrong,
the thieves will steal your money AND you will be forced to give them
engineering jobs at Twitter.
*/
const pyramid = number => {
  let pyramidComponents = [];
  for (let index = 1; index <= number; index++) {
    let stringPyramid = "#".repeat( index*2 - 1);
    pyramidComponents.push(stringPyramid);
  }
  pyramidComponents = pyramidComponents.map(element => {
    return " ".repeat(number - Math.round(element.length / 2, 0)) + element + " ".repeat(number - Math.round(element.length / 2, 0))
  });
  return pyramidComponents.join("\n");
}

// Robin's
// const pyramidBuilder = (n, row = 0, level = '') => {
//   if (row === n) {
//     return;
//   } if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramidBuilder(n, row + 1);
//   }
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramidBuilder(n, row, level + add);
// }

const pyramidRecursive = (number, row = 0) => {
  if (row === number) {
    return;
  }
  let stringPyramid = "";
  for (let index = 1; index <= row + 1; index++) {
    stringPyramid = "#".repeat(index * 2 - 1);
  }
  stringPyramid = " ".repeat(number - Math.round(stringPyramid.length / 2))
                  + stringPyramid
                  + " ".repeat(number - Math.round(stringPyramid.length / 2));
  console.log(stringPyramid);
  return pyramidRecursive(number, row + 1);
}


// Desperate for TP
/*
You've just received intel that your local market has received a huge shipment of
toilet paper! In desperate need, you rush out to the store. Upon arrival, you
discover that there is an enormously large line of people waiting to get in to
the store. You step into the queue and start to wait. While you wait, you being
to think about data structures and come up with a challenge to keep you busy.
Your mission: create a queue data structure. Remember, queues are FIFO - first in
first out - in nature. Your queue should be a class that has the methods
"add" and "remove". Adding to the queue should store an element until it is removed.
*/

class Inventory {
  constructor() {
    this.que = [];
  }
  add(item) {
    this.que.push(item);
  }
  remove() {
    this.que.splice(0, 1);
  }
}

// const test = new Inventory();
// test.add("toilet paper1");
// test.add("Toilet Paper2");
// test.add("Toilet Paper3");
// test.add("T.P.4");
// test.remove();
// console.log(test.que);


// Back to the Basics
/*
Coding is just like playing an instrument. If you want to get better,
you need to have a solid concept of even the most basic things! Robin
wants to challenge you to go back to the basics and write a function
that determines if a given string is a palindrome or not. In case you
need a refresher on palindromes: a palindrome is a string that is
read the same front to back and back to front. For example, words like
Mom, Kayak, and noon are palindromes. Palindromes can also be longer
strings made up of multiple words, such as: "Was it a cat I saw"
*/
const palindromeString = word => {
  return word.match(/\w/g).join('').toLowerCase() === word.match(/\w/g).reverse().join('').toLowerCase();
}
// console.log(palindromeString("Was it a cat I saw"));
// console.log(palindromeString("Mom"));
// console.log(palindromeString("Kayak"));


// Formatting Phone Numbers
/*
You're building a social networking platform and save your user's phone
numbers as integers. However, when you display the phone number on their
profile, it isn't formatted and looks pretty ugly. It's time to write
a function that takes in 10 integers and returns the phone number as a
formatted string. The string would look something like this: (123) 456-7890
*/
const formatPhoneNumber = (number) => {
  return number.toString(10).replace(/(\d{3,3})(\d{3,3})(\d{4,4})/, "($1) $2-$3");
};


// Virtual Vegas Part 1
/*
Due to the fact that everywhere - including your favorite casino - is closed
during the COVID pandemic, you decide to do some online gambling. Lucky for
you, there is a major flaw in their system, and you can easily hit the
jackpot - you just need to write a function to do so. This function should
take in an array (each array element represents a slot item) and return true
if all of the elements are the same. For example isJackpot(["@", "@", "@", "@"]
will return true. If you want to win the jackpot, you just need to call the
function with matching elements. Get ready, because Virtual Vegas
Part 2 won't be as easy ;)
*/
const isJackpot = array => {
  for (let index = 1; index < array.length; index++) {
    if (array[index] !== array[index - 1]) {
      return false;
    }
  }
  return true;
}
