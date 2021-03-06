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
    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1,
    j: 8, k: 5, l: 2, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1,
    s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10,
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


// Call In to Win
/*
Being locked in during the pandemic, you have somehow managed to watch everything
on Netflix, Hulu, and probably everything on Youtube as well. You decide to listen
to your favorite radio station...wait...do you even HAVE a favorite radio station?
Anyways...the radio host suddenly announces that every caller to dial in within
the next ten minutes will win a prize! You have no idea what the prize is, so you
decide to dial this number: "888-YOU-RANG ". Unfortunately, you don't remember which
letters correspond to which numbers. Why don't you write a function that will take
a phone number with letters and return it, formatted, with all numbers. It could
look something like this:

formatPhone("888-YOU-RANG") will return 888-968-7264

Use this chart for reference:

0: none
1: none
2: ABC
3: DEF
4: GHI
5: JKL
6: MNO
7: PQRS
8: TUV
9: WXYZ
*/
const formatPhone = string => {
  const keypad = {
    "ABC": 2,
    "DEF": 3,
    "GHI": 4,
    "JKL": 5,
    "MNO": 6,
    "PQRS": 7,
    "TUV": 8,
    "XWYZ": 9
  }
  let phoneNumbers = string.split("-").map(
    word => {
      if (word.match(/[A-Z]/)) {
        word = word.split("").map(char => {
          for (let key in keypad) {
            let re = new RegExp(char, "gi");
            if (key.match(re)) {
              return keypad[key];
            }
          }
        })
        return word.join("");
      }
      return word;
    }).join("-");
  return phoneNumbers;
}

// Robin's
// const formatPhone = phone => {
//   let letters = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUW", "XYZ"];
//   return phone.replace(/[A-Z]/g, (match, i) => letters.indexOf(lettrs.find(e => e.includes(match))) +2);
// }


// How Much Longer?
/*
How many mores days are left until you think the COVID-19 pandemic will end?
Why not write a function to tell you so you don't have to calculate it
yourself! Your function should be structured like below - it should take two
dates and return the number of days between the two
*/
const daysToFreedom = (date1, date2) => {
  //assuming date is received in "06/23/2020" format
  let jsDate1 = new Date(date1.split('/')[2], date1.split('/')[0], date1.split('/')[1]);
  let jsDate2 = new Date(date2.split('/')[2], date2.split('/')[0], date2.split('/')[1]);
  return Math.floor((jsDate2 - jsDate1) / (1000 * 60 * 60 * 24));
}
// console.log(daysToFreedom("06/23/2020", "12/31/2020"), "days till liberation...");


// Poker Panic
/*
Your friends have invited you to play a virtual game of poker! How exciting...
until you realize that you know nothing about Poker. Don't worry, this Robin
challenge will at least help you figure out if you or your friends have a
Full House. A Full House is a hand of 5 cards that have one pair of cards
and one three of a kind. Let's write a function that takes in an array of 5
cards and tells us if the hand is a full house or not!

isFullHouse(["K", "K", "A", "K", "A"] ) should return true
isFullHouse(["A","J","10","3","3"]) should return false
*/
const isFullHouse = cards => {
  let cardsString = cards.join('');
  let cardChecked = [];
  let triple = false;
  let pair = false;
  for (let index = 0; index < cards.length; index++) {
    if (!cardChecked.includes(cards[index])) {
      if (cardChecked.length > 2) {
        return false;
      }
      cardChecked.push(cards[index]);
      let re = new RegExp(cards[index], 'gi');
      let sameKind = cardsString.match(re).length;
      if (sameKind === 2) {
        pair = true;
      } else if (sameKind === 3) {
        triple = true;
      } else {
        return false;
      }
    }
  }
  return triple && pair;
}

// Robin's code
// function isFullHouse(hand) {
//   hand.sort();
//   return hand[0] === hand[2] && hand[3] === hand[4] || hand[0] === hand[1] && hand[2] === hand[4];
// }

// Back to School
/*
Do you remember learning your multiplication tables? For some, it was
really easy. For others, they still have to perform multiplication
using odd tricks. Today, we're all lucky, because we can practice by
writing code that will print all the multiplication tables from 1 to X.
The format could look something like this: '1 x 1 = 1' . Have fun taking
a trip down memory lane!
*/
const multiplicationTable = (x) => {
  for (let index = 1; index <= x; index++) {
    for (let left = 1; left <= 9; left++) {
      console.log(`${index} x ${left} = ${index * left}`);
    }
  }
};


// Supercalifragilisticexpialidocious Vowels!
/*
Supercalifragilisticexpialidocious - now you can say it backwards which is
Dociousaliexpisticfragicalirupus! But that's going a bit too far, don't you
think? This is not a string reversal challenge - did you think it was? Instead,
can you write a function that returns the number of vowels in a string?
In particular, the team at Robin REALLY wants to know how many vowels are in "
supercalifragilisticexpialidocious"!
*/
const howManyVowels = word => {
  return word.match(/[aeiou]/gi).length;
}


// Frustrating Flies
/*
*buzz buzz buzz* Flies...again? Didn't you just get rid of them this morning?
In a world like the one seen in Tron, you could just write a function to get
rid of each "fly" you see. Why don't you do the same: write a function that
removes each "fly" you see in a string, as well as any letter from the word
"fly" (f, l, or y), just to be safe! For example, if you passed in a string
like "flyflyfflllgoflyyyyflynefffff", it would return the string "gone".
If there are no "fly"s or traces of "fly"s, return the string
"No flies here!" Give it a try!
*/
const removeFly = word => {
  return word.match(/[^fly]/gi).join('');
}


// Bubble Sort Challenge
/*
Have you heard about bubble sort? Bubble sort is a simple sorting algorithm.
This sorting algorithm is comparison-based. Each pair of adjacent elements are
compared and are swapped if they are not in order. This is a frequently asked
level 1 question asked by FAANG. Before you get a call from one of them, why
not practice it today? Please implement bubble sort and explain when this
algorithm is least suitable and why.
*/

