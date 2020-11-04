function identicalFilter(arr) {
  // https://edabit.com/challenge/fxvceQdv7RHQzrx2J
  return arr.filter(elem => elem.match(/^(.)\1*$/));
}

function specialReverse(s, c) {
  // https://edabit.com/challenge/KffCqRz23XL5ewbgH
  const re = new RegExp(c,'i');
  return s.split(' ').map(word => word.match(re) ? word.split('').reverse().join('') : word).join(' ');
}

function flip(y) {
  // https://edabit.com/challenge/???????????????????
  // assuming you will receive either 0 or 1,
  // if 0 received return 1, if 1 received return 0;
  // Restriction:
  // 1. tenary not allowed
  // 2. if condition not allowed
  // 3. bit operator not allowed
  // 4. negation not allowed
  return y+1%2;
}

function binary(decimal) {
  // https://edabit.com/challenge/3kcrnpHk7krNZdnKK
  let result = "";
  while (decimal > 1) {
    result = (decimal % 2) + result;
    decimal = (decimal - decimal % 2) / 2;
  }
  return decimal + result;
}

function shirtSize({size: size} = { size : "big" }) {
  // https://edabit.com/challenge/7yCojzi2ye2Fn6iQT
  return size
}

function detectBrowser(userAgent) {
  // https://edabit.com/challenge/PbEuBFLRpzgWQwuvY
  if (userAgent.match(/Chrome/)) {
    return "Google Chrome";
  } else if (userAgent.match(/Firefox/)) {
    return "Mozilla Firefox";
  } else {
    return "Internet Explorer"
  }
}

function countTowers(towers) {
  // https://edabit.com/challenge/LcEFe7PsxTqciY62v
  let numberOfTowers = 0;
  const lobby = towers.length-1;
  if(!towers[lobby][0]){
    return numberOfTowers;
  }
  return towers[lobby].match(/##/g).length;
}

function redundant(str) {
  // https://edabit.com/challenge/hzxN9bAebBPNqdQto
  return () => { return str; };
}

function factorChain(arr) {
  // https://edabit.com/challenge/FtZGQEonGwyozeCna
  for (var index = 1; index < arr.length; index++) {
    if (arr[index] % arr[index - 1] !== 0) {
      return false;
    }
  }
  return true;
}

// String.prototype.vreplace = function (vowel) {
//   // https://edabit.com/challenge/bhanrxz6EKfWR7ApR
//   return this.replace(/[aeiou]/g, vowel);
// }

function squareDigits(n) {
  // https://edabit.com/challenge/Tnjbf6pdFsCjmaF8p
  return Number(n.toString().split('').map(elem => parseInt(elem, 10) * parseInt(elem, 10)).join(''));
}

function changeTypes(arr) {
  // https://edabit.com/challenge/FY8DmJXbQXL3yugGC
  let changedArr = [];
  for(let index=0; index<arr.length; index++){
    let currentElem = arr[index];
    if(typeof currentElem === 'number') {
      if(currentElem % 2===0){
        changedArr.push(currentElem+1);
      } else {
        changedArr.push(currentElem);
      }
    } else if (typeof currentElem === 'string') {
      changedArr.push(currentElem[0].toUpperCase()+currentElem.slice(1)+"!");
    } else {
      currentElem = !currentElem;
      changedArr.push(currentElem);
    }
  }
  return changedArr;
}

function objectToArray(obj) {
  // https://edabit.com/challenge/4aaBNPnFMc3bzR7JR
  let arr = [];
  let objKeys = Object.keys(obj);
  for(var index=0; index<objKeys.length; index++) {
    let currentKey = objKeys[index];
    let currentValue = obj[currentKey];
    arr.push([currentKey, currentValue]);
  }
  return arr;
}

function validName(name) {
  // https://edabit.com/challenge/xPBFGvKQfRFEyy4vx
  // for detailed instruction, please visit the website
  var re = /^([A-Z]{1}\.{1}|[A-Z]{1}[a-z]+)\s([A-Z]{1}\.{1}|[A-Z]{1}[a-z]+)(\s([A-Z]{1}[a-z]+))?$/;
  if (name.match(re)) {
    const allNames = name.split(' ');
    if (allNames.length !== 2 && allNames[0].match(/\./) && !allNames[1].match(/\./)) {
      return false;
    }
    return true;
  }
  return false;
}

function diceGame(arr) {
  // https://edabit.com/challenge/chy94ZtNqzAHMSXoW
  // for detailed instruction, please visit the website
  const initialLength = arr.length;
  arr = arr.filter( anotherArr => anotherArr[0]!==anotherArr[1]);
  const total = arr.length !== initialLength ? 0 : arr.reduce( (acc, anotherArr) => acc + anotherArr.reduce( (acc2, elem) => acc2+elem, 0), 0)
  return total;
}

function createPhoneNumber(numbers) {
  // https://edabit.com/challenge/xDNkweBBNXBMyQRdG
  // for detailed instruction, please visit the website

  // brute force way
  // let phoneNumber = '(';
  // for(let index=0; index<numbers.length; index++) {
  //   phoneNumber+=numbers[index];
  //   if(index===2) {
  //     phoneNumber +=') ';
  //   }
  //   if(index===5) {
  //     phoneNumber += '-';
  //   }
  // }
  // return phoneNumber;

  // regexp way
  return numbers.join('').replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
}

function boomIntensity(n) {
  // https://edabit.com/challenge/XnZAcvr4tCD9ppyrN
  // for detailed instruction, please visit the website
  const minLength = 2;
  let intensity = n<2? 'b': 'B';
  for (var index = 0; index < n || index < minLength; index++){
    intensity +='o';
  }
  let theEnd = n % 2 === 0 && n !== 0? 'm!':'m';
  let explosion = intensity + theEnd;
  return n%5===0 && n!==0 ?explosion.toUpperCase(): explosion;
}

function inkLevels(inks) {
  // https://edabit.com/challenge/QXWM2oo7rQNiyDsip
  // for detailed instruction, please visit the website
  let currentMin = null;
  for (let key in inks) {
    let selectedValue = inks[key];
    if (currentMin === null || selectedValue < currentMin) {
      currentMin = selectedValue;
    }
  }
  return currentMin;

  // shortest solutions in edabit
  // return Math.min(...Object.values(inks));
}

function removeLeadingTrailing(n) {
  // https://edabit.com/challenge/3jzycf6fcgwZbvpcf
  // for detailed instruction, please visit the website
  return parseFloat(n).toString();
}

function hasHiddenFee(prices, t) {
  // https://edabit.com/challenge/LSw9Tgs6yMgQ4JfdX
  // for detailed instruction, please visit the website
  // const extractingNumber = /\$(\d+)/;
  // const total = prices.map(price => parseInt(price.replace(/\$(\d+)/, '$1'), 10)).reduce((acc, elem)=> acc+elem,0)
  return prices.map(price => parseInt(price.replace(/\$(\d+)/, '$1'), 10)).reduce((acc, elem) => acc + elem, 0) !== parseInt(t.replace(/\$(\d+)/, '$1'), 10);
}

// https://edabit.com/challenge/B4kaykgTDQxdi32FW
// write a regex that will find all open compound words starting with the word best and the second word begins with the letter b.
// const REGEXP = /best\sb\w+/g


// https://edabit.com/challenge/8kTQqoWYQXRsKuYEf
// for detailed instruction, please visit the website
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise!")
//   }, 0)
// })

function triangle(n) {
  // https://edabit.com/challenge/RMZiERz2cbjmbXruY
  // for detailed instruction, please visit the website
  if(n<1) {
    return 0;
  }
  return n + triangle(--n);
}

function alphNum(str) {
  // https://edabit.com/challenge/i3b97FrfXT5mr9Lnx
  // for detailed instruction, please visit the website
  return str.split('').map( char => char.charCodeAt()-65 ).join(' ');
}

function keysAndValues(obj) {
  // https://edabit.com/challenge/AP4hnF97anRc2mAZ6
  // for detailed instruction, please visit the website
  return [[...Object.keys(obj)], [...Object.values(obj)]]
}

function century(year) {
  // https://edabit.com/challenge/SAdqaWKRpjLfZnGKA
  // for detailed instruction, please visit the website
  const inCentury = Math.ceil(year / 100);
  const theEnd = inCentury===21? 'st century': 'th century';
  return inCentury+theEnd;
}

function getBudgets(arr) {
  // https://edabit.com/challenge/tmnCStcrkdWbreKP5
  return arr.reduce((ac, obj) => ac + obj.budget, 0);
}

function calculator(num1, operator, num2) {
  // https://edabit.com/challenge/AtoWYYC9THAH5HbS2
  switch (operator) {
    case '+':
      return num1+num2;
    case '*':
      return num1*num2;
    case '-':
      return num1-num2;
    case '/':
      if(num2===0){
        return "Can't divide by 0!";
      }
      return num1/num2;
    default:
      return false;
  }
}

// https://edabit.com/challenge/HT2dHkbzmLDZgsS7G
// for detailed instruction, please visit the website
// let promise = new Promise((resolve, reject) => {
//   let animal = "cat"
//   setTimeout(() => {
//     if (animal === "dog") {
//       resolve("It's a dog!")
//     }
//     if (animal !== "dog") {
//       reject("It's not a dog!")
//     }
//   }, 1000)
// })

function xmasItems(n) {
  // https://edabit.com/challenge/Lou6r4SSoPh4wqju7
  // for detailed instruction, please visit the website
  let sum = 0;
  for (var index = 0; index <= n; index++) {
    sum += index * (index + 1) / 2;
  }
  return sum;
}


// https://edabit.com/challenge/6Zs9AyraoFAAEhX6v
// for detailed instruction, please visit the website
// const REGEXP = /\S\?$/g


function getDistance(a, b) {
  // https://edabit.com/challenge/caeSeQ3K53GMQKenX
  // for detailed instruction, please visit the website
  return parseFloat(Math.pow(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2), 0.5).toFixed(3));
}


