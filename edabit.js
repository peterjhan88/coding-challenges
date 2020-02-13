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