/*
Bubble sort compares one element to next element,
and if the next element is greater than the one
before they switch their positions. Then compares
next element and the one after that. These
operations happens n times, since the size of the
array is n, and happens n times again, to check
the entire array is in ascending order.
This means its big O notation is n square. And
other sorting algorithms performs better.
*/
const bubbleSort = array => {
  let swapped = false;
  do {
    swapped = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        let temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

// Robin's answer
// function mybubbleSort(myarr) {
//   for (let i = 0; i < myarr.length; i++) {
//     for (let j = 0; j < (myarr.length - i - 1); j++) {
//       if (myarr[j] > myarr[j + 1]) {
//         const lesser = myarr[j + 1];
//         myarr[j + 1] = myarr[j];
//         myarr[j] = lesser;
//       }
//     }
//   }
//   return myarr;
// }
// This algorithm is not suitable for large data sets as its average
// and worst case complexity are of Ο(n).


// What's in the box!?
/*
What's in the box!? Let's check first if there is actually something
IN the box before we figure out WHAT it is...

Check if the asterisk is inside of the box. The function you write
must return true only if the asterisk is INSIDE - not if it is anywhere
else on or outside of the box.

For example:

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) ➞ true

inBox([
  "*####",
  "# #",
  "#  #*",
  "####"
]) ➞ false
*/
const inBoxRobin = box => {
  // function name changed same question was answered in edabit.js
  let asterisk = 0;
  for (let index = 0; index < box.length; index++) {
    if (index === 0 || index === box.length - 1) {
      if (box[index].match(/\*/g)) {
        return false;
      }
    } else {
      if (box[index].startsWith("*") || box[index].endsWith("*")) {
        return false
      } else {
        if (box[index].match(/\*/)) {
          asterisk++;
        }
      }
    }
  }
  return asterisk === 0 ? false : true;
}


// Balancing Act
/*
Have you heard about balanced words? If a word is balanced,
the sum of the values on the left-hand side of the word is
equal to the sum of the values on the right-hand side. Each
letter's value comes from its position in the alphabet
(a=1, b=2, etc.) and can be summed to determine the left and
right hand sums. If a word has an odd number of characters,
the middle character should be ignored. Can you write a function
that determines whether or not a word is balanced?
*/
const isItBalanced = word => {
  // a=97
  let midPoint = word.length/2;
  let leftSide = word.toLowerCase().substring(0, Math.floor(midPoint)).split('').reduce((acc, val) => acc + val.charCodeAt() - 96, 0);
  let rightSide = word.toLowerCase().substring(Math.round(midPoint, 0)).split('').reduce((acc, val) => acc + val.charCodeAt() - 96, 0);
  return leftSide === rightSide;
}


// Amazon Interview Series I
/*
Robin team recently interviewed a former software engineer at Amazon
and was able to get some of the actual interview questions asked in
the last 5 years.

You are given an array of [j1, j2, j3, j4, j5, jn …, k1, k2, k3, k4, k5, kn],
how would you arrange the given array to [j1, k1, j2, k2, …]?
*/
const sortByNumberThenLetter = array => {
  return array.sort((a, b) => parseInt(a.match(/\d/g).join(''), 10) - parseInt(b.match(/\d/g).join(''), 10));
}


// Decode Me!
/*
You've been seeing strange series of flashing lights coming from a window
in the house across your street. One night, it dawns on you - it's morse
code! Quick - write a function that will decode the morse string and return
the actual message.

let morseCode = {
    "-----" : "0",
    ".----" : "1",
    "..---" : "2",
    "...--" : "3",
    "....-" : "4",
    "....." : "5",
    "-...." : "6",
    "--..." : "7",
    "---.." : "8",
    "----." : "9",
    ".-" : "a",
    "-..." : "b",
    "-.-." : "c",
    "-.." : "d",
    "." : "e",
    "..-." : "f",
    "--." : "g",
    "...." : "h",
    ".." : "i",
    ".---" : "j",
    "-.-" : "k",
    ".-.." : "l",
    "--" : "m",
    "-." : "n",
    "---" : "o",
    ".--." : "p",
    "--.-" : "q",
    ".-." : "r",
    "..." : "s",
    "-" : "t",
    "..-" : "u",
    "...-" : "v",
    ".--" : "w",
    "-..-" : "x",
    "-.--" : "y",
    "--.." : "z",
    ".-.-.-" : ".",
    "--..--" : ",",
    "..--.." : "?",
    "-.-.--" : "!",
    "-....-" : "-",
    "-..-." : "/",
    ".--.-." : "@",
    "-.--." : "(",
    "-.--.-" : ")",
    " " : " ",
    "---..." : ":",
    ".----." : "'",
  }
*/
const morseCodeConsversion = code => {
  let morseCode = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "-.-.--": "!",
    "-....-": "-",
    "-..-.": "/",
    ".--.-.": "@",
    "-.--.": "(",
    "-.--.-": ")",
    " ": " ",
    "---...": ":",
    ".----.": "'",
  }
  return code.replace(/([\.\-])+/g, char => morseCode[char]);
}


// Google Interview Series I
/*
Here is one of the questions brought to our attention from an engineer who
had an interview at Google.

"I would like you to write a function to check how many times the number 8
appears from 1 to 10,000. Instead of counting how many numbers contain the
number 8, you need to count all instances that "8" appears.

In case you may ask the question to me, I'd like to mention first that, for
instance, 1882 should be counted as 2, 8880 as 3)."
*/
const countEight = number => {
  let appearanceOfEight = 0;
  for (let index = 1; index <= number; index++) {
    let forCheck = index.toString().match(/8/g);
    if (forCheck) {
      appearanceOfEight += forCheck.length;
    }
  }
  return appearanceOfEight;
}


// Shortest Distance
/*
Write a function that, when given a list of integers, prints the pair of numbers
with the shortest number of steps in between. In this case, you can assume that
the array of points is already sorted. For example, if S = {1, 3, 4, 8, 13, 17, 20}
is given, the result will be (3, 4).
*/
const closestTwoNumber = array => {
  let difference = Infinity;
  let result = [];
  for (let index = 1; index < array.length; index++) {
    let currentDifference = array[index] - array[index - 1];
    if (currentDifference <= difference) {
      difference = currentDifference;
      result = [array[index - 1], array[index]];
    }
  }
  return result;
}


// But is it Magic?
/*
You've heard about Magic Squares, right? A magic square is one big square split
into separate squares (usually it is nine separate squares, but can be more),
each containing a unique number. Each horizontal, vertical, and diagonal row MUST
add up to the same number in order for it to be considered a magic square.

Now, it's up to you to write a function that accepts a two-dimensional array and
checks if it is a magic square or not.

Examples:

isMagic([
  [6, 1, 8],
  [7, 5, 3],
  [2, 9, 4]
]) ➞ true


isMagic([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ false
*/
const isMagic = array => {
  let expectedTotal = array[0].reduce((acc, val) => acc + val, 0);
  let incrementalSum = 0;
  let decrementalSum = 0;
  for (let index = 0; index < array.length; index++) {
    // row+col
    let rowSum = array[index].reduce((acc, val) => acc + val, 0);
    let colSum = 0;
    for (let row = 0; row < array[index].length; row++) {
      colSum += array[row][index];
    }
    if (rowSum !== expectedTotal || colSum !== colSum) {
      return false;
    }
    // diagonal
    incrementalSum += array[index][index];
    decrementalSum += array[index][array.length - 1 - index];
  }
  if (incrementalSum !== decrementalSum) {
    return false;
  }
  return true;
}

// Robin's Answer to But is it Magic?
// const sum = (arr) => arr.reduce((total, num) => total + num, 0);
// const getColumn = (arr, x) => arr.map((row) => row[x]);
// const isMagicSquare = (arr) => {
//   const rowSums = arr.map(sum);
//   const colSums = arr.map((_, y) => sum(getColumn(arr, y)));
//   const diagSums = arr.reduce(
//     ([diag1, diag2], _, y) => [
//       diag1 + arr[y][y],
//       diag2 + arr[y][arr.length - 1 - y],
//     ],
//     [0, 0]
//   );
//   const allSums = rowSums.concat(colSums).concat(diagSums);
//   return new Set(allSums).size === 1;
// };


// LoveLY Adverbs
/*
An adverb is typically any word that ends in 'ly'. Can you write
a function that counts the number of words that ends in 'ly'.
For this problem, even if the word is an adjective, it's still
okay to count it as true. However, you must not count the word if
it starts or contains 'ly' - it MUST be at the end. Happy coding!
*/
const countAdverb = (sentence) => {
  let adverbs = sentence.match(/\s?\w+ly/gi);
  return adverbs ? adverbs.length : 0;
};

// Robin's
// function countAdverbs(sentence) {
//   return sentence.split(/ly\b/).length - 1;
// }

// Thanos' Infinity Gauntlet
/*
Thanos believes that in order to balance the program, half of the
elements in the list should be randomly deleted.Write an Infinity
Gauntlet program that randomly deletes and returns half of the
elements in the input list when Thanos bounces a finger (when
  running the program).(Since it is randomly deleted, the output
    value must be different every time even if the input value is
    the same)

Input example: [2, 3, 1, 6, 5, 7]
Output example 1: [2, 5, 7]
Output example 2: [3, 6, 5]
*/
const thanos = array => {
  // assuming the array will always be given in even length
  const half = array.length / 2;
  for (let index = 0; index < half; index++) {
    array.splice(Math.floor(Math.random() * array.length), 1);
  }
  return array;
}


// ONLY NUMBERS WELCOMED!
/*
How are our lovely number people doing today? We're going to have
an exclusive numbers-only party next week. You can bring any type
of friends that wear "String" clothes as long as they are real number.
As we expect the infinite number of numbers to come to the party, we
should rather build a scanner that will scan every guest and validate
whether they are a real numbers. If any number brings a fake guest,
it will be kicked out of our world! Can your team build a special
function that will be used in the scanner? Please remember, all guests
will be wearing string clothes.

For example,
numScanner("2.2") ➞ true
numScanner("1208") ➞ true
numScanner("number") ➞ false
numScanner("0x71e") ➞ false
numScanner("2.5.9") ➞ false
*/
const numScanner = num => {
  return num.match(/^(\d+\.|\.)?\d+$/) ? true : false
}


// Professor Parentheses
/*
For some odd reason, your computer science professor has become obsessed with
parentheses - she probably spent too much time coding these days... In any case,
she wants you to write a function that will turn each group of parentheses in a
string into separate groups - these groups should be balanced.

For example:

group("()()()") ➞ ["()", "()", "()"]

group("((())())(()(()()))") ➞ ["((())())", "(()(()()))"]
*/
const group = groups => {
  let result = [];
  let count = 0;
  let oneGroup = "";
  for (let index = 0; index < groups.length; index++) {
    let current = groups[index];
    oneGroup += groups[index];
    if (current === "(") {
      count++;
    } else {
      count--;
      if (count === 0) {
        result.push(oneGroup);
        oneGroup = "";
      }
    }
  }
  return result;
}


// Sum Them Up
/*
Beginner programmer John Doe wants to make a program that adds and outputs
each positive digit entered by the user (range is int). For instance, the
result of 5528 is 20 and the result of 6714283 is 31.
*/
const digitSum = (integer) => {
  return integer
    .toString(10)
    .split("")
    .reduce((total, cur) => total + parseInt(cur, 10), 0);
};


// Happy Hex
/*
It looks like you just became a freelancer and snagged your first client.
Unfortunately, they came to you with NO design and NO idea on what colors
they want to use. Why don't you come up with a function that returns a random
hexadecimal color code so you don't have to think about it either.
*/
const randomHexadecimal = () => {
  const THE_RANGE = '0123456789ABCDEF';
  const SIX_DIGITS = 6;
  let randomColor = '#';
  for (let index = 0; index < SIX_DIGITS; index++) {
    randomColor += THE_RANGE[Math.floor(Math.random() * THE_RANGE.length)]
  }
  return randomColor
}

// Robin's
// const generateHex = () => {
//   let n = (Math.random() * 0xfffff * 1000000).toString(16);
//   return "#" + n.slice(0, 6);
// };


// Binary Search Challenge
/*
Here's a fundamental search challenge for you to tackle! Binary search
algorithms are often efficient, and they work by repeatedly dividing
the list in half and working with the portion that may contain the item
being looked for until the possible location is narrowed down to just
one element. Try giving it a shot!
*/
const binarySearch = (array, target) => {
  if (array.length <= 1) {
    return array[0] === target ? "found" : "not found";
  }
  let midPoint = Math.floor(array.length / 2);
  if (array[midPoint] === target) {
    return "found";
  } else if (array[midPoint] > target) {
    return binarySearch(array.slice(0, midPoint), target);
  } else {
    return binarySearch(array.slice(midPoint + 1), target);
  }
}

//Robin's
// const binarySearch = (array, target) => {
//   let start = 0;
//   let end = array.length - 1;
//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);
//     if (target === array[middle]) {
//       return console.log("Item was found at index " + middle);
//     }
//     if (target > array[middle]) {
//       start = middle + 1;
//     }
//     if (target < array[middle]) {
//       end = middle - 1;
//     } else {
//       console.log("Item not found yet.")
//     }
//   }
//   console.log("The item was not found!");
// }


// Validating URLs
/*
While working on your latest app, you encounter a bug: your code lets
users type in ANYTHING when they should be inputting a valid URL. As
a software engineer, you should always be writing code assuming that
your users may not input the value that you are expecting. In this case,
why don't you write a function that checks if a string is a valid URL
or not?
*/
const checkURL = (userInput) => {
  const re = new RegExp(/^((http|https)\:\/\/)?(www\.)?[\w|\d]+\.[\w|\d]+/);
  return userInput.match(re) ? true : false;
};

// Robin's
// function isURL(str) {
//   const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
//   if (regexp.test(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }


// Card Shark!
/*
You've been practicing for an upcoming poker tournament. In terms of how
to play the game, you're all set. But don't you want to impress everyone
with some fancy deck shuffling? You can practice by creating a function
that shuffles an array of items. The values can be whatever you would
like - feel free to replicate an entire card deck if you wish!
*/
const shuffleCards = () => {
  const suits = "♠◇♥♧";
  const numbers = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",");
  let deck = [];
  for (let index = 0; index < suits.length; index++) {
    for (let order = 0; order < numbers.length; order++) {
      deck.push(suits[index] + numbers[order]);
    }
  }
  let shuffled = [];
  while (deck.length > 0) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    shuffled.push(deck.splice(randomIndex, 1));
  }
  return shuffled;
}