// https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ
// for detailed instruction, please visit the website
// class Rectangle {
//   constructor(sideA, sideB) {
//     this.sideA = sideA;
//     this.sideB = sideB;
//   }
//   getArea() { return this.sideA * this.sideB };
//   getPerimeter() { return (this.sideA + this.sideB) * 2 };
// }


// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getArea() { return (this.radius * this.radius * Math.PI) };
//   getPerimeter() { return (2 * this.radius * Math.PI) };
// }

// //unquote and use run to test these cases
// let q = new Circle(4.44);

function returnEndOfNumber(num) {
  // https://edabit.com/challenge/MEgXcp8cj3vNvD42v
  // for detailed instruction, please visit the website
  var theEnd = '';
  if(num===11 || num ===12 || num===13) {
    theEnd = '-TH'
  } else {
    const lastDigit = num%10;
    switch(lastDigit){
      case 1:
        theEnd = '-ST'
        break;
      case 2:
        theEnd = '-ND'
        break;
      case 3:
        theEnd = '-RD'
        break;
      default:
        theEnd = '-TH'
        break;
    }
  }
  return num+theEnd;
}

function boxSeq(step) {
  // https://edabit.com/challenge/Q4mYkd8nc8zdFBDE8
  // for detailed instruction, please visit the website
  let boxes = 0;
  for(let index=0; index<step; index++) {
    if(index%2===0) {
      boxes +=3;
    } else {
      boxes -=1;
    }
  }
  return boxes;
}

function changeEnough(change, amountDue) {
  // https://edabit.com/challenge/erFxBbqzZPSegMwnc
  // for detailed instruction, please visit the website
  var index=0;
  var values = [25, 10, 5, 1]
  amountDue = parseInt(amountDue.toString().match(/\d/g).join(''), 10);
  while(amountDue > 0 && index<4) {
    var currentChangeValue = values[index];
    var inInventory = change[index];
    while (inInventory > 0 && amountDue >= currentChangeValue) {
      amountDue -= currentChangeValue;
      inInventory--;
    }
    if (amountDue === 0){
      return true;
    }
    index++;
  }
  return false;
}

function matchLastItem(arr) {
  // https://edabit.com/challenge/jbR9NupEL8zAZkbKx
  // for detailed instruction, please visit the website
  const lastIndex = arr.length-1;
  return arr.filter( (elem, index) => {if(index!==lastIndex) return elem.toString()}).join('') === arr[lastIndex];
}

function parityAnalysis(num) {
  // https://edabit.com/challenge/NH7uN8JRgPz23GSNq
  // for detailed instruction, please visit the website
  const isGivenNumEven = num % 2 === 0;
  const isSumOfDigitsEven = num.toString().split('').reduce((acc, d) => acc + Number(d), 0) % 2 === 0;
  return isGivenNumEven === isSumOfDigitsEven;
}

function filterUnique(arr) {
  // https://edabit.com/challenge/kPjg5tCKnFsyYFfex
  // for detailed instruction, please visit the website
  let uniqueStrings = [];
  for(let index=0; index<arr.length; index++) {
    let currentString = arr[index]
    let charsChecked = [];
    var isUnique = true;
    for (let innerIndex = 0; innerIndex < currentString.length; innerIndex++) {
      let currentChar = currentString[innerIndex];
      if(!charsChecked.includes(currentChar)) {
        charsChecked.push(currentChar)
        let re = new RegExp(`${currentString[innerIndex]}`, 'g');
        if(currentString.match(re).length!==1) {
          isUnique = false;
        }
      }
    }
    if(isUnique){
      uniqueStrings.push(currentString);
    }
  }
  return uniqueStrings;
}

function testJackpot(result) {
  // https://edabit.com/challenge/hxyvTffvdT4E238CY
  // for detailed instruction, please visit the website
  const elem = result[0];
  for (var index = 1; index < result.length; index++) {
    if (result[index] !== elem) {
      return false;
    }
  }
  return true;
}

function fracRound(frac, n) {
  // https://edabit.com/challenge/e9oMvkS7Fb72kSehT
  // for detailed instruction, please visit the website
  const numbers = frac.split('/').map(elem => Number(elem));
  const answer = numbers[0]/numbers[1];
  return `${frac} rounded to ${n} decimal places is ${answer.toFixed(n)}`;
}

function distanceToNearestVowel(str) {
  // https://edabit.com/challenge/b9FBAhxaijR9fzxgo
  // for detailed instruction, please visit the website
  const vowel = new RegExp(/[aeiou]/);
  let distance = str.split('').map( (char, index) => {
    if (char.match(vowel)) {
      return 0;
    }
    let vowelIndex = str.search(vowel);
    let currentMin = null;
    if(vowelIndex<index) {
      currentMin = index - vowelIndex;
    } else {
      currentMin = vowelIndex - index;
    }
    return currentMin;
  })
  return distance;
}

function cardHide(card) {
  // https://edabit.com/challenge/rtpvAqFT3koqMoFCJ
  // for detailed instruction, please visit the website
  const re = /(\d*)(?<lastFour>\d{4,4}$)/;
  let stringCardNumber = card.toString();
  stringCardNumber = stringCardNumber.replace(re, (match, p1, p2, offset, string) => {
    let hidingText = "";
    for (let i = 0; i < p1.length; i++) {
      hidingText += "*";
    }
    return hidingText + p2;
  });
  return stringCardNumber;
}

function factorial(n) {
  // https://edabit.com/challenge/rgXMMHEmbh2MCKSrM
  // for detailed instruction, please visit the website
  // in recursive way!
  if(n===0 || n===1) {
    return 1;
  }
  return n*factorial(n-1);
}

function charCount(myChar, str) {
  // https://edabit.com/challenge/kbFhwaDyrd79JrgeB
  // for detailed instruction, please visit the website
  const re = new RegExp(myChar, "g");
  return str.match(re) ? str.match(re).length : 0;
}

function footballPoints(wins, draws, losses) {
  // https://edabit.com/challenge/GwvwXHWCThHZrR7xu
  // for detailed instruction, please visit the website
  return wins*3+draws;
}


// https://edabit.com/challenge/rHtS59yApEQbANPcx
// const REGEXP = /[^a-z0-9]/gi

function addNums(nums) {
  // https://edabit.com/challenge/qKQ8Bn6ontrLTTNsr
  // for detailed instruction, please visit the website
  return nums.split(", ").map( a => parseInt(a, 10) ).reduce( (ele, acc)=> ele+acc, 0);
}


function isJS(path) {
  // https://edabit.com/challenge/AWENJSwyhcceiKvQX
  // for detailed instruction, please visit the website
  const re = new RegExp(".+\.(js|jsx)$");
  return path.match(re)? true:false;
}

function getDecimalPlaces(num) {
  // https://edabit.com/challenge/arKLRM8qGzKZbCxCk
  // for detailed instruction, please visit the website
  const re = /[0-9,]+\.*(?<afterDecimal>\d*)/;
  return num.match(re).groups.afterDecimal.length;
}

function isValidDate(d, m, y) {
  // https://edabit.com/challenge/dhRtmeFcjGcD7yvHA
  // for detailed instruction, please visit the website
  let givenDate = new Date(y, m - 1, d);
  return givenDate.getFullYear() === y && givenDate.getMonth() + 1 === m && givenDate.getDate() === d;
}

function sliceSum(arr, n) {
  // https://edabit.com/challenge/B3FR3P7g8NyTg7t8b
  // for detailed instruction, please visit the website
  return arr.reduce((acc, value, index) => index < n ? acc + value : acc + 0, 0);
}

function repetition(txt, n) {
  // https://edabit.com/challenge/MjqneMZ7aZa8AxXZG
  // for detailed instruction, please visit the website
  if (n < 1) {
    return "";
  }
  return txt + repetition(txt, n - 1);
}

function maxTotal(nums) {
  // https://edabit.com/challenge/Wg3pBiH8HQggcfaTg
  // for detailed instruction, please visit the website
  return nums.sort((a, b) => b - a).reduce((acc, value, index) => index < 5 ? acc + value : acc + 0, 0);
}

function replaceVowel(word) {
  // https://edabit.com/challenge/xuRjEej9F9ZG3vg7M
  // for detailed instruction, please visit the website
  const vowelNumber = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5'
  }
  return word.split('').map(char => char.match(/[aeiou]/i) ? vowelNumber[char] : char).join('');
}

function intWithinBounds(n, lower, upper) {
  // https://edabit.com/challenge/YT2kXSMEtACPPk35R
  // for detailed instruction, please visit the website
  if (n.toString().match(/\./g)) {
    return false;
  }
  return n < upper && n >= lower;
}

function factorialEdabitRecursion(z) {
  // https://edabit.com/challenge/Ju7AK9rAGjz86hjxo
  // for detailed instruction, please visit the website
  if (z < 1) {
    return 1;
  }
  return z * factorialEdabitRecursion(z - 1);
}

