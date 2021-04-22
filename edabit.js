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
  const re = new RegExp(/(\d*)(?<lastFour>\d{4,4}$)/);
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
  // generating prime numbers less than or equal to 'n';
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

function incrementalDepth(arr) {
  // https://edabit.com/challenge/jThp2fAGWuwffsokZ
  if (arr.length === 1) {
    return arr;
  }
  let result = arr.slice(0, 1);
  let theRest = arr.slice(1);
  result.push(incrementalDepth(theRest))
  return result;
}

function generation(x, y) {
  // https://edabit.com/challenge/48EJWLhF224na8po3
  let result = ''
  let gen = Math.abs(x);
  switch (gen) {
    case 0:
      result += 'me!';
      break;
    case 3:
      result += 'great ';
    case 2:
      result += 'grand';
    default:
      if (x > 0) {
        result += y === 'm' ? 'son' : 'daughter';
      } else {
        result += y === 'm' ? 'father' : 'mother';
      }
  }
  return result;
}

function endsAddTo10(nums) {
  // https://edabit.com/challenge/ki2njto7agJD3EdZ6
  let targetNumbers = [];
  for (let index = 0; index < nums.length; index++) {
    let currentN = Math.abs(nums[index]);
    let lastDigit = currentN % 10;
    let firstDigit = null;
    while (currentN > 9) {
      currentN = Math.floor(currentN / 10);
    }
    firstDigit = currentN;
    if (lastDigit + firstDigit === 10) {
      targetNumbers.push(nums[index]);
    }
  }
  return targetNumbers.length;
}

function grayscale(arr) {
  // https://edabit.com/challenge/BDbY3zSN8mcBN2Xrn
  let greyedImage = [];
  for (let row = 0; row < arr.length; row++) {
    let desiredRow = [];
    for (let col = 0; col < arr[row].length; col++) {
      let pixel = arr[row][col];
      let boundPixel = pixel.map(rgb => {
        if (rgb < 0 || rgb > 255) {
          rgb = Math.min(rgb, 255);
          rgb = Math.max(rgb, 0);
        }
        return rgb;
      })
      let greyValue = Math.round(boundPixel.reduce((total, val) => total += val, 0) / 3);
      boundPixel.fill(greyValue);
      desiredRow.push(boundPixel);
    }
    greyedImage.push(desiredRow);
  }
  return greyedImage;
}

function superheroes(heroes) {
  // https://edabit.com/challenge/FdwbNYkFrF36NwJxa
  return heroes.filter(name => !name.match(/woman/i) && name.match(/man/i)).sort();
}

function validDivision(d) {
  // https://edabit.com/challenge/dfFpj2ZBtdy5J5sen
  if (d.match(/\d+\/0/)) {
    return 'invalid'
  }
  let numbers = d.match(/\d+/g).map(strNum => Number(strNum));
  return numbers[0] % numbers[1] === 0;
}

function squares(a, b) {
  // https://edabit.com/challenge/aHFBLwgCPKBoAcJAA
  let counter = 0;
  let theStart = Math.ceil(Math.pow(a, 0.5))
  let theMax = Math.floor(Math.pow(b, 0.5))
  for (let number = theStart; number <= theMax; number++) {
    if (number ** 2 <= b) {
      counter++;
    }
  }
  return counter;
}

function operation(a, b, op) {
  // https://edabit.com/challenge/mgCKn998CNowjAZBF
  const operators = {
    'add': '+',
    'subtract': '-',
    'divide': '/',
    'multiply': '*'
  };
  if (operators[op] === '/' && b === '0') {
    return 'undefined';
  }
  let equation = a + operators[op] + b;
  return eval(equation);
}

function lcm(nums) {
  // https://edabit.com/challenge/gR9DKqpyvBWmyoe9X
  const maxNumGiven = Math.max(...nums);

  // check prime number
  const isPrime = number => {
    let factors = [1];
    for (let divisor = 2; divisor <= number; divisor++) {
      if (number % divisor === 0) {
        factors.push(divisor);
      }
    }
    return factors.length === 2;
  }

  // get prime numbers less than the maximum number given
  let primes = [];
  for (let n = 2; n <= maxNumGiven; n++) {
    if (isPrime(n)) {
      primes.push(n);
    }
  }

  // get prime factors
  const getPrimeFactors = number => {
    let primeFactors = {};
    let index = 0;
    while (number > 1) {
      let primeNumber = primes[index];
      if (number % primeNumber === 0) {
        number = number / primes[index];
        if (!primeFactors[primeNumber]) {
          primeFactors[primeNumber] = [primeNumber];
        } else {
          primeFactors[primeNumber].push(primeNumber)
        }
      } else {
        index++;
      }
    }
    return primeFactors;
  }

  // get primes factors of give nums
  let factoredNums = nums.map(num => getPrimeFactors(num));

  // collect factors for lcm
  let lcmFactors = {};
  for(let index=0; index<factoredNums.length; index++){
    let factorsOfANumber = factoredNums[index]
    for (let key in factorsOfANumber){
      if (!lcmFactors[key] || lcmFactors[key].length < factorsOfANumber[key].length){
        lcmFactors[key] = factorsOfANumber[key];
      }
    }
  }

  // calculate lcm
  let lcm = 1;
  for(let key in lcmFactors){
    lcm = lcm * lcmFactors[key].reduce((total, num) => total*=num,1);
  }
  return lcm;
}

function hoursPassed(t1, t2) {
  // https://edabit.com/challenge/CFszCxtcmqAsgZdw8
  const getTimeIn24 = stringTime => {
    let time = stringTime.split(' ');
    let hour = Number(time[0].split(':')[0]);
    if (time[1] === 'PM') {
      hour += 12;
    } else if (time[1] === 'AM' && hour === 12) {
      hour = 0;
    }
    return hour;
  }
  let t1Hour = getTimeIn24(t1);
  let t2Hour = getTimeIn24(t2);
  if (t2Hour - t1Hour === 0) {
    return 'no time passed';
  }
  if (t2Hour - t1Hour < 0) {
    return `${24 + (t2Hour - t1Hour)} hours`;
  } else {
    return `${t2Hour - t1Hour} hours`;
  }
}