// Just the Last
/*
Time for something short and sweet - please write a function that removes
the last vowel from each word in a sentence. Only remove the LAST instance
of a vowel. For example, "moon" would turn into "mon".
*/
const removeLastVowel = sentence => {
  let words = sentence.split(' ');
  let desiredSentence = words.map(
    word => word.replace(/(\w*)([aeiou])(\w*)/i, (match, p1, p2, p3) => p1 + p3)
  ).join(' ');
  return desiredSentence;
}


// Hungry Number
/*
Do you remember the joke "Why was 6 afraid of 7? Because 7, 8, 9!" ? Well,
that joke was wrong. A number can only eat the number to the right of it if
the number is SMALLER. Once it eats that number, it turns into the sum of
itself and that number. In our case, only one number will be eating - this
number is the first in the array. You need to create a function that returns
the final array after this number has finished eating.
*/
const numberEatingNumber = numbers => {
  let sum = numbers[0];
  let index = 1;
  while (index < numbers.length && sum > numbers[index]) {
    sum += numbers[index++];
  }
  return [sum, ...numbers.slice(index)];
}



// Fun Fibonacci
/*
Each term in the Fibonacci sequence is the sum of the two preceding terms.
If you start with 1 and 2, this sequence is:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

What is the total number of all even numbers in the Fibonacci sequence that
are less than 4,000,000?
*/
const countEvensInFibonacci = (limit) => {
  let [first, second, next] = [1, 1, 0];
  let numberOfEvens = 0;
  while (next < limit) {
    next = first + second;
    first = second;
    second = next;
    if (next % 2 === 0) {
      numberOfEvens++;
    }
  }
  return numberOfEvens;
};