function minutesToSeconds(time) {
  // https://edabit.com/challenge/n7qZMpuLsAMGBGNLA
  // for detailed instruction, please visit the website
  let givenTime = time.match(/(?<minute>\d{2,}):(?<second>\d{2,})/).groups;
  return parseInt(givenTime.second) >= 60 ? false : parseInt(givenTime.minute) * 60 + parseInt(givenTime.second);
}

function sumArray(arr) {
  // https://edabit.com/challenge/27Toh4rACcmRvRLrb
  // for detailed instruction, please visit the website
  let total = arr.reduce((accumulator, currentElem) => !Array.isArray(currentElem)? accumulator + currentElem : accumulator + sumArray(currentElem), 0);
  return total;
}


function arrayOperation(x, y, n) {
  // https://edabit.com/challenge/NFfYCBEQepsD5mfEk
  // for detailed instruction, please visit the website
  let result = [];
  for (let index = x; index <= y; index++) {
    if (index % n === 0) {
      result.push(index);
    }
  }
  return result;
}

function greetingMaker(salutation) {
  // https://edabit.com/challenge/rLybgi7vcxL2ykt8F
  // for detailed instruction, please visit the website
  return function closure(name) {
    return salutation + ", " + name;
  }
}

function multiplyNums(nums) {
  // https://edabit.com/challenge/TzxoYExuxuQw2ahWR
  // for detailed instruction, please visit the website
  return nums.split(", ").map(element => parseInt(element)).reduce((acc, value) => acc * value, 1);
}

function countOnes(i) {
  // https://edabit.com/challenge/KcMmQE3bhxvfiYquQ
  // for detailed instruction, please visit the website
  return i.toString(2).match(/1/g) ? i.toString(2).match(/1/g).length : 0;
}

// https://edabit.com/challenge/5vsYNXXQ7aXzQMMpQ
// for detailed instruction, please visit the website
// const REGEXP = /\.{3,}/g;

function isRepdigit(num) {
  // https://edabit.com/challenge/8vSpPNjNx6JBcvxdc
  // for detailed instruction, please visit the website
  if (num < 0) {
    return false;
  }
  if (num === 0) {
    return true;
  }
  let stringNum = num.toString(10);
  return stringNum.length === stringNum.match(/\d/g).filter((elem, index, array) => elem === array[0]).length;
}

function indexMultiplier(arr) {
  // https://edabit.com/challenge/3Efavz8YmSBia4p8s
  // for detailed instruction, please visit the website
  return arr.reduce((acc, value, index) => acc + value * index, 0);
}

function countTrue(arr) {
  // https://edabit.com/challenge/GLbuMfTtDWwDv2F73
  // for detailed instruction, please visit the website
  return arr.filter(elem => elem).length;
}

function bbqSkewers(grill) {
  // https://edabit.com/challenge/uAGzHNBWbNj2iNqLr
  // for detailed instruction, please visit the website
  let meat = 0;
  for(let index=0; index<grill.length; index++) {
    if(grill[index].match(/x/)){
      meat++;
    }
  }
  return [grill.length-meat, meat];
}

function clearFog(str) {
  // https://edabit.com/challenge/cHNEFGeQrH3nonwJw
  // for detailed instruction, please visit the website
  return str.match(/[fog]/gi) ? str.match(/[^fog]/gi).join("") : "It's a clear day!";
}

function solveForExp(a, b) {
  // https://edabit.com/challenge/PXau3Fzk8GXgF6oRQ
  // for detailed instruction, please visit the website
  let powah =0;
  while(b!==1){
    b=b/a;
    powah++
  }
  // let power = Math.log(b)/Math.log(a);
  return powah;
}

function progressDays(runs) {
  // https://edabit.com/challenge/QtcPzxgcZJQdsfdMS
  // for detailed instruction, please visit the website
  let progress = 0;
  for (let index = 1; index < runs.length; index++) {
    if (runs[index] > runs[index - 1]) {
      progress++
    }
  }
  return progress;
}

// https://edabit.com/challenge/7KbZc8QvzqrJPaE6Q
// for detailed instruction, please visit the website
// const REGEXP = /(red|blue) flag/g;


function checkEquals(arr1, arr2) {
  // Fix this broken code!
  // https://edabit.com/challenge/3jZyJTfsXTXXwAQkA
  // for detailed instruction, please visit the website
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
}

function censor(str) {
  // https://edabit.com/challenge/huiJkoQzegoc5qeCJ
  // for detailed instruction, please visit the website
  return str.split(' ').map(word => word.length > 4 ? '*'.repeat(word.length) : word).join(' ');
}

function getEquivalent(note) {
  // https://edabit.com/challenge/ZMk2HeNSWX7vRewcD
  // for detailed instruction, please visit the website
  let equivalentNote = '';
  if (note[1] === '#') {
    equivalentNote = String.fromCharCode(note.charCodeAt(0) === 71 ? 65 : note.charCodeAt(0) + 1) + "b";
  } else {
    equivalentNote = String.fromCharCode(note.charCodeAt(0) === 65 ? 71 : note.charCodeAt(0) - 1) + "#"
  }
  return equivalentNote;
}

function removeDups(arr) {
  // https://edabit.com/challenge/Wd7WKqm95jhcAGATG
  // for detailed instruction, please visit the website
  let withOutDuplicate = [];
  for (let index = 0; index < arr.length; index++) {
    let currentElement = arr[index];
    if (!withOutDuplicate.includes(currentElement)) {
      withOutDuplicate.push(currentElement);
    }
  }
  return withOutDuplicate;
}

function inBox(arr) {
  // https://edabit.com/challenge/CKEAH6cs5Tt7aKXKv
  // for detailed instruction, please visit the website
  let starCounter = 0;
  for (let index = 0; index < arr.length; index++) {
    if (index === 0 || index === arr.length - 1) {
      if (arr[index].includes('*')) {
        return false;
      }
    }
    if (arr[index].substring(1, arr[index].length - 1).includes('*')) {
      starCounter++;
    }
  }
  return starCounter === 0 ? false : true;
}

function rps(p1, p2) {
  // https://edabit.com/challenge/uXf7RQ5am84tup7mQ
  // for detailed instruction, please visit the website
  const nemesis = {
    "Rock": "Paper",
    "Paper": "Scissors",
    "Scissors": "Rock"
  }
  if (nemesis[p1] === p2) {
    return "The winner is p2";
  }
  if (nemesis[p2] === p1) {
    return "The winner is p1";
  }
  return "It's a draw";
}

function mean(num) {
  // https://edabit.com/challenge/JAgtuPDXj6BrDMxa5
  // for detailed instruction, please visit the website
  return num.toString(10).split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0) / num.toString(10).length;
}

function afterNYears(names, n) {
  // https://edabit.com/challenge/xtDkfWxEh2hbmAHvn
  // for detailed instruction, please visit the website
  for (let key in names) {
    names[key] = names[key] + Math.abs(n);
  }
  return names;
}

function oneOddOneEven(n) {
  // https://edabit.com/challenge/d3ZmD3EiNdECFyyPR
  // for detailed instruction, please visit the website
  return n.toString(10).split('').reduce((acc, d) => acc + parseInt(d, 10), 0) % 2 === 1;
}


/*
// https://edabit.com/challenge/W6RRCaj8mZJgiRAgy
// for detailed instruction, please visit the website
function anotherFunc() {
  let str = "bye"
  setTimeout(() => {
    callback(str);
  }, 100)
}

var doc = "hello"

function callback(str) {
  doc = str
}
*/

function findNaN(number) {
  // https://edabit.com/challenge/zwPbeSJHoyiRT72h2
  // for detailed instruction, please visit the website
  for (let index = 0; index < number.length; index++) {
    if (isNaN(number[index])) {
      return index;
    }
  }
  return -1;
}

function rev(n) {
  // https://edabit.com/challenge/qrDWy9xS8BrfhLS6o
  // for detailed instruction, please visit the website
  // PS) I think what the submitter was meant to restrict using reverse method.
  let absN = Math.abs(n);
  let reversedN = "";
  while (absN !== 0) {
    reversedN += absN % 10;
    absN = Math.floor(absN / 10);
  }
  return reversedN;
}

function hackerSpeak(str) {
  // https://edabit.com/challenge/cada8J3AWGRhwQhkk
  // for detailed instruction, please visit the website
  const encryption = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5'
  }
  return str.split('').map(char => encryption[char] || char).join('');
}

function getMiddle(str) {
  // https://edabit.com/challenge/R3649PDvoFf6wGxyg
  // for detailed instruction, please visit the website
  return str.length % 2 === 1 ? str[Math.round(str.length / 2) - 1] : str.substring(Math.round(str.length / 2) - 1, Math.round(str.length / 2) + 1);
}

function makeTitle(str) {
  // https://edabit.com/challenge/LvtsCQNpx7CwHGubf
  // for detailed instruction, please visit the website
  return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}

// Joshua Mak's answer
// https://edabit.com/user/ssh2AYXYc7RpKdaFT
// let makeTitle = s => s.replace(/(^|\s)[a-z]/g, c => c.toUpperCase())

function addsNum(n) {
  // https://edabit.com/challenge/q4FkAnRFwDq5LXqkf
  // for detailed instruction, please visit the website
  return function (anotherN) {
    return anotherN + n;
  }
}

function giveMeSomething(a) {
  // https://edabit.com/challenge/MvZK536X7fyrWH8Qc
  return "something "+a;
}