function spotlightSum(n) {
  // https://edabit.com/challenge/PZ7rZh9C47CvYHfN2
  const theGrid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
  ];
  let rowIndex = Math.floor(n / 10) - 1;
  let colIndex = n % 10 - 2;
  let total = 0;
  for (let row = rowIndex; row < rowIndex + 3; row++) {
    for (let col = colIndex; col < colIndex + 3; col++) {
      total += theGrid[row][col];
    }
  }
  return total;
}

function extendVowels(word, num) {
  // https://edabit.com/challenge/P4zxwFNwZPGeiDwKy
  let desiredString = '';
  if (num < 0 || num % 1 !== 0) {
    return 'invalid'
  }
  for (let index = 0; index < word.length; index++) {
    let char = word[index];
    desiredString += char;
    if (char.match(/[aeiou]/i)) {
      desiredString += char.repeat(num);
    }
  }
  return desiredString;
}

function emotify(str) {
  // https://edabit.com/challenge/Szh3ib2bpJCYXKrKa
  str = str.replace('grin', ':)');
  str = str.replace('smile', ':D');
  str = str.replace('sad', ':(');
  str = str.replace('mad', ':P');
  return str;
}

function joinDigits(n) {
  // https://edabit.com/challenge/9qrjtshZq8L5ATcKt
  let result = [];
  for (let number = 1; number <= n; number++) {
    result.push(...number.toString(10));
  }
  return result.join('-');
}

function isScalable(arr) {
  // https://edabit.com/challenge/LSPPZKTuQJhqW2Rwb
  if (arr.length >= 2) {
    for (let index = 1; index < arr.length; index++) {
      if (Math.abs(arr[index] - arr[index - 1]) > 5) {
        return false;
      }
    }
  }
  return true;
}

function fixImport(s) {
  // https://edabit.com/challenge/3XiwjSzuMN4MQN6tJ
  return s.replace(/(import \w+) (from \w+)/, '$2 $1');
}

function trueAlphabetic(str) {
  // https://edabit.com/challenge/8NDcdD8QZiMKJJaYL
  let sortedLetters = str.match(/\w/g).sort().reverse();
  let lengthArr = str.split(' ').map(word => word.length);
  let result = [];
  for (let index = 0; index < lengthArr.length; index++) {
    let sortedWord = '';
    let wordLength = lengthArr[index];
    for (let index2 = 0; index2 < wordLength; index2++) {
      sortedWord += sortedLetters.pop();
    }
    result.push(sortedWord);
  }
  return result.join(' ')
}

function countSameEnds(str) {
  // https://edabit.com/challenge/JDDeK9jSFKJbfzhMt
  let matched = str.match(/\w+/gi) || 0;
  let counter = 0;
  for (let index = 0; index < matched.length; index++) {
    if (matched[index].match(/^(\w)\w*\1$/i)) {
      counter++;
    }
  }
  return counter;
}

function splitBunches(bunches) {
  // https://edabit.com/challenge/FrFkH5BPnqz4pYpqD
  let result = [];
  for (let index = 0; index < bunches.length; index++) {
    let currentObject = bunches[index];
    let targetName = currentObject.name;
    let targetQuantity = currentObject.quantity;
    while (targetQuantity >= 1) {
      let singularObject = {
        'name': targetName,
        'quantity': 1
      };
      result.push(singularObject);
      targetQuantity--;
    }
  }
  return result;
}

function fatPrime(a, b) {
  // https://edabit.com/challenge/edP3JPvJHGigcYhQX
  const isPrime = num => {
    let factors = [1];
    for (let n = 2; n <= num; n++) {
      if (num % n === 0) {
        factors.push(n);
      }
    }
    return factors.length === 2;
  }
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  for (let num = max; num >= min; num--) {
    if (isPrime(num)) {
      return num;
    }
  }
  return 'nope'
}

function gimmeTheLetters(spectrum) {
  // https://edabit.com/challenge/sJSKWWeSYqov6ew44
  let [start, end] = spectrum.split('-');
  let result = '';
  for (let index = start.charCodeAt(); index <= end.charCodeAt(); index++) {
    result += String.fromCharCode(index);
  }
  return result;
}

function camelToSnake(str) {
  // https://edabit.com/challenge/NekgMswiPasDonSDe
  return str.replace(/[A-Z]/g, matched => '_' + matched.toLowerCase());
}

function multiplyArray(arr) {
  // https://edabit.com/challenge/7ZhszvZBs7wkEBncb
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    result.push(new Array(arr.length).fill(arr[index]));
  }
  return result;
}

// class User {
//   // https://edabit.com/challenge/7PA4jhWqDYJT4ixLp
//   static userCount = 0;
//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }
// }

function modInv(n, m) {
  // https://edabit.com/challenge/b4vuZMpjTfFzxhgvK
  let gcd = 1;
  let smallNum = Math.min(n, m);
  for (let divisor = smallNum; divisor > 1; divisor--) {
    if (n % divisor === 0 && m % divisor === 0) {
      gcd = divisor;
      break;
    }
  }
  if (gcd !== 1) {
    return false;
  }
  let modularInverse = 1;
  let temp = n * modularInverse;
  while (temp % m !== 1) {
    modularInverse++;
    temp = n * modularInverse;
  }
  return modularInverse;
}

function formatBigInt(bigNumber, decimals) {
  // https://edabit.com/challenge/cXgmHb6aXESZBvW4b
  let strBigInt = bigNumber.toString(10);
  let result = '';
  for (let index = 0; index < strBigInt.length; index++) {
    if (index + decimals === strBigInt.length) {
      result += ".";
    }
    result += strBigInt[index];
  }
  return result;
}

function isExact(n, bound = 1) {
  // https://edabit.com/challenge/chDJCBDzZkjSExMwm
  let isInteger = Number.isInteger(n);
  if (!isInteger) {
    return 'Not an exact bound!';
  }
  if (n === bound) {
    let original = 1;
    for (let number = 1; number <= bound; number++) {
      original *= number;
    }
    return [original, bound];
  }
  n = n / bound;
  bound++;
  return isExact(n, bound);
}

// https://edabit.com/challenge/H5rAoCQBjyB4woTPY
// const obj = {
//   kitchen: {
//     knives: 500,
//     stereo: 200,
//     signature: ""
//   },
//   signature: "Rocky Balboa"
// }

function signAgain(obj) {
  // write your code here
  // don't use a return statement
  Object.seal(obj.kitchen);
  Object.freeze(obj);
  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.signature = "Terminator"
  obj.extraProperty = "not possible"
  obj.kitchen.piano = 1000
  obj.kitchen.signature = "Rocky Balboa"
  return obj
}