// Camel Potholes
/*
Some programming languages like Python prefers Pothole case over Camel case.

For instance: in JavaScript, you’d write yellowMonkey but in Python you’d write
yellow_monkey. In case you forget, you should just build a function where you
convert any string in Camel case to Pothole case.
*/
const changeToPothole = camelString => {
  if(!camelString){
    return "";
  }
  return camelString.replace(/([A-Z0-9][0-9]*)/g, (match, p1) => "_" + p1.toLowerCase());
}


// More Morse
/*
Write a program that decodes the received Morse Code (dot: .dash:-) in
string format and outputs it in English sentences. It is separated by
one space between letters and two spaces between words.

Use the given interpreted morse cases as your diction and decode the
following: ".... . ... .-.. . . .--. ... ...- . .-. -.-- .-.. .- - .".

You should see: “He sleeps very late.”
*/
const decipherMorse = morseCodes => {
  const morseTable = morseCode = {
    "-----": "0", ".----": "1", "..---": "2",
    "...--": "3", "....-": "4", ".....": "5",
    "-....": "6", "--...": "7", "---..": "8",
    "----.": "9",

    ".-": "a",    "-...": "b",  "-.-.": "c",
    "-..": "d",   ".": "e",     "..-.": "f",
    "--.": "g",   "....": "h",  "..": "i",
    ".---": "j",  "-.-": "k",   ".-..": "l",
    "--": "m",    "-.": "n",    "---": "o",
    ".--.": "p",  "--.-": "q",  ".-.": "r",
    "...": "s",   "-": "t",     "..-": "u",
    "...-": "v",  ".--": "w",   "-..-": "x",
    "-.--": "y",  "--..": "z"
  };
  let deciphered = morseCodes.split(' ').map(signal => "" === signal ? " " : morseTable[signal]);
  return deciphered.join('');
}


// Lost Socks
/*
While doing laundry, you notice that your socks are all mixed up and
you can't tell if you have all matching pairs or not. Write a function
that returns the number of sock pairs you find in the pile. Two instances
of the same letter, in our case, will represent a sock pair.
For example, "ss".

pairs("ammtaxt") --> 3
*/
const countPairs = someString => {
  let pairs = someString.split('').sort().join('').match(/([a-z])\1/gi);
  return pairs ? pairs.length : 0;
}


// Do you love me?
/*
You've most likely heard of the game Loves me, loves me not. Someone has a
flower - each time the pluck off a petal, they say "Loves me"...then the
next time they pluck off a flower, they say "Loves me not"... and so on and
so on until they pull off the last petal. Whatever phrase they speak out when
they pull off the last petal determines whether someone they have interest in
loves them back or not.

Write a function to simulate this game! Pass in a number of petals.
Return "Loves me, Loves me not, Loves me...etc". On the LAST phrase,
write it in ALL CAPS.

doYouLoveMe(4) ==> "Loves me, Loves me not, Loves me, LOVES ME NOT"
*/
const doYouLoveMe = numberOfPetals => {
  let love = "Loves me";
  let noLove = "Loves me not";
  let result = [];
  for (let index = 0; index < numberOfPetals; index++) {
    if (index % 2 === 0) {
      result.push(love);
    } else {
      result.push(noLove);
    }
  }
  result[numberOfPetals - 1] = result[numberOfPetals - 1].toUpperCase();
  return result.join(", ");
}