function mathematicalExp(exp, numbers) {
  // https://edabit.com/challenge/9L9twcL5Fr7yTuQ2C
  let matched = exp.match(/f\((?<variable>\w)\)\=(?<expression>.+)/)
  let variable = matched.groups.variable;
  let expression = matched.groups.expression;
  let result = [];
  for(let index=0; index<numbers.length; index++){
    if(expression.match(/\^/)){
      let power = Number(expression.match(/\^(?<power>\d)/).groups.power);
      let newExpression = [];
      for(let limit=0; limit<power; limit++){
        newExpression.push(variable);
      }
      expression = newExpression.join('*');
    }
    let re = new RegExp(variable, 'g');
    let stringForEval = expression.replace(re, numbers[index]);
    let value = eval(stringForEval);
    result.push(`f(${numbers[index]})=${value}`);
  }
  return result;
}

function letterCombinations(digits) {
  // https://edabit.com/challenge/npLurjMJofmFRCJwx
  let possibleLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  let lettersForCombination = [];
  let result = [];
  digits.split('').map(digit => lettersForCombination.push(possibleLetters[digit]));
  for (let charIndex1 = 0; charIndex1 < lettersForCombination[0].length; charIndex1++){
    for (let charIndex2 = 0; charIndex2 < lettersForCombination[1].length; charIndex2++){
      if(digits.length<=2){
        result.push(lettersForCombination[0][charIndex1] + lettersForCombination[1][charIndex2]);
      } else {
        for (let charIndex3 = 0; charIndex3 < lettersForCombination[2].length; charIndex3++){
          result.push(lettersForCombination[0][charIndex1] + lettersForCombination[1][charIndex2] + lettersForCombination[2][charIndex3]);
        }
      }
    }
  }
  return result;
}

function staircase(n, lineNumber = 1) {
  // https://edabit.com/challenge/ZLTwdq8n5HK7DP9Eq
  let absValue = Math.abs(n);
  if (absValue < lineNumber) {
    return '';
  }
  let desiredString = '';
  if (n > 0) {
    desiredString = '_'.repeat(absValue - lineNumber) + '#'.repeat(lineNumber);
  } else {
    desiredString = '_'.repeat(lineNumber - 1) + '#'.repeat(absValue - lineNumber + 1);
  }
  desiredString += lineNumber === absValue ? '' : '\n';
  return desiredString + staircase(n, lineNumber + 1)
}

function isSubset(arr1, arr2) {
  // https://edabit.com/challenge/3ymGugubc4gTfcqcR
  if(arr1.length>arr2.length){
    return false;
  }
  for (let index = 0; index < arr1.length; index++){
    if(!arr2.includes(arr1[index])){
      return false;
    }
  }
  return true;
}

function addName(obj, name, value) {
  // https://edabit.com/challenge/9KEKJG5PZTFmG3Zau
  obj[name] = value;
  return obj;
}

function calculateDifference(obj, limit) {
  // https://edabit.com/challenge/8s2jy9hR2TAeQinKD
  let total = 0;
  for(let key in obj){
    total += obj[key];
  }
  return total-limit;
}

function bomb(str) {
  // https://edabit.com/challenge/r4hycBjiBNMs6AAjq
  let presenceOfBomb = str.match(/bomb/i);
  return presenceOfBomb? 'Duck!!!': 'There is no bomb, relax.';
}

function highestDigit(number) {
  // https://edabit.com/challenge/YJuhHKSmNCaKNHcD3
	return Number(number.toString(10).split('').sort((a,b)=> b-a)[0]);
}

function secondLargest(arr) {
  // https://edabit.com/challenge/3zAT89ZAxg4CAQqsZ
  return arr.sort((a, b) => b - a)[1];
}

function warOfNumbers(arr) {
  // https://edabit.com/challenge/Aofd78q72sAtgCyEY
  let evenTotal = 0;
  let oddTotal = 0;
  arr.map(elem => elem%2===0? evenTotal+=elem:oddTotal+=elem);
  return Math.abs(evenTotal-oddTotal);
}

function num_of_digits(num) {
  // https://edabit.com/challenge/yFJzLfYghz7ZtsyAN
  return num.toString(10).match(/\d/g).length;
}

function fiscalCode(person) {
  // https://edabit.com/challenge/Pa2rHJ6KeRBTF28Pg
  const months = {
    1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
    7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T"
  }
  let theCode = '';

  let stepOne = person.surname.match(/[^aeiou]/gi);
  let stepOneCode = stepOne.join('');
  if (stepOneCode.length>=3){
    stepOneCode = stepOneCode.substring(0, 3);
  } else {
    stepOneCode += person.surname.match(/[aeiou]/gi).join('');
    if(stepOneCode.length<3){
      stepOneCode += 'X';
    } else {
      stepOneCode = stepOneCode.substring(0, 3);
    }
  }

  let stepTwo = person.name.match(/[^aeiou]/gi);
  let stepTwoCode = '';
  if(stepTwo.length===3){
    stepTwoCode = stepTwo.join('');
  } else if(stepTwo.length>3){
    stepTwoCode = stepTwo[0] + stepTwo[2] + stepTwo[3]
  } else {
    stepTwoCode = stepTwo.join('')+person.name.match(/[aeiou]/gi).join('')
    stepTwoCode = stepTwoCode.slice(0, 3);
    if(stepTwoCode.length<3){
      stepTwoCode += 'X'
    }
  }

  let stepThree = person.dob.match(/(?<day>\d{1,2})\/(?<month>\d{1,2})\/(?<year>\d{4,4})/);
  let stepThreeCode = stepThree.groups.year.slice(2);
  stepThreeCode += months[Number(stepThree.groups.month)];
  if(person.gender==='M'){
    stepThreeCode += stepThree.groups.day.length === 2 ? stepThree.groups.day : '0' + stepThree.groups.day;
  } else {
    stepThreeCode += stepThree.groups.day.length === 2 ? (Number(stepThree.groups.day) + 40).toString(10) : '4' + stepThree.groups.day;
  }

  theCode += stepOneCode.toUpperCase() + stepTwoCode.toUpperCase() + stepThreeCode.toUpperCase();
  return theCode;
}

function countChocolates(money, cost) {
  // https://edabit.com/challenge/nqNkTkNKcwBH6geSX
  const moneyExtract = new RegExp(/(?<value>\-?\d+)\s*(\$|dollars)/,'i');
  let moneyInPocket = money.match(moneyExtract) ? Number(money.match(moneyExtract).groups.value):-1;
  let chocolatePrice = cost.match(moneyExtract) ? Number(cost.match(moneyExtract).groups.value):-1;
  if (moneyInPocket <= 0 || chocolatePrice<=0){
    return "Invalid Input"
  }
  let chocolateCounter = 0;
  while (moneyInPocket >= chocolatePrice){
    moneyInPocket -= chocolatePrice;
    chocolateCounter++;
    if (chocolateCounter!==0 && chocolateCounter%3===0){
      chocolateCounter++;
    }
  }
  if (chocolateCounter !== 0 && chocolateCounter % 3 === 0) {
    chocolateCounter++;
  }
  return chocolateCounter;
}

function measureDepth(arr) {
  // https://edabit.com/challenge/rKExAu3SwQaCJ2XA8
  if(arr === undefined){
    return 'Invalid Input';
  }
  let depthCounter = 1;
  let selected = arr[0];
  while (Array.isArray(selected)){
    depthCounter++;
    selected = selected[0];
  }
  return depthCounter;
}

function sortIt(arr) {
  // https://edabit.com/challenge/zemLfbNWaKuhrbJPt
  return arr.sort((a,b) => (a[0] || a) - (b[0] || b));
}

function isOrthogonal(arr1, arr2) {
  // https://edabit.com/challenge/qJGDCEZRoGRPt3viu
  return arr1.reduce((total, elem, index) => elem * arr2[index] + total, 0) === 0;
}

function extractPrimes(num) {
  // https://edabit.com/challenge/JpfNfZCEesy7Nz67i
  const isPrime = number => {
    if(number<2){
      return false;
    }
    let factors = [1];
    for (let divisor = 2; divisor <= number; divisor++) {
      if (number % divisor === 0) {
        factors.push(divisor);
      }
    }
    return factors.length===2;
  }
  let stringNum = num.toString(10);
  let primeNumbers = [];
  for (let targetLength = 1; targetLength <= stringNum.length; targetLength++){
    let endIndex = stringNum.length-targetLength;
    for (let index = 0; index <= endIndex; index++){
      let stringPartialNumber = stringNum.substring(index, index+targetLength);
      if (!stringPartialNumber.match(/^0\d*/)){
        let integerPartialNumber = Number(stringPartialNumber);
        if (isPrime(integerPartialNumber)){
          primeNumbers.push(integerPartialNumber);
        }
      }
    }
  }
  return primeNumbers.sort( (a,b)=>a-b);
}

