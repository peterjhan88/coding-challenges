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
// console.log(q.getArea());
// console.log(q.getPerimeter());


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
  let distance = str.split('').map( (char, index, original) => {
    if(char.match(/[aeiou]/)) {
      return 0;
    }
    // need to work on distance to vowel
  })
  return distance;
}