// Ditch the Strangers
/*
Let's look at a long string of words. If you see a word one time, it is considered
a stranger. Once you've seen it three times, that word becomes an acquaintance.
If you see it five times, it then becomes a friend.

You can write a function to determine who your friends and acquaintances are.
This function will read in a string and return an array of two arrays. The first array
holds all the acquaintance words in the order that they became an acquaintance. The
second array holds all of the friend words in the order that they became friends.
If a word is in the friend array, it should not be in the acquaintance array.
*/
const acquaintanceOrFriend = sentence => {
  let words = sentence.split(' ');
  let uniqueWords = [];
  let commonWords = [];
  for (let index = 0; index < words.length; index++) {
    let currentWord = words[index].toLowerCase();
    if (uniqueWords.includes(currentWord)) {
      let indexOfCommonWord = uniqueWords.indexOf(currentWord);
      commonWords.push(currentWord);
      uniqueWords.splice(indexOfCommonWord, 1);
    } else {
      uniqueWords.push(currentWord);
    }
  }
  let result = `
    Received Sentence : "${sentence}"
    \nUnique words are : [${uniqueWords.join(", ")}]
    \nCommon words are : [${commonWords.join(", ")}]
    `
  return result;
}


// Split the Bill
/*
You and your friend go out to eat. You order dinner and she orders dessert.
You decide to split the bill - you pay for the food items and she pays only
for the dessert items.

If you have two arrays, one with the type of dishes ordered and one with the
corresponding price, create a function that returns an array where the first
element is the amount that YOU pay and the second element is that amount that
YOUR FRIEND pays.

ex)

splitTheBill(["D", "D", "F", "D"], [1, 1, 3, 2]) ==> [3, 4]
*/
const splitTheBill = (food, price) => {
  let bill = [0, 0];
  for (let index = 0; index < food.length; index++) {
    let foodType = food[index];
    foodType === "F" ? bill[0] += price[index] : bill[1] += price[index];
  }
  return bill;
}


// Be Unique
/*
Can you write a function that takes an array of values and remove all duplicate elements
in the array? Make sure to return the array with only the unique values remaining.
*/
const onlyOneOfEach = array => {
  let uniqueSet = new Set();
  array.map(element => uniqueSet.add(element));
  let finalArray = [];
  uniqueSet.forEach(element => finalArray.push(element))
  return finalArray;
}

// What Century are YOU Living In?
/*
In trying to come up with an insult for your old-fashioned friend (jokingly, of course),
you ask "What century are you even from?" This made you think about how to convert a year
into century format - and you have no idea! After doing a little research, you decide to
come up with a function to save other people from your misery in the future. Please write
a function that takes in a year and returns the corresponding century. You will only be
allowed to input years from 1000 - 2010.
*/
const convertToCentury = year => {
  if (year >= 1000 && year <= 2010) {
    let century = Math.floor(year / 100) + 1;
    if (century === 21) {
      return `${century}st century`;
    }
    return `${century}th century`
  }
  return "Invalid Input";
}


// How much happiness?
/*
Today you are tasked with calculating how much happiness there is. How can you do that?
By counting the number of smiley faces in an array of strings! You should write a function
that accepts an array of strings and returns the number of smiley faces inside it.
A smiley face is something that:

Has eyes - eyes are : or ;
Has or doesn't have a nose. A nose is - or ~
Has a mouth. A mouth is ) or D
*/
const checkSmile = (stringFace="") => {
  const re = new RegExp(/[:;][-~]?[\)D]/g);
  let check = stringFace.match(re);
  return check ? check.length : 0;
}


// Who's online?
/*
Write a function that returns the number of users who are online in your slack channel.
Please include the following features:

1) If nobody is online, return "There is nobody online."

2) If one person is online, return "username online"

3) If there are two people online, return "username and username2 are online

4) If there are more than two people,
return "username, username2, and # more are online."
So, if there were 6 people total online, you could
return "username, username2, and 4 more are online."
*/
const whoIsOnline = (users = []) => {
  let result = "";
  let numberOfUsers = users.length;
  switch (numberOfUsers) {
    case 0:
      result = 'There is nobody online.';
      break;
    case 1:
      result = `${users[0]} online.`;
      break;
    case 2:
      result = `${users[0]} and ${users[1]} are online.`;
      break;
    default:
      result = `${users[0]}, ${users[1]}, and ${numberOfUsers - 2} more are online.`
      break;
  }
  return result;
}


// binary search
const binarySearchV2 = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    let middleValue = array[middle];
    if (target === middleValue) {
      return `${target} is located at index ${middle}`;
    }
    if (target < middleValue) {
      end = middle-1;
    }
    if (target > middleValue) {
      start = middle+1;
    }
  }
  return `${target} not found`;
}


// Up & Down
/*
Write a function that accepts a string and returns the string with
alternating case. For example, "Hi there" would turn into "hI tHeRe".
Make sure to ignore spaces!
*/
const alternateCase = sentence => {
  let lowerCase = false;
  let words = sentence.split(' ');
  return words.map(word => {
    return word.split('').map(
      letter => {
        lowerCase = !lowerCase;
        if (lowerCase) {
          return letter.toLowerCase();
        } else {
          return letter.toUpperCase();
        }
      }).join('')
  }).join(' ');
}


// Palindromes - Refresher!
/*
Palindromes come up a lot during technical interviews.
A numerical palindrome is a number that reads the same
in reverse as it reads normally.
Can you remember how to write a function that returns
the closest palindrome to any number of your choice?
If your number is exactly in between two palindromes,
return the smaller number.
If the number you chose IS a palindrome, return itself.
Have fun!
*/
const checkNumberPalindrome = num => {
  if (num < 0) {
    return false;
  }
  let strNum = num.toString();
  return strNum === strNum.split('').reverse().join('');
}

const nearestNumPalindrome = num => {
  if (checkNumberPalindrome(num)) {
    return num;
  }
  let countUpward = 0;
  let countDownward = 0;
  let numGoingUp = num;
  let numGoingDown = num;
  while (!checkNumberPalindrome(numGoingUp) || !checkNumberPalindrome(numGoingDown)) {
    if (!checkNumberPalindrome(numGoingUp)) {
      numGoingUp++;
      countUpward++;
    }
    if (!checkNumberPalindrome(numGoingDown)) {
      numGoingDown--;
      countDownward++;
    }
  }
  return countDownward <= countUpward ? numGoingDown : numGoingUp;
}


// More Binary Search!
/*
Now is the time for review! If you have been solving problems daily,
then you've been solving problems for around two months now.
Rather than let your practice go to waste, it's always good
to refresh your memory. That being said, why don't you take another
stab at creating a function that performs a binary search?
They work by repeatedly dividing the list to sort in half and
working with the portion that may contain the item being looked for
until the possible location is narrowed down to just one element.
Try giving it a shot!
*/
function recursiveBinarySearch(array, target, start = 0, end = Number.POSITIVE_INFINITY) {
  if (start >= end) {
    return `${target} not found`;
  }
  if (end > array.length) {
    end = array.length;
  }
  let midPoint = Math.floor((start + end) / 2);
  let value = array[midPoint]
  if (value === target) {
    return `${target} is found at index ${midPoint}`;
  }
  if (value < target) {
    start = midPoint;
  } else {
    end = midPoint;
  }
  return recursiveBinarySearch(array, target, start, end);
}