function caesarCipher(s, k) {
  // https://edabit.com/challenge/a33jdGXkaQRtK9ZTs
  // A : 65
  // a : 97
  const numberOfAlphabets = 26;
  let result = '';
  for(let index=0; index<s.length; index++){
    let currentChar = s[index];
    let charCode = currentChar.charCodeAt();
    if (currentChar.match(/[A-Z]/)){
      charCode = 65 + (charCode - 65 + k) % numberOfAlphabets;
    } else if (currentChar.match(/[a-z]/)){
      charCode = 97 + (charCode - 97 + k) % numberOfAlphabets;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

function duplicateNums(nums) {
  // https://edabit.com/challenge/WYNfvyd5NRfAgtcqZ
  let checked = [];
  let duplicates = [];
  nums.map(elem => {
    if (checked.includes(elem)) {
      duplicates.push(elem);
    } else {
      checked.push(elem);
    }
  })
  return duplicates.length === 0 ? null : duplicates.sort((a, b) => a - b);
}

function isTriplet(n1, n2, n3) {
  // https://edabit.com/challenge/qfAvihoTKivTuzapt
  let threeSides = [n1, n2, n3].sort((a, b) => a - b);
  return (threeSides[0] ** 2 + threeSides[1] ** 2 - threeSides[2] ** 2) === 0;
}

function peelLayerOff(arr) {
  // https://edabit.com/challenge/mQznJjH2mtaybMCG8
  let peeledArray = [];
  let rowStart = 1;
  let rowEnd = arr.length - 1;
  let colStart = 1;
  let colEnd = arr[0].length - 1 || 0;
  for (let row = rowStart; row < rowEnd; row++) {
    let singleRow = [];
    for (let col = colStart; col < colEnd; col++) {
      singleRow.push(arr[row][col]);
    }
    peeledArray.push(singleRow);
  }
  return peeledArray;
}

function allPrime(nums) {
  // https://edabit.com/challenge/Cn5Z8vqaijYzCC7uY
  const isPrime = suspect => {
    let factors = [1];
    for (let divisor = 2; divisor <= suspect; divisor++) {
      if (suspect % divisor === 0) {
        factors.push(divisor);
      }
    }
    return factors.length === 2;
  }
  return nums.every(isPrime);
}

function numbersSum(arr) {
  // https://edabit.com/challenge/PWqkt9HiLcJSr6QEY
  return arr.reduce((total, elem) => typeof elem === 'number' ? total + elem : total + 0, 0);
}

function jazzify(arr) {
  // https://edabit.com/challenge/EMuszDzF66k9J73HG
  return arr.map(elem => elem.match(/7$/) ? elem : elem + '7');
}

function solve(eq) {
  // https://edabit.com/challenge/zrgLnPbhsNo6J6cBR
  const re = new RegExp(/(?<operator>\+|-)\s*(?<xSide>-?\d+)\s*=\s*(?<otherSide>-?\d+)/);
  let extractedInfo = eq.match(re).groups;
  let theX = null;
  if(extractedInfo.operator === '+'){
    theX = Number(extractedInfo.otherSide) - Number(extractedInfo.xSide);
  } else {
    theX = Number(extractedInfo.otherSide) + Number(extractedInfo.xSide);
  }
  return theX;
}

function isHeteromecic(n, currentN=0) {
  // https://edabit.com/challenge/rtYE79GzaQp4RccFC
	if(currentN*(currentN+1)===n){
		return true;
	} else if (currentN*(currentN+1)>n){
		return false;
	} else {
		return isHeteromecic(n, currentN+1);
	}
}

function uniqueSort(arr) {
  // https://edabit.com/challenge/CvPCBc9FtTLix9zov
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    if (!result.includes(arr[index])) {
      result.push(arr[index]);
    }
  }
  return result.sort((a, b) => a - b);
}

function numberLenSort(arr) {
  // https://edabit.com/challenge/fuvMP8KMtiQY3QXrJ
  return arr.sort((a, b) => a.toString(10).length - b.toString(10).length)
}

function tetra(n, layer = 1) {
  // https://edabit.com/challenge/zRCyxKBBmr4F2x4Bv
  let baseTriangle = 0;
  for (let index = 1; index <= layer; index++) {
    baseTriangle += index;
  }
  if (layer === n) {
    return baseTriangle;
  } else {
    return baseTriangle + tetra(n, layer + 1);
  }
}

function neutralise(s1, s2) {
  // https://edabit.com/challenge/HzxTqSHLmRC3zEfXb
  let result = '';
  for(let index=0; index<s1.length; index++){
    if (s1[index] === s2[index]){
      result += s1[index];
    } else {
      result += '0';
    }
  }
  return result;
}

function findZip(str) {
  // https://edabit.com/challenge/HLvES6FKvbFGPXs7X
  let matched = str.match(/zip/gi);
  if (matched && matched.length > 1) {
    return str.lastIndexOf(matched[matched.length - 1])
  }
  return -1;
}

function equal(a, b, c) {
  // https://edabit.com/challenge/PKiTjA7SLK99ZZ8GK
  let counter = 0;
  let strABC = '' + a + b + c;
  for (let index = 0; index < strABC.length; index++) {
    let re = new RegExp(strABC[index], 'g');
    if (strABC.match(re).length >= 2) {
      counter = strABC.match(re).length;
    }
  }
  return counter;
}

function timeToFinish(full, part) {
  // https://edabit.com/challenge/MarKs2qWR3cMHZjxy
  let fullSetenceLength = full.match(/[^\s]/g) ? full.match(/[^\s]/g).length : 0;
  let userInputLength = part.match(/[^\s]/g) ? part.match(/[^\s]/g).length : 0;
  return (fullSetenceLength - userInputLength) * 0.5;
}

function doubleLetters(word) {
  // https://edabit.com/challenge/YHLaB8itA9tEDN5TG
  for (let index = 1; index < word.length; index++) {
    if (word[index - 1] === word[index]) {
      return true;
    }
  }
  return false;
}

function reverseImage(image) {
  // https://edabit.com/challenge/uNzzNQPDQferAAGMc
  const maxValue = 1;
  let negativeImage = [];
  for(let row=0; row<image.length; row++){
    let singleRow = [];
    for(let col=0; col<image[row].length; col++){
      let invertedPixel = maxValue-image[row][col];
      singleRow.push(invertedPixel);
    }
    negativeImage.push(singleRow);
  }
  return negativeImage
}

function reverse(str) {
  // https://edabit.com/challenge/wPNzJEJebN2mewcqY
  return str.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
}

function isAnagram(s1, s2) {
  // https://edabit.com/challenge/FPamWj3Ky7ep9ApBz
  let lettersOfS1 = s1.match(/\w/g).map(char => char.toLowerCase()).sort();
  let lettersOfS2 = s2.match(/\w/g).map(char => char.toLowerCase()).sort();
  for (let index = 0; index < lettersOfS1.length; index++) {
    if (lettersOfS1[index] !== lettersOfS2[index]) {
      return false
    }
  }
  return true;
}

function calculateBonus(days) {
  // https://edabit.com/challenge/cYcKEFos6DjYQpGS7
  let [daysInZone1, daysInZone2, daysInZone3] = [0, 0, 0];
  if (days > 48) {
    daysInZone3 = days - 48;
    days = 48;
  }
  if (days > 40) {
    daysInZone2 = days - 40;
    days = 40;
  }
  if (days > 32) {
    daysInZone1 = days - 32;
  }
  let incentives = 325 * daysInZone1 + 550 * daysInZone2 + 600 * daysInZone3;
  return incentives;
}

function fibStr(n, str) {
  // https://www.twitch.tv/videos/765067935
  if (n < 3) {
    return str.join(', ');
  }
  let combinedStr = str[0] + ', ';
  let newPrevious = str[1];
  let newNext = str[1] + str[0];
  str = [newPrevious, newNext];
  return combinedStr + fibStr(n - 1, str);
}

function validatePIN(pin) {
  // https://edabit.com/challenge/RhvdtEWHAMAqkdugn
  if (pin.match(/^\d{4,4}$/) || pin.match(/^\d{6,6}$/)) {
    return true;
  }
  return false;
}

function removeSpecialCharacters(str) {
  // https://edabit.com/challenge/k7CwrsKPHrEL8h4z6
  return str.replace(/[^\w\-\s]/g, '');
}

function isValidPhoneNumber(str) {
  // https://edabit.com/challenge/nHaKL55KwW3XaGrAw
  return str.match(/^\(\d{3}\) \d{3}-\d{4}$/) ? true : false;
}

function getDay(day) {
  // https://edabit.com/challenge/K8FPxyGNDXhWQD9jX
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(day))
}

function DECIMATOR(str) {
  // https://edabit.com/challenge/qabZCHGmuTak57C7h
  let removalLength = Math.ceil(str.length / 10);
  return str.slice(0, str.length - removalLength);
}

function lastDig(a, b, c) {
  // https://edabit.com/challenge/RQtF47HMPbHDGBeW6
  let lastDigitOfA = a % 10;
  let lastDigitOfB = b % 10;
  let lastDigitOfC = c % 10;
  return (lastDigitOfA * lastDigitOfB) % 10 === lastDigitOfC;
}

function formatNum(num) {
  // https://edabit.com/challenge/5o7CE6N4uNAGDzjRg
  return num.toString(10).split('').reverse().join('').match(/(\d{1,3})/g).join(',').split('').reverse().join('');
}

function fairDie(arr) {
  // https://edabit.com/challenge/c9DRPNpNKQ7wJeEHs
  const criticalValue = 11.0705;
  let expected = arr.reduce((total, value) => total + value, 0) / 6;
  let chiSquared = arr.reduce((total, value) => total + (value - expected) ** 2, 0) / expected;
  return chiSquared < criticalValue;
}

function isAutomorphic(n) {
  // https://edabit.com/challenge/QXadaT8denMNXvn3t
  let stringSquared = (n ** 2).toString(10);
  let stringN = n.toString(10);
  return stringSquared.slice(stringSquared.length - stringN.length) === stringN;
}

function shiftRight(x, y) {
  // https://edabit.com/challenge/QMH7HFhjzTxapsoDf
  if (y < 1) {
    return Math.floor(x);
  }
  x = x / 2;
  y--;
  return shiftRight(x, y)
}

function Magic(str) {
  // https://edabit.com/challenge/x6bADPfDJPMYyzpBa
  let givenDate = str.split(' ').map(string => Number(string));
  let dM = givenDate[0] * givenDate[1];
  return givenDate[2] % (10 ** dM.toString(10).length) === dM;
}

function fizzBuzz(number) {
  // https://edabit.com/challenge/cKQA9N9Yg7ExeWusQ
  let result = [];
  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      let fizzBuzz = '';
      if (index % 3 === 0) {
        fizzBuzz += 'Fizz';
      }
      if (index % 5 === 0) {
        fizzBuzz += 'Buzz';
      }
      result.push(fizzBuzz)
    } else {
      result.push(index);
    }
  }
  return result
}

