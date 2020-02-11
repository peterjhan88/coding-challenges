function almostIncreasingSequence(sequence) {
  // 100%
  var isIt = true;
  var canIgnore = true;
  for (var index = 1; index < sequence.length; index++) {
    if (sequence[index - 1] >= sequence[index]) {
      if (canIgnore) {
        canIgnore = false;
        if (index === 1) {
          continue;
        }
        if (sequence[index - 2] >= sequence[index] && sequence[index - 1] >= sequence[index + 1]) {
          isIt = false;
          break;
        } else {
          continue;
        }
      } else {
        isIt = false;
        break;
      }
    }
  }
  return isIt;
}

function centuryFromYear(year) {
  // 100%
  var century = null;
  if (year % 100 === 0) {
    century = year / 100;
  } else {
    century = 1 + (year - (year % 100)) / 100;
  }
  return century;
}

function checkPalindrome(inputString) {
  // 100%
  return inputString === inputString.split('').reverse().join('');
}

function adjacentElementsProduct(inputArray) {
  // https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m
  // 100%
  var currentHighestProduct = inputArray[0] * inputArray[1];
  for (var index = 2; index < inputArray.length; index++) {
    var currentPairsProduct = inputArray[index] * inputArray[index - 1];
    if (currentPairsProduct > currentHighestProduct) {
      currentHighestProduct = currentPairsProduct;
    }
  }
  return currentHighestProduct;
}

function shapeArea(n) {
  // https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ
  // 100%
  var result = (n - 1) * (n - 1) + n * n;
  return result;
}

function makeArrayConsecutive2(statues) {
  // https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC
  // 100%
  statues.sort((a, b) => a - b);
  var first = statues[0];
  var last = statues[statues.length - 1];
  var missing = [];
  for (var index = first; index < last; index++) {
    if (statues.indexOf(index) === -1) {
      missing.push(index);
    }
  }
  console.log(missing);
  return missing.length;
}

function reverseInParentheses(inputString) {
  // shown: 7/7, hidden 6/7
  if (!inputString.match(/\(/)) {
    return inputString;
  }
  let lastLP = inputString.lastIndexOf('(');
  let firstLP = inputString.indexOf('(');
  let firstRP = inputString.indexOf(')');
  if(lastLP<firstRP){
    let partA = inputString.slice(0, lastLP);
    let partI = inputString.slice(lastLP+1, firstRP).split('').reverse().join('');
    let partB = inputString.slice(firstRP+1);
    let reversed = partA + partI + partB;
    return reverseInParentheses(reversed);
  } else {
    let partA = inputString.slice(0, firstLP);
    let partI = inputString.slice(firstLP + 1, firstRP).split('').reverse().join('');
    let partB = inputString.slice(firstRP + 1);
    let reversed = partA + partI + partB;
    return reverseInParentheses(reversed);
  }
}
// const input1 = 'foo(bar)baz(blim)'
// const test1 = reverseInParentheses(input1);
// const expected1 = 'foorabbazmilb';
// console.log('reverseInParentheses(inputString) >>>', test1 === expected1);


// https://app.codesignal.com/challenge/ddEZp78usMvhQEu3i
function arrayConversion(inputArray) {
  const limit = Math.log(inputArray.length) / Math.log(2);
  for (var iteration = 0; iteration < limit; iteration++) {
    for (var index = 0; index < inputArray.length; index += 2) {
      console.log(inputArray[index] + inputArray[index + 2])
    }
  }
  return inputArray[0]
}

function areSimilar(a, b) {
  // shown:10/10| hidden:9/10
  if (a.length !== b.length) {
    return false;
  }
  for (var index = 0, maxSwapping = 1; index < a.length && maxSwapping >= 0; index++) {
    if (a[index] !== b[index]) {
      if (maxSwapping === 0) {
        return false;
      }
      let temp = b[index];
      const wrongIndex = a.indexOf(temp);
      if (wrongIndex === -1) {
        return false;
      }
      b[index] = b[wrongIndex];
      b[wrongIndex] = temp;
      index--;
      maxSwapping--;
    }
  }
  return true;
}

// console.log(areSimilar([1, 2, 3], [2, 1, 3]));

function palindromeRearranging(inputString) {
  // shown: 10/10 | hidden: 8/10
  // https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico
  /*
  Given a string, find out if its characters can be rearranged to form a palindrome.

    Example

  For inputString = "aabb", the output should be
  palindromeRearranging(inputString) = true.

  We can rearrange "aabb" to make "abba", which is a palindrome.
  */
  if (inputString.length % 2 === 0) {
    for (let index = 0; index < inputString.length; index++) {
      let re = new RegExp(`${inputString[index]}`, 'g')
      if (inputString.match(re).length % 2 !== 0) {
        return false;
      }
    }
  } else {
    var oddNumberAllowed = 1;
    for (let index = 0; index < inputString.length; index++) {
      let re = new RegExp(`${inputString[index]}`, 'g')
      if (inputString.match(re).length % 2 !== 0) {
        oddNumberAllowed--;
        if (oddNumberAllowed <0){
          return false;
        }
      }
    }
  }
  return true
}

// console.log(palindromeRearranging('abba'));
console.log(palindromeRearranging('abbcabb'));




/* ==========INTERVIEW QUESTION================ */
function firstDuplicate(a) {
  // shown:100% | hidden 9/11
  var duplicateObj = {
    target: -1,
    igIdx: null
  }
  for (var index = 0; index < a.length; index++) {
    var currentElem = a[index];
    var duplicateIndex = a.indexOf(currentElem, index + 1);
    if (duplicateIndex !== -1) {
      if (duplicateObj.igIdx === null || duplicateObj.igIdx > duplicateIndex) {
        duplicateObj.target = currentElem;
        duplicateObj.igIdx = duplicateIndex;
      }
    }
  }
  return duplicateObj.target;
}

// const inputA = [2, 1, 3, 5, 3, 2];
// const testA = firstDuplicate(inputA);
// const expectedA = 3;

// console.log('firstDuplicate(a) >>>', testA === expectedA);

/*
Note: Write a solution that only iterates over the string once and uses O(1)
additional memory, since this is what you would be asked to do during a real interview.
Given a string s consisting of small English letters, find and return the first instance of
a non - repeating character in it.If there is no such character, return '_'.
*/
// https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC
function firstNotRepeatingCharacter(str) {
  // shown: 10/10 | hidden: 6/9
  for (var index = 0; index < str.length; index++) {
    var re = new RegExp(str[index], 'g');
    var matched = str.match(re);
    if (matched.length===1){
      return matched[0];
    }
  }
  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));


function containsDuplicates(a) {
  // https://app.codesignal.com/interview-practice/task/CfknJzPmdbstXhsoJ
  // shown: 10/10; hidden: 7/10; - not fast enough
  for (var index = 0; index < a.length; index++) {
    if (a.indexOf(a[index]) !== a.lastIndexOf(a[index])) {
      return true;
    }
  }
  return false;
}