// The Last Vowel
/*
Do you remember how to write a function that removes the last vowel
from each word in a sentence?
You must only remove the LAST instance of a vowel.
For example, "book" would turn into "bok".
*/
const removeLastVowelVersion2 = sentence => {
  let words = sentence.split(' ');
  let vowelsRemoved = words.map(word => word.replace(/(\w*)([aeiou])(\w*)/i, '$1$3'))
  return vowelsRemoved.join(' ');
}


// Fibonacci Flashbacks
/*
Let's try working with the Fibonacci sequence again.
Each term in the Fibonacci sequence is the sum of the two preceding terms.
If you start with 1 and 2, this sequence is: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
What is the total number of all even numbers in the Fibonacci
sequence that are less than 3,000,000?
*/
const fibonacciEven = (limit = 3000000) => {
  let first = 1;
  let second = 1;
  let next = 0;
  let evens = [];
  while (next < limit) {
    if (next !== 0 && next % 2 === 0) {
      evens.push(next);
    }
    next = first + second;
    first = second;
    second = next;
  }
  return evens.length;
}


// g33k sp34k
/*
Write a function that takes a string and returns a coded version of the string.
Your function should replace all 'a's with '4's, 'e's with '3's, 'i's with '1's,
'o's with '0's, and 's's with '5's.
*/
const codeString = string => {
  const codeTable = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5'
  }
  return string.replace(/[aeios]/g, match => codeTable[match]);
}


// Steps
/*
Write a function that returns the fewest number of steps it will take to convert
a string into uppercase or into lower case, whichever takes the least number of
steps. A step occurs when a character is changed from lower to upper case,
or vice versa. Return 0 if the string is empty or if there are no steps
needed to be taken.
*/
const leastConverting = (string = "") => {
  let givenLength = string.length;
  let lowerCases = string.match(/[a-z]/g) || [];
  let upperCases = string.match(/[A-Z]/g) || [];
  let numberOfLowers = lowerCases.length;
  let numberOfUppers = upperCases.length;
  if (
    !string ||
    givenLength === numberOfLowers ||
    givenLength === numberOfUppers
  ) {
    return 0;
  }
  if (numberOfUppers > numberOfLowers) {
    return "Convert to uppercase";
  } else if (numberOfUppers < numberOfLowers) {
    return "Convert to lowercase";
  } else {
    return "Up to you to decide";
  }
};


// Comma Makes Perfect
/*
Sometimes, you may be too lazy to add a comma between 0s to separate every thousand.
If you have your own converter that will just print out a number with commas in right
position you'd be happy! Today, write a function that converts numeric strings to
comma-separated strings. ※ However, do not use the money conversion library
supported by the programming language.

For example, 2000 --> 2,000 | -1224.10 --> -1,224.10
*/
const placeCommaInNumber = stringNumber => {
  const re = new RegExp(/\d{1,}/);
  let result = stringNumber.replace(re, match => {
    let withComma = '';
    for (let index = 0; index < match.length; index++) {
      if (index !== 0 && index % 3 === 0) {
        withComma += ','
      }
      withComma += match[match.length - 1 - index];
    }
    withComma = withComma.split('').reverse().join('');
    return withComma;
  });
  return result;
}


// Christmas is Near!
/*
Today's prompt is simple - write a function to determine how many
days are left until Christmas!
*/
const daysToChristmas = (providedDate = Date.now()) => {
  const christmas = {
    'month':11,
    'date':25
  }
  let today = new Date(providedDate);
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDate = today.getDate();
  let nextChristmas;
  if(christmas.month===currentMonth && christmas.date<currentDate){
    nextChristmas = new Date(currentYear+1, christmas.month,christmas.date);
  } else {
    nextChristmas = new Date(currentYear, christmas.month,christmas.date);
  }
  let howManyDays = Math.ceil((nextChristmas-today)/(24*3600*1000));
  return howManyDays;
}


// Bugs Bugs Everywhere
/*
I want this code to print out 0,1,2,3 in sequential order...
but it isn't. Why is that?
Can you re-write this function so it does what we want it to do?

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
*/
/*
Using 'setTimeout' function will put the anonymous
function, which is just console logging, in a queue
and the anonymous function waits until whatever is
executing, in this case the 'for' loop, to be done.
Therefore, Var 'i' will be 4, since the loop is done,
the anonymous function will console log 4 for four times.

for (var i = 0; i < 4; i++) {
  let j = i;
  setTimeout(() => console.log(j), 0)
}
*/
// for (var i = 0; i < 4; i++) {
//   let j = i;
//   setTimeout(() => console.log(j), 0)
// }

// Doubled Pennies
/*
You've been hired at a new company, and you earn one penny on your
first day. However, for each sequential day of work, your base amount
doubles. This mean that you will earn two pennies on your second day
and four pennies on your third day. Write a function that, give
a number of days that you provide, will return the total number
of cumulative pennies that you will have.
*/
const richAfterNDays = days => {
  let result = 1;
  for (let index = 0; index < days; index++) {
    result *= 2;
  }
  result--;
  return `${result} pennies earned after ${days} days`;
}


// Reverse Reverse!
/*
Today's problem is short and to the point: Write a function that takes a
string and returns the string in reversed order.
*/
const reverseSpelling = (string = "") => {
  return string.split("").reverse().join("");
};


// Fantastic Fireworks!
/*
Create a function that accepts a number and returns a string
variation of the word "Boom".
The string should include n number of "o"s, unless n is less than 2.
(If that is the case, return "boom").
If n is evenly divisible by 2, add an exclamation point at the end of
the string.
If n is evenly divisible by 5, return the string in all CAPS.
If n is evenly divisible by both 2 and 5, return the string in ALL CAPS
and add an exclamation point to the end of the string.
*/
const kaboom = n => {
  if(n<2){
    return 'boom';
  }
  let result = 'B' + 'o'.repeat(n) + 'm';
  if(n%2===0){
    result += '!';
  }
  if(n%5===0) {
    result = result.toUpperCase();
  }
  return result;
}


// Kisses and Hugs
/*
Write a function that receives a string and checks if that string has equal
numbers of 'x's and 'o's. If it does, return true. Otherwise, return false.
If there are no 'x's or 'o's, return true.
*/
const checkXO = string => {
  let xArray = string.match(/x/g) || [];
  let oArray = string.match(/o/g) || [];
  if (xArray.length === 0 && oArray.length === 0) {
    return true;
  } else {
    return xArray.length === oArray.length;
  }
}