function sumFoundIndexes(arr, n) {
  // https://edabit.com/challenge/TTu48ECaTRwZDj69x
  return arr.reduce((acc, value, index) => value === n ? acc + index : acc, 0);
}

function uniqueArr(arr) {
  // https://edabit.com/challenge/Fx2NdxGzayHpfu8pS
  let checked = [];
  let uniques = [];
  for (let index = 0; index < arr.length; index++) {
    let current = arr[index];
    if (!checked.includes(current)) {
      checked.push(current);
      if (!uniques.includeds(current)){
        uniques.push(current);
      } else {
        uniques = uniques.filter( val=> val!==current);
      }
    }
  }
  return uniques.filter(val => val>0);
}

function showTheLove(arr) {
  // https://edabit.com/challenge/t5w3KeLXzs5ChWDMo
  let minimum = Math.min(...arr);
  let removed = arr.filter(value => value !== minimum).reduce((total, value) => total + value, 0) * 0.25;
  return arr.map(value => value !== minimum ? value * 0.75 : value + removed);
}

function sameAscii(a, b) {
  // https://edabit.com/challenge/y6TD7s63sm9RwByLY
  return a.split('').reduce((total, char) => total += char.charCodeAt(), 0) === b.split('').reduce((total, char) => total += char.charCodeAt(), 0)
}

function countPosSumNeg(arr) {
  // https://edabit.com/challenge/xXJLZry3vYd4erPct
  if (arr.length === 0) {
    return arr;
  }
  let numberOfPositiveNumber = 0;
  let sumOfNegativeNumbers = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      numberOfPositiveNumber++;
    } else {
      sumOfNegativeNumbers += arr[index];
    }
  }
  return [numberOfPositiveNumber, sumOfNegativeNumbers];
}

function wurstIsBetter(str) {
  // https://edabit.com/challenge/j7s4LTKexAEazQApv
  let wurst = ['kielbasa', 'chorizo', 'moronga', 'salami', 'sausage', 'andouille', 'naem', 'merguez', 'gurk', 'snorkers', 'pepperoni']
  wurst.map(toWurst => {
    let re = new RegExp(toWurst, 'gi');
    str = str.replace(re, 'Wurst');
  })
  return str;
}

function checkPattern(arr, pattern) {
  // https://bbs.ruliweb.com/family/496/board/102230
  const checkEqualPattern = (arr1, arr2) => {
    for (let index = 0; index < arr1.length; index++) {
      if (arr1[index] !== arr2[index]) {
        return false;
      }
    }
    return true;
  }
  let checkedPatterns = {}
  for (let i = 0; i < pattern.length; i++) {
    let label = pattern[i];
    let arrForChecking = arr[i];
    let keys = Object.keys(checkedPatterns);
    if (keys.includes(label)) {
      if (!checkEqualPattern(arrForChecking, checkedPatterns[label])) {
        return false;
      }
    } else {
      for (let index = 0; index < keys.length; index++) {
        let key = keys[index];
        if (checkEqualPattern(arrForChecking, checkedPatterns[key])) {
          return false;
        }
      }
      checkedPatterns[label] = arrForChecking;
    }
  }
  return true;
}

function overlapping(arr) {
  // https://edabit.com/challenge/z6ydynS7YBL9K9t3T
  let currentMin = null;
  let currentMax = null;
  for (let index = 0; index < arr.length; index++) {
    if (currentMin === null || arr[index][0] > currentMin) {
      currentMin = arr[index][0];
    }
    if (currentMax === null || arr[index][1] < currentMax) {
      currentMax = arr[index][1];
    }
  }
  let result = currentMin <= currentMax ? [currentMin, currentMax] : 'No overlapping';
  return result;
}

function invert(arr) {
  // https://edabit.com/challenge/6YfWWLSQyPJwz2Srg
  let invertedImage = [];
  for (let row = 0; row < arr.length; row++) {
    let singleRow = [];
    for (let col = 0; col < arr[row].length; col++) {
      let invertedPixel = arr[row][col].map(rgbValue => {
        if (rgbValue < 0) {
          rgbValue = 0
        } else if (rgbValue > 255) {
          rgbValue = 255;
        }
        return (255 - rgbValue);
      });
      singleRow.push(invertedPixel);
    }
    invertedImage.push(singleRow);
  }
  return invertedImage;
}

function returnEndOfNumber(num) {
  // https://edabit.com/challenge/MEgXcp8cj3vNvD42v
  let strNum = num.toString(10);
  let suffix = '-TH'
  if (strNum.match(/1[0-9]$/)) {
    return strNum + suffix;
  } else {
    if (strNum.endsWith('1')) {
      suffix = '-ST';
    }
    if (strNum.endsWith('2')) {
      suffix = '-ND';
    }
    if (strNum.endsWith('3')) {
      suffix = '-RD';
    }
  }
  return strNum + suffix;
}

function sudokuValidator(x) {
  // https://edabit.com/challenge/rGTJckjQsBDq2M8WL
  const theNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const checkNumbers = (arr) => {
    for (let index = 0; index < theNumbers.length; index++) {
      if (!arr.includes(theNumbers[index])) {
        return false;
      }
    }
    return true;
  }
  // row check
  for (let row = 0; row < x.length; row++) {
    if (!checkNumbers(x[row])) {
      return false;
    }
  }
  // col check
  for (let col = 0; col < x[0].length; col++) {
    let column = [];
    for (let row = 0; row < x.length; row++) {
      column.push(x[row][col]);
    }
    if (!checkNumbers(column)) {
      return false;
    }
  }
  // subCube check
  const getSubCubes = (arr) => {
    let subCubes = [];
    for (let row = 0; row < arr.length; row += 3) {
      for (let col = 0; col < arr[row].length; col += 3) {
        let singleSubCube = [];
        for (let index = 0; index < 9; index++) {
          singleSubCube.push(arr[row + Math.floor(index / 3)][col + index % 3]);
        }
        subCubes.push(singleSubCube);
      }
    }
    return subCubes;
  }

  let subCubes = getSubCubes(x);
  for(let index=0; index<subCubes.length; index++){
    if (!checkNumbers(subCubes[index])){
      return false;
    }
  }
  return true;
}

function ascending(str) {
  // https://edabit.com/challenge/jN89tuARCFbtQm6vE
  let numberLength = 1;
  while (numberLength <= str.length / 2) {
    let slicedNumbers = [];
    for (let index = 0; index < str.length; index += numberLength) {
      let sliced = str.slice(index, index + numberLength);
      slicedNumbers.push(Number(sliced));
    }
    let isConsecutive = true;
    for (let index = 1; index < slicedNumbers.length; index++) {
      if (slicedNumbers[index - 1] + 1 !== slicedNumbers[index]) {
        isConsecutive = false;
        break;
      }
    }
    if (isConsecutive) {
      return isConsecutive;
    } else {
      numberLength++;
    }
  }
  return false;
}

function wordNest(word, nest) {
  // https://edabit.com/challenge/yDQnwtscs6sRi27we
  const searchTarget = new RegExp(eval(`/(\w*)(${word})(\w*)/`));
  let depth = 0;
  while (nest.length > word.length) {
    nest = nest.replace(searchTarget, '$1$3');
    depth++;
  }
  return depth;
}

function adc(value) {
  // https://edabit.com/challenge/zif8ugd3u2zHjMhsY
  return Math.round(value * 5 * 100 / 1023) / 100;
}

function tpChecker(home) {
  // https://edabit.com/challenge/xhrEw5w9N45TfsgiY
  const sqsInTpPerRoll = 500;
  const avgTpUsagePerDay = 57;
  const threshHold = 14;
  let expectedDays = Math.floor(home.tp * 500 / (avgTpUsagePerDay * home.people));
  let isEnough = expectedDays > threshHold;
  let result = `Your TP will ${isEnough ? 'last' : 'only last'
    } ${expectedDays} days, ${isEnough ? 'no need to panic!' : 'buy more!'
    }`;
  return result;
}

function finalCountdown(arr) {
  // https://edabit.com/challenge/HW4ZzYmDaASKfwdq6
  let counter = 0;
  let countDownSequences = [];
  let singleCountDown = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 1) {
      singleCountDown.push(arr[index]);
      countDownSequences.push(singleCountDown);
      counter++;
      singleCountDown = [];
    } else if (arr[index] === arr[index + 1] + 1) {
      singleCountDown.push(arr[index]);
    } else {
      singleCountDown = [];
    }
  }
  return [counter, countDownSequences];
}