function variableValid(variable) {
  // https://edabit.com/challenge/cGXwWujXdkx6BS3CX
	let re = new RegExp(/^[a-zA-Z_]\w*$/);
	return re.test(variable);
}

function license(me, agents, others) {
  // https://edabit.com/challenge/W3yNHjZdzie2fo2Er
  let allPeople = others.split(' ');
  allPeople.push(me);
  allPeople.sort();
  let myGroup = Math.ceil((allPeople.indexOf(me) + 1) / agents);
  return myGroup * 20;
}

function diceScore(throws) {
  // https://edabit.com/challenge/tM3qXKn2MMCYCpWMD
  const scoreTable = {
    'triple': [0, 1000, 200, 300, 400, 500, 600],
    '1': 100,
    '5': 50
  }
  let diceNumbers = {};
  for (let index = 0; index < throws.length; index++) {
    let dice = throws[index];
    if (diceNumbers[dice]) {
      diceNumbers[dice] = diceNumbers[dice] + 1;
    } else {
      diceNumbers[dice] = 1;
    }
  }
  let totalScore = 0;
  for (let diceNumber in diceNumbers) {
    let occurance = diceNumbers[diceNumber];
    if (occurance >= 3) {
      while (occurance >= 3) {
        totalScore += scoreTable.triple[diceNumber];
        occurance -= 3;
      }
    }
    let subScore = scoreTable[diceNumber] ? scoreTable[diceNumber] * occurance : 0;
    totalScore += subScore;
  }
  return totalScore;
}

function hiddenAnagram(text, phrase) {
  // https://edabit.com/challenge/7hnsWYJGc6yPqEMjc
  const originalTextJustLetters = text.match(/[a-z]/gi).map(letter => letter.toLowerCase());
  const phraseLetters = phrase.match(/[a-z]/gi).map(letter => letter.toLowerCase());
  const phraseLength = phraseLetters.length;
  let startIndex = 0;
  let copiedPhraseLetters = [...phraseLetters];
  let endIndex = startIndex + phraseLength;
  for (let index = startIndex; index < endIndex; index++) {
    let currentLetter = originalTextJustLetters[index];
    if (!copiedPhraseLetters.includes(currentLetter)) {
      startIndex++;
      endIndex = startIndex + phraseLength;
      if (endIndex > originalTextJustLetters.length){
        break;
      }
      index = startIndex-1;
      copiedPhraseLetters = [...phraseLetters];
    } else {
      let currentLetterIndex = copiedPhraseLetters.indexOf(currentLetter);
      copiedPhraseLetters.splice(currentLetterIndex, 1);
    }
  }
  if (startIndex + phraseLength > originalTextJustLetters.length) {
    return 'noutfond';
  }
  let result = originalTextJustLetters.slice(startIndex, startIndex + phraseLength);
  return result.join('');
}

function calculateArrowhead(arr) {
  // https://edabit.com/challenge/8ZQmveyijozCKFGTB
  let overallArrow = arr.join('');
  let stepsToRight = overallArrow.match(/>/g) ? overallArrow.match(/>/g).length : 0;
  let stepsToLeft = overallArrow.match(/</g) ? overallArrow.match(/</g).length : 0;
  let difference = stepsToRight - stepsToLeft;
  let result = '';
  if (difference > 0) {
    result += '>'.repeat(difference);
  } else {
    result += '<'.repeat(Math.abs(difference));
  }
  return result;
}

function heightNeeded(volume) {
  // https://edabit.com/challenge/gGWmC3BvmQ3gfAeR7
  const radius = 5;
  const litre = 1000;
  let height = volume * litre * 3 / (Math.PI * radius * radius);
  return Math.round(height * 100) / 100;
}

function verbify(str) {
  // https://edabit.com/challenge/R7g5N9rscC6jgec5G
  let [firstWord, secondWord] = str.split(' ');
  const re = new RegExp(/(\w+)(e|ed)$/);
  if (re.exec(firstWord)) {
    firstWord = firstWord.replace(re, '$1ed');
  } else {
    firstWord += 'ed';
  }
  return `${firstWord} ${secondWord}`;
}

function checkSum(arr, n) {
  // https://edabit.com/challenge/i5pr5wJfQfmugehZm
  let start = 0;
  while (start < arr.length - 1) {
    let baseNum = arr[start];
    for (let index = start + 1; index < arr.length; index++) {
      if (baseNum + arr[index] === n) {
        return true;
      }
    }
    start++;
  }
  return false;
}

function scoreIt(s) {
  // https://edabit.com/challenge/3kLXjsWRwH62Skt78
  let score = 0;
  let depth = 0;
  let digits = '';
  for(let index=0; index<s.length; index++){
    let char = s[index];
    if(char.match(/\d/)){
      digits += char;
    } else if (char.match(/\(/)){
      score += Number(digits) * depth;
      digits = "";
      depth++;
    } else if (char.match(/\)/)){
      score += Number(digits) * depth;
      digits = "";
      depth--;
    }
  }
  return score;
}

function areaOfCountry(name, area) {
  // https://edabit.com/challenge/ejfdLAp673DwxSg5R
	const totalLand = 148940000;
	let ratio = Math.round(area/totalLand * 100 * 100)/100;
	let result = `${name} is ${ratio}% of the total world's landmass`;
	return result;
}

function impedanceCalculator(Dd, Dc, er) {
  // https://edabit.com/challenge/yNS9sBcofT6NuT2kN
	let result = 138 * (Math.log(Dd/Dc)/Math.log(10)) / ( Math.sqrt(er))
	return Math.round(result*10) /10;
}