// Robin's
// function kissesAndHugs(str) {
//   return str.replace(/[^x]/gi, "").length === str.replace(/[^o]/gi, "").length;
// }


// Vowel Hunt
/*
Write a function that takes in a string and returns the index of the first vowel in the string.
Y is not considered a vowel, the string should always contain a vowel, and the string must be
only one word.
*/
const indexOfVowel = (word) => {
  let vowel = word.match(/[aeiou]/i);
  return word.indexOf(vowel);
};
// Robin's
// const findFirstVowel = (str) => str.search(/[aeiou]/i);


// Shortest Distance
/*
We'd love to share one of the interview questions asked during some bootcamp students' first round
interview at a Korean tech company. She was given one-dimensional points array
L=[1, 3, 4, 8, 13, 17, 20]. The interviewer asked her to find a pair of the shortest distances,
given the one-dimensional points. (Assume that the array of points is all sorted.).
Can you ace the interview question?
*/
const minDistance = array => {
  let minimumDistance = null;
  let result = [];
  for (let index = 1; index < array.length; index++) {
    let currentMin = array[index] - array[index - 1];
    if (minimumDistance === null || minimumDistance > currentMin) {
      minimumDistance = currentMin;
      result = [array[index - 1], array[index]]
    }
  }
  return result;
}


// Rock, Paper, Scissors
/*
Do you remember that first simple project you had to build during your
bootcamp - Rock, Paper, Scissors game? You were perhaps not sure what
you were supposed to do at that time. Since you've either learned lots
of more complicated coding topics or built many applications,
you should be able to quickly build a simple RPS game today.
Robin challenges you!
*/
const gameRPS = (user1, user2 = 'computer') => {
  const choices = ['Rock', 'Paper', 'Scissors']
  if (user2 === 'computer') {
    let randomIndex = Math.floor(Math.random() * choices.length)
    user2 = choices[randomIndex];
  }
  let winner = 'Draw!';
  switch (user1) {
    case 'Rock':
      if (user2 === 'Rock') {
        break;
      } else if (user2 === 'Paper') {
        winner = 'User2 Win!'
        break;
      } else {
        winner = 'User1 Win!'
        break;
      }
    case 'Paper':
      if (user2 === 'Paper') {
        break;
      } else if (user2 === 'Scissors') {
        winner = 'User2 Win!'
        break;
      } else {
        winner = 'User1 Win!'
        break;
      }
    case 'Scissors':
      if (user2 === 'Scissors') {
        break;
      } else if (user2 === 'Rock') {
        winner = 'User2 Win!'
        break;
      } else {
        winner = 'User1 Win!'
        break;
      }
    default:
      return 'invalid input';
  }
  return `User1:${user1}, User2:${user2} => ${winner}`;
}


// How Many Days in a Month?
/*
Write a function that accepts a month and a year as integers
and returns the number of days in that specific month.
*/
const daysInGivenMonthNYear = (month, year) => {
  let givenMonth = new Date([year, month, 1].join('/'));
  let nextMonth = new Date([year, month + 1, 1].join('/'));
  let daysBetween = (nextMonth - givenMonth) / (24 * 3600 * 1000);
  return daysBetween;
}


//
/*
Have you been practicing your coding every day?
Now it's time for you to practice by writing a function that accepts
the current date and a list of dates and returns how many days you
have been on a streak for (in our case, how many consecutive days
you have been practicing coding).
If the array is empty, return 0.
*/
const checkConsecutiveDays = (currentDate, arrayOfDates) => {
  let today = new Date(currentDate);
  let dateOfToday = today.getDate();
  let monthOfToday = today.getMonth();
  let yearOfToday = today.getFullYear();
  let consecutiveDays = 0;
  while (arrayOfDates.length!==0){
    let dateForChecking = new Date(yearOfToday, monthOfToday, (dateOfToday-consecutiveDays) );
    let dateInArray = new Date(arrayOfDates.pop());
    if (dateInArray.getTime() !== dateForChecking.getTime()){
      return consecutiveDays;
    }
    consecutiveDays++;
  }
  return consecutiveDays;
}


// Sharing is Caring
/*
Write a function that receives two strings and returns a string that contains
only the letters that are shared between both strings. If there are none, return
an empty string. Put the string in alphabetical order before returning it.
*/
const commonLetters = (wordA, wordB) => {
  let common = [];
  let wordASplit = wordA.split('');
  for (let index = 0; index < wordASplit.length; index++){
    let character = wordASplit[index];
    let re = new RegExp(character, 'i');
    if (wordB.match(re) && !common.includes(character)){
      common.push(character);
    }
  }
  return common.sort().join('');
}


// Spooky Days
/*
Western superstition considers Friday the 13th to be an unlucky day.
Write a function that receives a month and year as numbers and returns whether that
month contains a Friday 13th or not (true or false).
Months are not preceded with 0, so January = 1, February = 2, etc.
You can pass in the full year, like 2020 or 1975.
*/
const checkSpookyDays = (year, month) => {
  let givenDate = new Date(year, month-1, 13);
  return 5 === givenDate.getDay();
}


// Binary is Cool
/*
I'm sure by now you know that computers operate in binary, right? Just a whole bunch of
0s and 1s. These are very powerful numbers. A computer's processor is made up of circuits
that are composed of billions of transistors - switches that are activated by the
electronic signals it receives. The 1s and 0s reflect each on and off state of a transistor.

Can you write a function that accepts a string of 0s and 1s and returns true
if every consecutive sequence of 1s is followed by a consecutive sequence of 0s
of the same length.

For example:

111000110010 --> true

1001101110 --> false
*/
const zerosAfterOnes = (stringBinary='') => {
  if(stringBinary===''){
    return false;
  }
  let oneAndZeroSegments = stringBinary.match(/1+0+/g);
  if (!oneAndZeroSegments){
    return false;
  }
  for(let index=0; index<oneAndZeroSegments.length; index++){
    let segment = oneAndZeroSegments[index];
    let matchedGroups = segment.match(/(?<ones>1+)(?<zeros>0+)/).groups;
    if(matchedGroups.ones.length !== matchedGroups.zeros.length){
      return false
    }
  }
  return true;
}