function uniqueInOrder(sequence) {
  // https://edabit.com/challenge/cW5gZqYEv6bszrNSw
  let currentDuplicate = null;
  let desiredArray = [];
  for (let index = 0; index < sequence.length; index++) {
    if (currentDuplicate !== sequence[index]) {
      currentDuplicate = sequence[index];
      desiredArray.push(currentDuplicate);
    }
  }
  return desiredArray;
}

function asciiSort(arr) {
  // https://edabit.com/challenge/AKocM4opFZBrva2JX
  arr.sort((a, b) => {
    const asciiSum = word => {
      return word.split('').reduce((sum, char) => sum += char.charCodeAt(), 0);
    }
    return asciiSum(a) - asciiSum(b);
  })
  return arr[0];
}

function perimeter(l, num) {
  // https://edabit.com/challenge/WEvqZTFcHeYzFn74c
  let result = (('c'.charCodeAt() % l.charCodeAt()) * 4 * num + ('s'.charCodeAt() % l.charCodeAt()) * 6.28 * num) / ('c'.charCodeAt() % l.charCodeAt() + 's'.charCodeAt() % l.charCodeAt());
  return result;
}

function count(n) {
  // https://edabit.com/challenge/wv6p5WR648oG6mTZx
  let power = 1;
  while (n % (10 ** power) !== n) {
    power++;
  }
  return power;
}