function parkingExit(arr) {
  // https://edabit.com/challenge/sGneEQ9ZvGtBuNyrr
	const car = 2
	const stair = 1;
	let result = [];
  let stepsDown = 0;
  // case of single floored parking lot
	if(arr.length===1){
    let distance = (arr[0].length-1);
		distance -= arr[0].indexOf(car);
		if(distance===0){
      return result;
		} else {
      result.push(`R${distance}`);
      return result;
    }
  }

  // all other case
	for(let row=0; row<arr.length; row++){
    let carPosition = arr[row].indexOf(car);
    let stairPosition = arr[row].indexOf(stair);
    if (carPosition !== -1 && stairPosition!==-1){
      let distance = carPosition-stairPosition;
      let distanceWithDirection = (distance>0?'L':'R')+ Math.abs(distance);
      result.push(distanceWithDirection);
      stepsDown++;
    } else if (carPosition === -1 && stairPosition !== -1){
      let previousStairPosition = arr[row - 1].indexOf(stair);
      let distance = previousStairPosition - stairPosition;
      if(distance===0){
        stepsDown++;
      } else {
        let distanceWithDirection = (distance > 0 ? 'L' : 'R') + Math.abs(distance);
        result.push(`D${stepsDown}`,  distanceWithDirection);
        stepsDown=1;
      }
    } else {
      let distance = (arr[0].length - 1) - arr[row-1].indexOf(stair);
      let distanceWithDirection = `R${Math.abs(distance)}`;
      if(distance===0){
        result.push(`D${stepsDown}`);
      } else {
        result.push(`D${stepsDown}`, distanceWithDirection);
      }
    }
	}
	return result;
}