// What day will it be?
/*
Do you ever get confused when someone says "In 5 days from now..."?
Which day will it be? Write a function that takes in an array of days
(like ["Monday", "Wednesday", "Thursday"]) and a single number n , and
return an array of what day it will be in n number of days.
For the example provided above, if we asked what day it would be in 3 days,
we would return ["Thursday", "Saturday", "Sunday"]
*/
const afterNDays = (arrayOfDays=[], nDays=0) => {
  let dayTable = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let shiftedDays = [];
  for(let index=0; index<arrayOfDays.length; index++){
    let shiftedIndex = (dayTable.indexOf(arrayOfDays[index]) + nDays) % 7;
    shiftedDays.push(dayTable[shiftedIndex]);
  }
  return shiftedDays;
}


//More Dates!
/*
What IS a date ?
Can your code recognize a date ?
Robin challenges you to write a function that determines
if an input is a date object or not.
You can try these input to test your code:

console.log(isDate("October 13, 2014 11:13:00"));
console.log(isDate(new Date(86400000)));
console.log(isDate(new Date(99, 5, 24, 11, 33, 30, 0)));
console.log(isDate([1, 2, 4, 0]));
*/
const isDate = potentialDate => {
  return !isNaN(Date.parse(potentialDate));
}

// Do you add up ?
/*
Robin comes to you today with a challenge about arrays:
can you write a function that receives two arrays of integers and
one target integer value and determines if there is a pair of numbers
that add up to the target value ? One number must come from each array and
the other must come from the second array.Return true if at least one pair
exists that adds up to the target value - otherwise, return false.

ex) addUp([1, 2], [2, 3, 5], 4)-- > true
*/
const addUp = (arrayOne, arrayTwo, target) => {
  for(let i=0; i<arrayOne.length; i++){
    for(let j=0; j<arrayTwo.length; j++){
      if(arrayOne[i]+arrayTwo[j]===target){
        return true;
      }
    }
  }
  return false;
}

// Shortest Words
/*
Today's challenge lets us give respect to short words - words that are often
overlooked but are also often the most important glue in a sentence!
Can you write a function that, provided a string as an argument, returns
the shortest words in the string lowercase and in sorted in alphabetical order?
*/
const shortWord = sentence => {
  let words = sentence.match(/\w+/g).map(word => word.toLowerCase());
  let onlyUniques = [];
  words.sort((a, b) => a.length - b.length).map(word => !onlyUniques.includes(word) ? onlyUniques.push(word) : word);
  let wordsByLength = {};
  onlyUniques.map( word => {
    if(!wordsByLength[word.length]){
      wordsByLength[word.length] = [];
      wordsByLength[word.length].push(word);
    } else {
      wordsByLength[word.length].push(word);
    }
  })
  let result = [];
  for (let key in wordsByLength){
    let sorted = wordsByLength[key].sort();
    result.push(...sorted);
  }
  return result;
}

// Dates Can be Palindromes Too!
/*
February 2nd, 2020 is a palindrome when viewed in
mm / dd / yyyy and dd / mm / yyyy formats.
Can you write a function that returns true if the date provided
is a palindrome in both formats ?

* Assuming provided input will be 'February 2nd, 2020'
*/
const datesPalindromes = dateString => {
  let givenDate = new Date(dateString);
  let givenYear = givenDate.getFullYear();
  let givenMonth = givenDate.getMonth()+1;
  let givenDay = givenDate.getDate();
  let mmDdYyyy = '' + givenMonth + givenDay + givenYear;
  let ddMmYyyy = '' + givenDay + givenMonth + givenYear;
  let checkMmDdYyyy = mmDdYyyy.split('').reverse().join('') === mmDdYyyy;
  let checkDdMmYyyy = ddMmYyyy.split('').reverse().join('') === ddMmYyyy;
  return checkMmDdYyyy && checkDdMmYyyy;
}


// Find My Index
/*
Create a function that finds the index of a given item in an array.
example: findMyIndex([1, 2, 3], 3) ➞ 2
*/
const findMyIndex = (array, target) => {
  let targetIndex = -1;
  for(let index=0; index<array.length; index++){
    if(array[index]===target){
      targetIndex = index;
    }
  }
  return targetIndex;
}

// Buckets of Words
/*
Its raining...words ? We need to collect words into our buckets!
Let's try to write a function that splits a sentence into buckets of words.
Each bucket can have a provided number of characters or less
(spaces count as one character). If the whole sentence is unable to fit
inside buckets, then we have to return an empty array :(

  Here is an example:
collectWords("the mouse can creep", 10) ➞ ["the mouse", "can creep",]
*/
const collectWords = (sentence, targetLength) => {
  let result = [];
  let words = sentence.split(' ');
  let partialSentence = [];
  for(let index=0; index<words.length; index++){
    let currentWord = words[index];
    if(currentWord.length>targetLength){
      return [];
    } else {
      partialSentence.push(currentWord);
      if(partialSentence.join(' ').length>targetLength) {
        let temp = partialSentence.pop();
        result.push(partialSentence.join(' '));
        partialSentence = [temp];
      }
    }
    if(index===words.length-1){
      result.push(partialSentence.join(' '));
    }
  }
  return result;
}

// Phone Number Formatter
/*
When building web applications, it's often nice to format phone numbers that
users input on their own so that the user only has to input numbers.
Write a function that accepts ten numbers in an array and formats it
like this: "(123) 456-7890
*/
const formatPhoneNumberVer2 = phoneNumber => {
  let re = new RegExp(/(\d{3,3})(\d{3,3})(\d{4,4})/);
  return phoneNumber.replace(re, '($1) $2-$3');
}

// Moving Day!
/*
It's almost moving day!
You have various boxes of different sizes and want to know the total volume
of all the boxes together. Why don't you write a function that calculates the volume?
The function will receive multiple arrays - each array will represent a box.
The arrays will have three elements each: length, width, and height.
Good luck!
*/
const totalVolume = dimensionsOfBoxes => {
  return dimensionsOfBoxes.reduce((acc, box) => acc+box[0]*box[1]*box[2], 0);
}

// Working for the Weekend!
/*
Who doesn't love the weekend!?
Can you write a function that, given a date in the following format,
returns whether that date is a weekend or not?
FORMAT: Oct 11, 2010
*/
const isWeekend = stringDate => {
  let givenDate = new Date(stringDate);
  let dayOfGivenDate = givenDate.getDay();
  return (dayOfGivenDate === 6 || dayOfGivenDate === 0);
}

// Traveling Sales
/*
Surely you know about the famous Traveling Salesman problem?
If you have a list of cities and the distances between each pair of cities,
what is the shortest possible route that visits each city and returns back to
the starting point?
Write a function that receives "n" number of paths and returns
the total number of possible paths that a salesman can travel.

ex) paths(4)-- > 24
*/