function catchZeroDivision(expr) {
  // https://edabit.com/challenge/2ncgPqA3cY35op7B2
  if (expr.match(/\/\s(?<afterDivision>.*)/)) {
    let matched = expr.match(/\/\s(?<afterDivision>.*)/).groups.afterDivision;
    if (matched.match(/\(/)) {
      let numberRightParenthesis = matched.match(/\(/g).length;
      let numberLeftParenthesis = matched.match(/\)/g).length;
      if (numberRightParenthesis !== numberLeftParenthesis) {
        let index = 0;
        while (numberRightParenthesis > 0) {
          if (matched[index] === ")") {
            numberRightParenthesis--;
          }
          index++;
        }
        matched = matched.slice(0, index);
      }
    }
    return eval(matched) === 0;
  }
  return false;
}

// https://edabit.com/challenge/fdDprqnJyvFb2QLsu
// const REGEXP = /\x65\x64\x61\x62\x69\x74/g

function hasSyncopation(s) {
  // https://edabit.com/challenge/9JGd2TFCb33SQ2rhL
  return [...s].some((sign, index) => sign === "#" && index % 2 === 1)
}

function firstNVowels(s, n) {
  // https://edabit.com/challenge/2FBEMqxiZ2z9efgQB
  let vowels = s.match(/[aeiou]/g);
  if (vowels && vowels.length >= n) {
    return vowels.join('').slice(0, n);
  }
  return 'invalid';
}

function neighboring(str) {
  // https://edabit.com/challenge/mHP2n9i4XERvCF3C8
  let charCodes = [...str].map(char => char.charCodeAt(0));
  if (charCodes.length === 1) {
    return true;
  } else if (charCodes.length === 2) {
    return Math.abs(charCodes[0] - charCodes[1]) === 1;
  } else {
    for (let index = 1; index < charCodes.length; index++) {
      let currentCharCode = charCodes[index];
      let prevCharCode = charCodes[index - 1];
      if (Math.abs(currentCharCode - prevCharCode) !== 1) {
        return false;
      }
    }
    return true;
  }
}

function isbn13(str) {
  // https://edabit.com/challenge/C5mooK3wfdhoooeLw
  let result = 'Invalid';
  if (str.length === 13) {
    let vNum = str.split('').reduce((a, d, i) => i % 2 === 0 ? a += Number(d) : a += Number(d) * 3, 0);
    if (vNum % 10 === 0) {
      result = 'Valid';
    }
  } else if (str.length === 10) {
    let vNum = str.split('').reduce((a, d, i) => d.match(/x/i) ? a += 10 * (10 - i) : a += Number(d) * (10 - i), 0);
    if (vNum % 11 === 0) {
      result = ('978' + str).slice(0, -1);
      let sum = result.split('').reduce((a, d, i) => i % 2 === 0 ? a += Number(d) : a += Number(d) * 3, 0);
      let lastDigit = 10 - sum % 10;
      result += lastDigit;
    }
  }
  return result;
}

function countRepetitions(arr) {
  // https://edabit.com/challenge/XWXprtaTWYCWBGAax
  let counting = {};
  for (let index = 0; index < arr.length; index++) {
    if (counting[arr[index]]) {
      counting[arr[index]] = counting[arr[index]] + 1;
    } else {
      counting[arr[index]] = 1;
    }
  }
  let keyValuePairs = Object.entries(counting);
  keyValuePairs.sort((a, b) => b[1] - a[1]);
  let resultInOrder = Object.fromEntries(keyValuePairs);
  return resultInOrder
}

function isCentral(str) {
  // https://edabit.com/challenge/EatpBWKGDGvntrMmo
  const re = new RegExp(/(?<before>\s*)(?<center>\S)(?<after>\s*)/);
  let spacesBefore = str.match(re).groups.before.length;
  let spacesAfter = str.match(re).groups.after.length;
  return spacesBefore === spacesAfter;
}

function polybius(text) {
  // https://edabit.com/challenge/sGYuA9fEJLHqEBSjA
  const polybiusSquare = ['000000',
    '0abcde',
    '0fghik',
    '0lmnop',
    '0qrstu',
    '0vwxyz'];

  const slicer = (word, targetLength = 2) => {
    let result = [];
    for (let index = 0; index < word.length; index += targetLength) {
      result.push(word.slice(index, index + targetLength));
    }
    return result;
  }

  const encryptLetter = letter => {
    let lowerCased = letter.toLowerCase();
    if (lowerCased.match(/j/i)) {
      return '24';
    } else if (lowerCased.match(/\s/)) {
      return ' ';
    } else {
      for (let index = 1; index < polybiusSquare.length; index++) {
        if (polybiusSquare[index].includes(lowerCased)) {
          let stringCorrdinates = '' + index + polybiusSquare[index].indexOf(lowerCased);
          return stringCorrdinates;
        }
      }
    }
  }

  if (text.match(/\d+/g)) {
    let words = text.match(/\d+/g).map(word => slicer(word));
    return words.map(encrypted => encrypted.map(letter => polybiusSquare[letter[0]][letter[1]]).join('')).join(' ');
  } else {
    let letters = text.split('').map(letter => encryptLetter(letter));
    return letters.join('');
  }
}

function absolute(str) {
  // https://edabit.com/challenge/hK7At2a9sc4nGhwBL
  let words = str.split(' ');
  let desiredWords = words.map(word => word.match(/^a$/i) ? word + 'n absolute' : word);
  return desiredWords.join(' ');
}

function expressFactors(n) {
  // https://edabit.com/challenge/B2v5qnwvYK929TnWB
  // generating prime numbers less than 10000;
  let primeNumbers = [];
  let number = 2;
  while (number <= n) {
    let factors = [1]
    for (let divisor = 2; divisor <= number; divisor++) {
      if (number % divisor === 0) {
        factors.push(divisor);
        if (factors.length > 2) {
          continue;
        }
      }
    }
    if (factors.length === 2) {
      primeNumbers.push(number);
    }
    number++;
  }

  // getting prime factors for given 'n'
  let primeFactors = [];
  for (let index = primeNumbers.length - 1; index >= 0; index--) {
    if (primeNumbers[index] <= n && n % primeNumbers[index] === 0) {
      primeFactors.push(primeNumbers[index]);
    }
  }

  // getting powers for each prime factors
  let result = [];
  for (let index = 0; index < primeFactors.length; index++) {
    let power = 0;
    let currentBase = primeFactors[index];
    while (n % currentBase === 0 && n > 1) {
      n = n / currentBase;
      power++;
    }
    let factorWithPower = currentBase.toString(10);
    factorWithPower += power !== 1 ? `^${power}` : '';
    result.unshift(factorWithPower);
  }
  return result.join(' x ');
}

function join(arr) {
  // https://edabit.com/challenge/J6ZGG6AvXQzqRpRsy
  const tailAndHead = (word1, word2) => {
    let min = Math.min(word1.length, word2.length);
    let numberOfShared = 0;
    for(let index=1; index<=min; index++){
      let temp = word2.slice(0,index);
      if(word1.endsWith(temp)){
        numberOfShared = index;
      }
    }
    return numberOfShared;
  }
  let result = arr[0];
  let minimum = null;
  for (let index = 1; index < arr.length; index++){
    let currentShared = tailAndHead(arr[index - 1], arr[index]);
    result += arr[index].slice(currentShared);
    if (minimum === null || minimum > currentShared){
      minimum = currentShared
    }
  }
  return [result, minimum];
}

function numThenChar(arr) {
  // https://edabit.com/challenge/wkD5ChYH9ukyNSmZm
  let numbers = [];
  let letters = [];
  let giantArr = arr.flat(1).map(elem => typeof elem === 'number' ? numbers.push(elem) : letters.push(elem));
  numbers.sort((a, b) => a - b);
  letters.sort();
  let allElementsCombined = numbers.concat(letters);
  let initialLengths = arr.map(subArr => subArr.length);
  let result = [];
  let subArray = [];
  let subArrayIndex = 0;
  for (let index = 0; index < allElementsCombined.length; index++) {
    subArray.push(allElementsCombined[index]);
    if (subArray.length === initialLengths[subArrayIndex]) {
      result.push(subArray);
      subArrayIndex++;
      subArray = [];
    }
  }
  return result
}

function numToEng(n) {
  // https://edabit.com/challenge/PFH9yEZXSbAngQm7T
  const tenOrLess = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten']
  const prefix = ['placeholder', 1, 2, 'thir', 'four', 'fif',
    'six', 'seven', 'eight', 'nine'];
  const specialCase = [null, 'eleven', 'twelve'];
  if (n <= 10) {
    return tenOrLess[n];
  } else if (n < 20) {
    if (n < 13) {
      return specialCase[n - 10];
    }
    return tenOrLess[n - 10] + 'teen';
  } else if (n < 30) {
    let numberInEnglish = 'twenty';
    if (n - 20 > 0) {
      numberInEnglish += ' ' + tenOrLess[n - 20];
    }
    return numberInEnglish;
  } else {
    let numberInEnglish = '';
    if (n % 100 === n) {
      numberInEnglish = prefix[Math.floor(n / 10)] + 'ty';
      let digitOne = n % 10 === 0 ? '' : ' ' + tenOrLess[n % 10];
      return numberInEnglish + digitOne;
    } else {
      let hundred = Math.floor(n / 100);
      n = n % 100;
      numberInEnglish += tenOrLess[hundred] + ' hundred';
      if (n % 10 !== 0) {
        numberInEnglish += ' ';
      }
      return numberInEnglish + numToEng(n);
    }
  }
}

function makeDetailedList(arr) {
  // https://edabit.com/challenge/u8SiTaBmMKCYAfK3J
  let detailedList = {};
  const roomName = 0;
  const stolenItems = 1;
  const stolenItemsValue = 2;
  for (let index = 0; index < arr.length; index++) {
    let room = arr[index][roomName];
    let stolenGoods = arr[index][stolenItems];
    let stolenGoodsValue = arr[index][stolenItemsValue];
    let stolenGoodsInfo = {};
    for (let itemIndex = 0; itemIndex < stolenGoods.length; itemIndex++) {
      stolenGoodsInfo[stolenGoods[itemIndex]] = stolenGoodsValue[itemIndex];
    }
    detailedList[room] = stolenGoodsInfo;
  }
  return detailedList;
}

function minPalindromeSteps(str) {
  // https://edabit.com/challenge/zadc59oCm9Hj5xnrh
  const isPalindrome = word => {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
  }
  let minimumNeeded = 0;
  if (isPalindrome(str)) {
    return minimumNeeded;
  }
  let lastIndex = str.length - 1;
  for (let index = 1; index < str.length; index++) {
    let tempStr = str.slice(lastIndex - index);
    if (isPalindrome(tempStr)) {
      minimumNeeded = 0;
    } else {
      minimumNeeded++;
    }
  }
  return minimumNeeded;
}

function spaceWeights(planetA, weight, planetB) {
  // https://edabit.com/challenge/CaWc84kuPBzCMEcR3
  const gAccel = {
    'Mercury': 3.7,
    'Venus': 8.87,
    'Earth': 9.81,
    'Mars': 3.711,
    'Jupiter': 24.79,
    'Saturn': 10.44,
    'Uranus': 8.69,
    'Neptune': 11.15
  }
  return Math.round((weight * gAccel[planetB] / gAccel[planetA]) * 100) / 100
}

function resistanceCalculator(resistors) {
  // https://edabit.com/challenge/geb39pk8YifkrgJ95
  let parallelResistance = 0;
  let seriesResistance = 0;
  for (let index = 0; index < resistors.length; index++) {
    seriesResistance += resistors[index];
    parallelResistance += 1 / resistors[index];
  }
  parallelResistance = Math.round(1 / parallelResistance * 100) / 100;
  seriesResistance = Math.round(seriesResistance * 10) / 10;
  return [parallelResistance, seriesResistance]
}

function grabNumberSum(s) {
  // https://edabit.com/challenge/8E2BQmb5GZ8G4mkgM
  let numbers = s.match(/\d+/g).map(number => Number(number));
  return numbers.reduce((total, number) => total += number, 0);
}

function kaprekarNumbers(p, q) {
  // https://edabit.com/challenge/ZHResBjuzYzXfWHAy
  let kaprekars = [];
  for (let number = p; number <= q; number++) {
    let stringSquared = (number ** 2).toString(10);
    let lengthOfNumber = number.toString(10).length;
    let rightSideNumber = Number(stringSquared.slice(stringSquared.length - lengthOfNumber));
    let leftSideNumber = Number(stringSquared.slice(0, stringSquared.length - lengthOfNumber));
    if (rightSideNumber + leftSideNumber === number) {
      kaprekars.push(number);
    }
  }
  return kaprekars.length === 0 ? 'INVALID RANGE' : kaprekars.join(' ');
}

function fibonacciBigNumber(n) {
  // https://edabit.com/challenge/DxCJgn8TtqAupmHxd
  const stringSum = (strNum1, strNum2) => {
    let strNum1DigitsReversed = strNum1.split('').reverse();
    let strNum2DigitsReversed = strNum2.split('').reverse();
    let num1Length = strNum1DigitsReversed.length;
    let num2Length = strNum2DigitsReversed.length;
    let isPreviousSumOver9 = false;
    let summedDigitsReversed = [];
    for (let index = 0; index < num1Length || index < num2Length; index++) {
      let num1Digit = strNum1DigitsReversed[index] !== undefined ? Number(strNum1DigitsReversed[index]) : 0;
      let num2Digit = strNum2DigitsReversed[index] !== undefined ? Number(strNum2DigitsReversed[index]) : 0;
      let digitWiseSum = num1Digit + num2Digit;
      if (isPreviousSumOver9) {
        digitWiseSum++;
        isPreviousSumOver9 = false;
      }
      if (digitWiseSum > 9) {
        isPreviousSumOver9 = true;
        digitWiseSum = digitWiseSum % 10;
      }
      summedDigitsReversed.push(digitWiseSum);
    }
    if (isPreviousSumOver9){
      summedDigitsReversed.push(1);
    }
    let summedDigits = summedDigitsReversed.reverse();
    return summedDigits.join('');
  }
  let prevNum = '0';
  let nextNum = '1';
  if (n < 1) {
    return prevNum;
  } else if (n < 2) {
    return nextNum;
  } else {
    let temp = '';
    for (let index = 2; index <=n; index++) {
      temp = stringSum(prevNum, nextNum);
      prevNum = nextNum;
      nextNum = temp;
    }
    return temp;
  }
}

function isWristband(arr) {
  // https://edabit.com/challenge/HX5eEuKb7epMgsKsj
  // horizontal check
  let isPatterned = true;
  for (let row = 0; row < arr.length; row++) {
    let target = arr[row][0];
    if (arr[row].some(element => element !== target)) {
      isPatterned = false;
    }
  }
  if (isPatterned) {
    return isPatterned;
  } else {
    isPatterned = true;
  }

  // vertical check
  for (let col = 0; col < arr[0].length; col++) {
    let target = arr[0][col];
    let column = [];
    for (let row = 0; row < arr.length; row++) {
      column.push(arr[row][col]);
    }
    if (column.some(element => element !== target)) {
      isPatterned = false;
    }
  }
  if (isPatterned) {
    return isPatterned;
  } else {
    isPatterned = true;
  }

  // diagonal-left
  let rowMax = arr.length;
  let colMax = arr[0].length;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      let diagonalIndexMax = Math.min(rowMax - row, colMax - col);
      let target = arr[row][col];
      let diagonal = [];
      for (let diagonalIndex = 0; diagonalIndex < diagonalIndexMax; diagonalIndex++) {
        diagonal.push(arr[row + diagonalIndex][col + diagonalIndex]);
      }
      if (diagonal.some(element => element !== target)) {
        isPatterned = false;
      }
    }
  }
  if (isPatterned) {
    return isPatterned;
  } else {
    isPatterned = true;
  }

  // diagonal-right
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      let diagonalIndexMax = Math.min(rowMax - row, col + 1);
      let target = arr[row][col];
      let diagonal = [];
      for (let diagonalIndex = 0; diagonalIndex < diagonalIndexMax; diagonalIndex++) {
        diagonal.push(arr[row + diagonalIndex][col - diagonalIndex]);
      }
      if (diagonal.some(element => element !== target)) {
        isPatterned = false;
      }
    }
  }
  if (isPatterned) {
    return isPatterned;
  }
  return isPatterned;
}

function indexFilter(idx, str) {
  // https://edabit.com/challenge/q5N9n3ZjKq5Fn2hzg
  const indexFinder = (number, strLength) => {
    if (number < 0) {
      return strLength + number;
    }
    return number;
  }
  let result = '';
  for (let index = 0; index < idx.length; index++) {
    let translatedIdx = indexFinder(idx[index], str.length)
    result += str[translatedIdx];
  }
  return result.toLowerCase();
}

function sumOddAndEven(arr) {
  // https://edabit.com/challenge/EY4nTmp6SbAmtJz5C
	let evenSum = arr.reduce((sum, num)=>num%2===0? sum+=num:sum,0);
	let oddSum = arr.reduce((sum, num)=>Math.abs(num%2)===1? sum+=num:sum,0);
	return [evenSum, oddSum];
}

function digitsCount(num, n=1) {
  // https://edabit.com/challenge/uL2Hi8Aj3FDgW9F7q
	if(num%10===num){
		return n;
	}
	return digitsCount(Math.round(num/10), n+1);
}