class Twitter {
  // https://edabit.com/challenge/Nc75jSjR5nuBfx7TK
	#password = null;
	#privateTweets = [];
	constructor(user, pass){
		this.user = user;
		this.#password = pass;
	}
	checkPassword(pass){
		return pass===this.#password;
	}
	get password() {
		return '****'
	}
	set tweet(message){
		this.#privateTweets.push(message);
		if(this.#privateTweets.length>5){
      this.#privateTweets = this.#privateTweets.slice(1);
		}
	}
	get tweets(){
		return [...this.#privateTweets];
	}
}

function spinAround(r) {
  // https://edabit.com/challenge/Z8QZZJzLF4LWPA5Xw
  let currentDegree = 0;
  for (let index = 0; index < r.length; index++) {
    if (r[index].match('right')) {
      currentDegree += 90;
    } else {
      currentDegree -= 90;
    }
  }
  return Math.floor(Math.abs(currentDegree) / 360);
}

function lowerTriang(matrix) {
  // https://edabit.com/challenge/jkkhAZ2C9Zy4SHbtj
  let result = [];
  for(let row=0; row<matrix.length; row++){
    let singleRow = [];
    for(let col=0; col<matrix[row].length; col++){
      if(col>row){
        singleRow.push(0);
      } else {
        singleRow.push(matrix[row][col]);
      }
    }
    result.push(singleRow);
  }
  return result;
}

function reverseSort(str) {
  // https://edabit.com/challenge/jX6FbEai4APajFbeC
  let words = str.split(' ');
	let groupedByLength = {}
	for(let index=0; index<words.length; index++){
		let word = words[index]
		let theLength = word.length;
		if(groupedByLength[theLength]){
			groupedByLength[theLength].push(word);
		} else {
			groupedByLength[theLength] = [word];
		}
  }

	let wordsByLengthReverse = [];
	for(let [wordLength, words] of Object.entries(groupedByLength)){
		let wordObject = {
			length: Number(wordLength),
			words: words
		}
		wordsByLengthReverse.push(wordObject);
	}
	wordsByLengthReverse.sort((a,b)=>b.length-a.length);
  let result = [];
  for (let index = 0; index < wordsByLengthReverse.length; index++){
    let temp = wordsByLengthReverse[index].words;
    temp.sort((a, b) => {
      let lowA = a.toLowerCase();
      let lowB = b.toLowerCase();
      if (lowA < lowB) {
        return 1;
      }
      if (lowA > lowB) {
        return -1;
      }
      return 0;
    });
    result.push(...temp);
  }
	return result.join(' ');
}

function isConsecutive(s) {
  // https://edabit.com/challenge/3kqmmTPHjB67ieK3t
	const maxLength = s.length/2;
	let isConsecutive = false;
	for(let targetLength=1; targetLength<=maxLength; targetLength++){
    // create an array of numbers with target length
		let numbers = [];
		let start = 0;
		let end = start+targetLength;
    while (start<s.length){
			let number = Number(s.slice(start, end));
			numbers.push(number);
			start = end;
      end += targetLength;
    }

    // check consecutiveness
    let difference = numbers[1]-numbers[0];
    if(Math.abs(difference)===1){
      for(let index=0; index<numbers.length-1; index++){
        isConsecutive = true;
        if(numbers[index]+difference!==numbers[index+1]){
          isConsecutive = false;
          break;
        }
      }
    }
		if(isConsecutive){
			return isConsecutive;
		}
	}
	return isConsecutive;
}

function digitalDecipher(eMessage, key) {
  // https://edabit.com/challenge/tfeccdFSN8Eh2NiCE
  const keyByDigits = key.toString(10).split('').map(digit => Number(digit));
  let result = eMessage.map((number, index) => String.fromCharCode(number - keyByDigits[index % keyByDigits.length] + 96)).join('');
  return result;
}

function perimeter(arr) {
  // https://edabit.com/challenge/gFMNDo3TGGnA4ZuMB
  const getDistance = (pointA, pointB) => {
    let deltaX = pointB[0] - pointA[0];
    let deltaY = pointB[1] - pointA[1];
    let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return distance;
  }
  let perimeter = 0;
  for (let index = 0; index <= arr.length - 1; index++) {
    if (index === arr.length - 1) {
      perimeter += getDistance(arr[index], arr[0]);
    } else {
      perimeter += getDistance(arr[index], arr[index + 1]);
    }
  }
  return Math.round(perimeter * 100) / 100;
}

function resist(net) {
  // https://edabit.com/challenge/eWXL8Jz78hP5tW644
  // these will find resistors in series/parallel
  const seriesRE = new RegExp(/\([0-9\.,\s]+\)/g);
  const parallelRE = new RegExp(/\[[0-9\.,\s]+\]/g);

  // replace
  let containSeries = seriesRE.test(net);
  let containParallel = parallelRE.test(net);
  while (containSeries || containParallel){
    if (containSeries){
      net = net.replace(seriesRE, matched => {
        let resistors = matched.match(/[\d\.]+/g)
        resistors = resistors.map(resistorString => Number(resistorString));
        let total = resistors.reduce((totalOhm, resistorOhm) => totalOhm += resistorOhm, 0);
        return total
      })
    }
    if (containParallel) {
      net = net.replace(parallelRE, matched => {
        let resistors = matched.match(/[\d\.]+/g)
        resistors = resistors.map(resistorString => Number(resistorString));
        let total = resistors.reduce((totalOhm, resistorOhm) => totalOhm += (1/resistorOhm), 0);
        return (1/total);
      })
    }
    containSeries = seriesRE.test(net);
    containParallel = parallelRE.test(net);
  }
  let result = Math.round(Number(net)*10)/10;
  return result;
}

function primeFaster(x) {
  // https://edabit.com/challenge/FkcL7Fw9KF74rLCbK
  const limit = Math.sqrt(x);
  if (x <= 1) {
    // eliminate 1 or less
    return false;
  } else {
    if (x % 2 === 0) {
      // eliminate even
      return false;
    } else {
      for (let number = 3; number <= limit; number += 2) {
        if (x % number === 0) {
          return false;
        }
      }
      return true;
    }
  }
}

function notGoodMath(n, k) {
  // https://edabit.com/challenge/x8ucw62XkGQkv9QdR
  while (k > 0) {
    if (n % 10 === 0) {
      n /= 10;
    } else {
      n -= 1;
    }
    k--;
  }
  return n;
}

function makeWordRiddle(s) {
  // https://edabit.com/challenge/Nz7ZmEeMFZ6GznPex
	return s.replace(/(\w+)in(\w)(\w+)/i, '$2$1$3').toUpperCase();
}

function factory(num) {
  // https://edabit.com/challenge/FEiLd6HgHcwkgHTWP
  return (numberArray) => {
    return numberArray.map(number => number / num);
  }
}

function trackRobot(...steps) {
  // https://edabit.com/challenge/jfpfpH6w42tZeRo2T
  let currentPosition = [0, 0];
  let direction = [1, 1, -1, -1];
  for (let index = 0; index < steps.length; index++) {
    let sign = direction[index % 4];
    currentPosition[(index + 1) % 2] += sign * steps[index];
  }
  return currentPosition
}

function secret(text) {
  // https://edabit.com/challenge/SPsf87irFHTimcDCS
  let [parent, children] = text.split('>');
  let limitForChildren = Number(children.match(/\*(?<limit>\d+)$/).groups.limit);
  children = children.replace(/\*\d+$/, '');
  let [tagOfChildren, className] = children.split('.');
  let childrenElements = '';
  for (let index = 0; index < limitForChildren; index++) {
    childrenNumber = (index + 1).toString(10);
    childrenElements += `<${tagOfChildren} class="${className.replace(/\$+/, numberFormat => {
      return childrenNumber.padStart(numberFormat.length, '0');
    })
      }"></${tagOfChildren}>`
  }
  let result = `<${parent}>${childrenElements}</${parent}>`;
  return result;
}

function balanced(word) {
  // https://edabit.com/challenge/8QTBwLzAdaM8wkrXu
  let [leftSide, rightSide] = [0, 0];
  for (let index = 0; index < word.length / 2; index++) {
    leftSide += word[index].charCodeAt() - 95;
    rightSide += word[word.length - 1 - index].charCodeAt() - 95;
  }
  return leftSide === rightSide;
}

function sumDigProd(...numbers) {
  // https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk
	let result = numbers.reduce( (total, number) => total+=number, 0);
	if(result<1){
		return result
	}
	while(result%10!==result){
		let digits = result.toString(10).split('').map( digit=> Number(digit));
		result = digits.reduce( (total, digit) => total*=digit, 1)
	}
	return result;
}

function funcSort(arr) {
  // https://edabit.com/challenge/zi2Mvb2GZi3r34JKv
  let allInfo = [];
  for (let index = 0; index < arr.length; index++) {
    let elementInfo = {
      'originalElement': arr[index]
    }
    let potentialFunction = arr[index];
    let call = 0;
    while (typeof potentialFunction === 'function') {
      potentialFunction = potentialFunction();
      call++;
    }
    elementInfo.call = call;
    allInfo.push(elementInfo);
  }
  let result = allInfo.sort((a, b) => a.call - b.call).map(element => element.originalElement);
  return result;
}

function goldDistribution(gold) {
  // https://edabit.com/challenge/XayqZJQQ5oJJGZSqc
  let result = []
  let [mubashir, matt] = [0, 0];
  let isMubashirTurn = true;
  while (gold.length > 0) {
    let goldPile = 0;
    let lastIndex = gold.length - 1;
    if (gold[0] >= gold[lastIndex]) {
      goldPile = gold[0];
      gold.splice(0, 1);
    } else {
      goldPile = gold[lastIndex];
      gold.splice(lastIndex, 1);
    }
    if (isMubashirTurn) {
      mubashir += goldPile;
    } else {
      matt += goldPile;
    }
    isMubashirTurn = !isMubashirTurn;
  }
  return [mubashir, matt];
}

function primalStrength(n) {
  // https://edabit.com/challenge/n3w4fqdaMuCB9bjgs
  const isPrime = number => {
    const limit = Math.sqrt(number);
    if (number <= 1) {
      return false;
    } else {
      if (number % 2 === 0 && number !== 2) {
        return false;
      } else {
        for (let num = 3; num <= limit; num += 2) {
          if (number % num === 0) {
            return false;
          }
        }
        return true;
      }
    }
  }
  let smallerPrime = null;
  let biggerPrime = null;
  let difference = 1;
  while (smallerPrime === null || biggerPrime === null) {
    if (smallerPrime === null && isPrime(n - difference)) {
      smallerPrime = n - difference;
    }
    if (biggerPrime === null && isPrime(n + difference)) {
      biggerPrime = n + difference;
    }
    difference++;
  }
  let status = 'Balanced';
  if (n - smallerPrime > biggerPrime - n) {
    status = 'Strong';
  } else if (n - smallerPrime < biggerPrime - n) {
    status = 'Weak';
  }
  return status;
}

function takeDownAverage(scores) {
  // https://edabit.com/challenge/JemYN797Zmqj98YEt
  let numbers = scores.map(score => Number(score.match(/\d+/)));
  let classTotal = numbers.reduce((total, score) => total += score, 0);
  let totalStudent = numbers.length;
  let classAverage = classTotal / totalStudent;
  let targetAverage = classAverage - 5;
  let targetClassTotal = (classAverage - 5) * (totalStudent + 1);
  let targetScore = targetClassTotal - classTotal;
  return `${targetScore.toFixed(0)}%`
}

function findAllDigits(nums) {
  // https://edabit.com/challenge/5hsyLC2Ntgoqn2wAy
  let targetDigits = [...'0123456789'];
  let index = 0;
  let result = 'Missing digits!';
  while (index < nums.length && targetDigits.length > 0) {
    let currentDigits = [...nums[index].toString(10)];
    for (let digitIndex = 0; digitIndex < currentDigits.length; digitIndex++) {
      let targetIndex = targetDigits.indexOf(currentDigits[digitIndex]);
      if (targetIndex !== -1) {
        targetDigits.splice(targetIndex, 1);
      }
    }
    if (targetDigits.length === 0) {
      result = nums[index];
      break;
    }
    index++;
  }
  return result;
}

function nearestChapter(chapt, page) {
  // https://edabit.com/challenge/E5kxeJA782rNX2bch
	let pagesToBookmark = []
	for(let chapterName in chapt){
		let chapterInfo = {}
		chapterInfo['distance'] = Math.abs(chapt[chapterName] - page);
		chapterInfo['originalPage'] = chapt[chapterName];
		chapterInfo['chapterTitle'] = chapterName;
		pagesToBookmark.push(chapterInfo);
	}
	pagesToBookmark.sort((a,b)=>a.distance-b.distance);
	let nearestChapter = pagesToBookmark[0].chapterTitle;
	if(pagesToBookmark[0].distance===pagesToBookmark[1].distance){
		if(pagesToBookmark[0].originalPage<pagesToBookmark[1].originalPage){
			nearestChapter = pagesToBookmark[1].chapterTitle;
		}
	}
	return nearestChapter;
}

function overlappingRectangles(rect1, rect2) {
  // https://edabit.com/challenge/dejHsfH2qWpgu4CGC
  rect1.sort((a, b) => a.x - b.x);
  rect2.sort((a, b) => a.x - b.x);
  let leftBottomVertex = {
    'x': Math.max(rect1[0].x, rect2[0].x),
    'y': Math.max(rect1[0].y, rect2[0].y)
  };
  let rightTopVertex = {
    'x': Math.min(rect1[1].x, rect2[1].x),
    'y': Math.min(rect1[1].y, rect2[1].y)
  };
  let area = 0;
  if (leftBottomVertex.x < rightTopVertex.x && leftBottomVertex.y < rightTopVertex.y) {
    area = (rightTopVertex.x - leftBottomVertex.x) * (rightTopVertex.y - leftBottomVertex.y);
  }
  return area;
}

function happy(n) {
  // https://edabit.com/challenge/EhGY9aaNHiCqqpnL9
  const getDigitSquareSum = number => {
    let total = 0;
    while (n % 10 !== n) {
      total += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    total += (n % 10) ** 2;
    return total;
  }
  while (n !== 1 && n !== 4) {
    n = getDigitSquareSum(n);
  }
  return n === 1;
}

function convertFunctions(fn) {
  // https://edabit.com/challenge/Zf5a8fNYZ6hPJeXE4
  // function => arrow
  const fnToArrow = new RegExp(/function\s?(?<name>\w+)?\s?(?<parameter>\(.*\))\s?(?<body>\{[\s\S]*\})/);
  // arrow => function
  const arrowToFn = new RegExp(/(var\s|let\w|const\s)?(?<name>\w+)?(=|\s=\s)?(?<parameter>\(.*\))\s?=>\s?(?<body>\{[\s\S]*\})/);
  let matched = fn.match(fnToArrow);
  let convertedFunction = '';
  if (fnToArrow.exec(fn)) {
    let functionInfo = fn.match(fnToArrow).groups;
    if (functionInfo.name !== undefined) {
      convertedFunction += `const ${functionInfo.name} = `;
    }
    convertedFunction += `${functionInfo.parameter} => ${functionInfo.body}`;
  } else {
    let functionInfo = fn.match(arrowToFn).groups;
    convertedFunction += 'function ';
    if (functionInfo.name !== undefined) {
      convertedFunction += `${functionInfo.name}`;
    }
    convertedFunction += `${functionInfo.parameter} ${functionInfo.body}`;
  }
  return convertedFunction;
}

function divisibleByLeft(n) {
  // https://edabit.com/challenge/ZRvwAuxcA8SFsPoBP
  let digits = [...n.toString(10)].map(digit => Number(digit));
  let result = [];
  for (let index = 0; index < digits.length; index++) {
    let digit = digits[index];
    let previousDigit = digits[index - 1];
    if (previousDigit === undefined || digit % previousDigit !== 0) {
      result.push(false);
    } else {
      result.push(true);
    }
  }
  return result;
}

function maxPossible(n1, n2) {
  // https://edabit.com/challenge/7vowiHDR5oYksAjqQ
  let digitsOfN1 = [...n1.toString(10)].map(digit => Number(digit));
  let digitsOfN2 = [...n2.toString(10)].map(digit => Number(digit)).sort((a, b) => a - b);
  let currentMaxDigitOfN2 = digitsOfN2.pop();
  let result = [];
  for (let index = 0; index < digitsOfN1.length; index++) {
    if (currentMaxDigitOfN2 > digitsOfN1[index]) {
      result.push(currentMaxDigitOfN2);
      currentMaxDigitOfN2 = digitsOfN2.pop();
    } else {
      result.push(digitsOfN1[index]);
    }
  }
  return Number(result.join(''));
}

function stringExpansion(txt) {
  // https://edabit.com/challenge/4NKNkPZtN39cqCQMk
  let result = '';
  let matchedLetters = txt.match(/(\d[a-z]+|[a-z]+)/gi) || [];
  for (let index = 0; index < matchedLetters.length; index++) {
    let currentLetter = matchedLetters[index];
    let desiredString = '';
    let [letters] = currentLetter.match(/[a-z]+/i);
    let limit = currentLetter.match(/\d/) ? Number(currentLetter.match(/\d/)) : 1;
    for (let letterIndex = 0; letterIndex < letters.length; letterIndex++) {
      desiredString += letters[letterIndex].repeat(limit);
    }
    result += desiredString;
  }
  return result;
}

function isSet(cards) {
  // https://edabit.com/challenge/278bzxEFeTKNiKXfM
  let setOfColors = new Set();
  let setOfNumbers = new Set();
  let setOfShades = new Set();
  let setOfShapes = new Set();
  for(let index=0; index<cards.length; index++){
    let card = cards[index];
    setOfColors.add(card.color);
    setOfNumbers.add(card.number);
    setOfShades.add(card.shade);
    setOfShapes.add(card.shape);
  }
  return setOfColors.size !== 2 && setOfNumbers.size !== 2 && setOfShades.size !== 2 && setOfShapes.size !== 2
}

function mode(nums) {
  // https://edabit.com/challenge/biyHa34iTd58LfFFb
	let distinctiveElements = new Set();
	let maxOccurrence = null;
	let modeInfo = [];
	for(let index=0; index<nums.length; index++){
		distinctiveElements.add(nums[index]);
	}
	distinctiveElements.forEach( (element, key, thisSet)=> {
		let someNumber = {
			value : element,
      occurrence : nums.filter(num => num===element).length
		}
    if (maxOccurrence === null || maxOccurrence < someNumber.occurrence){
      maxOccurrence = someNumber.occurrence;
		}
		modeInfo.push(someNumber)
	});
	let result = modeInfo.filter( number => number.occurrence === maxOccurrence).map(number => number.value);
	return result;
}

function simpleTimer(seconds) {
  // https://edabit.com/challenge/Ckaeua4gBHeGBF7Lr
  let result = [];
  let hours = Math.floor(seconds / 3600);
  seconds = seconds - hours * 3600;
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;
  result.push(hours, minutes, seconds);
  result = result.map(time => ('' + time).padStart(2, '0'));
  return result.join(':');
}

function canBuild(digits, arr) {
  // https://edabit.com/challenge/sEn8HvF2pHiv4La2N
  if (arr.length < 1) {
    return true;
  }
  let digitsOfArr = arr.map(num => num.toString(10).split('')).flat(1).map(digit => digits[digit] = digits[digit] - 1);
  return digits.every(digit => digit >= 0);
}

function windowMaxes(array, windowLength) {
  // https://edabit.com/challenge/eiwM33xiRvWwpRZua
  let result = [];
  for(let index=0; index<=array.length-windowLength; index++){
    let arrayPortion = array.slice(index, index+windowLength);
    result.push(Math.max(arrayPortion));
  }
  return result;
}

function pigLatinSentence(sentence) {
  // https://edabit.com/challenge/bzir2NMSGMYDXeNEG
  let words = sentence.split(' ');
  let wordsWithPigLatin = [];
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    let newWord = null;
    if (word.match(/^[aeiou].*/i)) {
      newWord = word + 'way';
    } else {
      let firstVowel = word.match(/[aeiou]/i);
      newWord = word.replace(/^([^aeiou]*)([aeiou]+.*$)/i, '$2$1ay');
    }
    wordsWithPigLatin.push(newWord);
  }
  return wordsWithPigLatin.join(' ');
}

function verticalText(str) {
  // https://edabit.com/challenge/aBMEMcMoWbbSRjFWS
	let words = str.split(' ');
	let maxLength = Math.max(...words.map( word=> word.length));
	let transposed = [];
	for(let row=0; row<maxLength; row++){
		let newRow = [];
		for(let col=0; col<words.length; col++){
			let letter = words[col][row];
			if(letter===undefined){
				newRow.push(' ');
			} else {
				newRow.push(letter)
			}
		}
		transposed.push(newRow);
	}
	return transposed;
}

function getDays(date1, date2) {
  // https://edabit.com/challenge/3hdXjfJozQySRC3gE
  let differenceInMilliseconds = date2 - date1;
  return Math.floor(differenceInMilliseconds / (1000 * 3600 * 24));
}

function minSwaps(s1, s2) {
  // https://edabit.com/challenge/HZcpmfBg6NstB5soN
  let swapCounter = 0;
  for (let index = 0; index < s1.length; index++) {
    if (s1[index] !== s2[index]) {
      swapCounter++;
    }
  }
  return swapCounter / 2;
}

function lessEqual(arr, k) {
  // https://edabit.com/challenge/4AY5rGSq6n3had3wY
  let result = null;
  if (k === 0) {
    if (arr[k] > 1) {
      result = 1;
    }
  } else {
    arr.sort((a, b) => a - b);
    if (arr[k - 1] !== arr[k]) {
      result = arr[k - 1];
    }
  }
  return result;
}

function strMatchBy2char(a, b) {
  // https://edabit.com/challenge/tWEsR6BY3qRFP3L8r
	let matchCounter = 0;
	for(let index=0; index<a.length-1 && b.length-1; index++){
		if(a[index]===b[index] && a[index+1]===b[index+1]){
			matchCounter++;
		}
	}
	return matchCounter;
}

function evenLast(arr) {
  // https://edabit.com/challenge/vwLPMwTHQshP3PkJN
  let evenIndexed = arr.filter((element, index) => index % 2 === 0);
  let result = evenIndexed.reduce((acc, element) => acc += element * arr[arr.length - 1], 0);
  return result;
}

function combinations(k, n) {
  // https://edabit.com/challenge/Wk7ScSpAG4wLSqm8k
  const getFactorial = number => {
    let total = 1;
    for(let num = number; num>1; num--){
      total*=num;
    }
    return total;
  }
  let result = 1;
  for (let number = n; number > n - k && number>1; number--){
    result *= number;
  }
  result = result/getFactorial(k);
  return Math.floor(result);
}

function groupEdabit(arr, size) {
  // https://edabit.com/challenge/w5LTwJwDLK4uQ3Dmv
  let result = [];
  let numberOfGroups = Math.ceil(arr.length / size);
  for (let index = 0; index < arr.length; index++) {
    let subGroupsIndex = index % numberOfGroups;
    if (result[subGroupsIndex] === undefined) {
      result.push([arr[index]]);
    } else {
      result[subGroupsIndex].push(arr[index]);
    }
  }
  return result;
}

function rearrange(sentence) {
  // https://edabit.com/challenge/TZR9EM6xcJrer4Naq
  if (!sentence.match(/\w/g)) {
    return '';
  }
  let words = sentence.split(' ');
  let sortedWords = words.map(word => {
    let wordObject = {
      number: word.match(/\d+/),
      word: word.replace(/\d+/, '')
    };
    return wordObject
  })
  sortedWords.sort((a, b) => a.number - b.number);
  let result = sortedWords.map(word => word.word);
  return result.join(' ');
}

function spoonerise(phrase) {
  // https://edabit.com/challenge/CCAEMfHcmrvSwA4KR
  return phrase.replace(/([^aeiou]*)([aeiou]\w*) ([^aeiou]*)([aeiou]\w*)/, '$3$2 $1$4');
}

function removeVirus(files) {
  // https://edabit.com/challenge/kLGCKsaYKoZHdtLv7
  let result = 'PC Files: ';
  let justFiles = files.match(/PC Files: (?<files>.*)/).groups.files.split(', ') || [];
  let safeFiles = [];
  for (let index = 0; index < justFiles.length; index++) {
    let file = justFiles[index];
    if (file.match(/(virus|malware)/i)) {
      if (file.match(/^(not|anti)/)) {
        safeFiles.push(file);
      }
    } else {
      safeFiles.push(file);
    }
  }
  if (safeFiles.length === 0) {
    result += 'Empty';
  } else {
    result += safeFiles.join(', ');
  }
  return result;
}

function decomposeAddress(str) {
  // https://edabit.com/challenge/xAc7G3AzGgQzLabTe
  let re = new RegExp(/(?<streetNum>\d+) (?<street>\w+ [A-Z][a-z]) (?<city>.+), (?<state>[A-Z]{2}) (?<zipCode>\d{5})/);
  let decomposed = str.match(re).groups;
  let result = [decomposed.streetNum, decomposed.street, decomposed.city, decomposed.state, decomposed.zipCode];
  return result;
}

function bombLocation(arr) {
  // https://edabit.com/challenge/2Z5A9F7rGp4jAj22y
  const getDistance = (sensorInfo, targetCoordinates)=> {
    let [xZero, yZero, time, distanceToBomb] = sensorInfo;
    let [x, y] = targetCoordinates;
    let distance = Math.sqrt((xZero-x)**2+(yZero-y)**2);
    return distance;
  }

  // adding distance to each sensor info
  let sensorInfoWithDistance = arr.map(sensorInfo => [...sensorInfo, sensorInfo[2] * 0.343]);

  const isPointOnRightDistance = (sensorInfo, coordinates, tolerance=0) => {
    let distanceFromSensorToPoint = getDistance(sensorInfo, coordinates);
    let difference = Math.abs(sensorInfo[3] - distanceFromSensorToPoint);
    return difference <= tolerance
  }

  let result = [];
  for(let x=0; x<=50; x++){
    for(let y=0; y<=50; y++){
      let coordinates = [x, y];
      if (sensorInfoWithDistance.every(sensorInfo => isPointOnRightDistance(sensorInfo, coordinates, 0.1))){
        result = coordinates;
        return result;
      }
    }
  }
  return result;
}

function foil(len) {
  // https://edabit.com/challenge/ZSqNfoKhnjonFShpb
  // unit : cm
  const aluminumThickness = 0.0025
  const coreDiameter = 4;
  let finalDiameter = coreDiameter;
  while (len > 0) {
    let circumference = Math.PI * finalDiameter
    len -= circumference / 2
    if (len > 0) {
      finalDiameter += aluminumThickness * 2;
      len -= circumference / 2
    } else {
      finalDiameter += aluminumThickness;
    }
  }
  return Math.round(finalDiameter * 10000) / 10000;
}

function isPalindrome(p) {
  // https://edabit.com/challenge/NmmKFQWA9dzWz5can
  let justLetters = p.match(/[a-z]/gi) ? p.match(/[a-z]/gi) : '';
  if (justLetters.length < 2) {
    return true;
  } else {
    let last = justLetters.pop();
    let [first, ...rest] = justLetters;
    if (first.toLowerCase() === last.toLowerCase()) {
      return isPalindrome(rest.join(''));
    } else {
      return false;
    }
  }
}

function isEarlyBird(range, n) {
  // https://edabit.com/challenge/oPcmocNP9BDwbN43L
  let target = n.toString(10);
  let naturalNumberStringSequence = '';
  for (let number = 0; number <= range; number++) {
    naturalNumberStringSequence += number;
  }
  let result = [];
  let fromIndex = 0;
  while (naturalNumberStringSequence.indexOf(target, fromIndex) !== -1) {
    let targetIndex = naturalNumberStringSequence.indexOf(target, fromIndex);
    let targetIndexes = [];
    for (let index = 0; index < target.length; index++) {
      targetIndexes.push(targetIndex + index);
    }
    result.push(targetIndexes);
    fromIndex = targetIndex + 1;
  }
  if (result.length > 1) {
    result.push('Early Bird!');
  }
  return result;
}

function validatePN(s) {
  // https://edabit.com/challenge/LQvRrzwHzc2BAXBQx
  let pickingDigits = new RegExp(/\d/g);
  let numbersOnly = s.match(pickingDigits);
  if (numbersOnly.length === 10 || numbersOnly.length === 11) {
    if (numbersOnly.length === 11) {
      if (s.match(/[\(|\)]/g)) {
        let re = new RegExp(/\d \(\d{3}\) \d{3}\-\d{4}/);
        if (re.exec(s)) {
          return true;
        } else {
          return false;
        }
      } else {
        let re = new RegExp(/^\+?(\d)([\-\.\/\s])?\d{3}\2\d{3}\2\d{4}/);
        if (re.exec(s)) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if (s.match(/[\(|\)]/g)) {
        let re = new RegExp(/\(\d{3}\)\s(\d{3})\-(\d{4})/);
        if (re.exec(s)) {
          return true;
        } else {
          return false;
        }
      } else {
        let re = new RegExp(/(\d{3})([\-\.\/\s])?(\d{3})\2(\d{4})/);
        if (re.exec(s)) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
}

function primorial(n) {
  // https://edabit.com/challenge/NavpMQj44kMQ6bXo7
  const isPrime = number => {
    if (number <= 1) {
      return false;
    } else {
      if(number%2===0 && number!==2){
        return false;
      } else {
        const limit = Math.sqrt(number);
        for (let num=3; num<=limit; num+=2){
          if(number%num===0){
            return false;
          }
        }
        return true;
      }
    }
  }
  let primeNumbers = [2];
  let number = 3;
  while (primeNumbers.length < n) {
    if(isPrime(number)){
      primeNumbers.push(number);
    }
    number++;
  }
  return primeNumbers.reduce((ac, number) => ac *= number, 1);
}

function isPalindromeRecursive(p) {
  // https://edabit.com/challenge/NmmKFQWA9dzWz5can
  let justLetters = p.match(/[a-z]/gi) ? p.match(/[a-z]/gi) : '';
  if (justLetters.length < 2) {
    return true;
  } else {
    let last = justLetters.pop();
    let [first, ...rest] = justLetters;
    if (first.toLowerCase() === last.toLowerCase()) {
      return isPalindrome(rest.join(''));
    } else {
      return false;
    }
  }
}
