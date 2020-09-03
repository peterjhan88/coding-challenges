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

function palindromeRearranging(inputString) {
  // shown: 10/10 | hidden: 10/10
  // https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico
  /*
  Given a string, find out if its characters can be rearranged to form a palindrome.

    Example

  For inputString = "aabb", the output should be
  palindromeRearranging(inputString) = true.

  We can rearrange "aabb" to make "abba", which is a palindrome.
  */
  // after implementing skip, it passed the hidden test
  if (inputString.length % 2 === 0) {
    let characterChecked = [];
    for (let index = 0; index < inputString.length; index++) {
      let currentChar = inputString[index];
      if( characterChecked.includes(currentChar) ) {
        continue;
      }
      characterChecked.push(currentChar);
      let re = new RegExp(currentChar, 'g')
      if (inputString.match(re).length % 2 !== 0) {
        return false;
      }
    }
  } else {
    var oddNumberAllowed = 1;
    let characterChecked = [];
    for (let index = 0; index < inputString.length; index++) {
      let currentChar = inputString[index];
      if (characterChecked.includes(currentChar)) {
        continue;
      }
      characterChecked.push(currentChar);
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

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  // https://app.codesignal.com/arcade/intro/level-5/g6dc9KJyxmFjB98dL
  // 100%
  if ((yourLeft === friendsLeft || yourLeft === friendsRight) && (yourRight === friendsLeft || yourRight === friendsRight)) {
    return true;
  }
  return false;
}

function arrayMaximalAdjacentDifference(inputArray) {
  // https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE
  // 100%
  let currentMax = Math.abs(inputArray[0] - inputArray[1]);
  for (let index = 2; index < inputArray.length; index++) {
    let temp = Math.abs(inputArray[index - 1] - inputArray[index]);
    if (currentMax < temp) {
      currentMax = temp;
    }
  }
  return currentMax;
}

function isIPv4Address(inputString) {
  // https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso/solutions
  // 100%
  if (inputString.match(/[a-z]/)) {
    return false;
  }
  const ip4 = inputString.split('.');
  if (ip4.length !== 4) {
    return false;
  }
  for (var index = 0; index < ip4.length; index++) {
    let currentElem = ip4[index];
    if (isNaN(parseInt(currentElem, 10)) || parseInt(currentElem, 10) < 0 || parseInt(currentElem, 10) > 255) {
      return false;
    }
  }
  return true;
}

function avoidObstacles(inputArray) {
  // https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5
  // 100%

  const maxLength = inputArray.length;
  let jumping = 2;
  let nextValue = 0;
  let index = 0;
  inputArray = inputArray.sort( (a,b) => a-b);
  const maximumNumber = inputArray[maxLength-1];
  nextValue += jumping;
  while (nextValue <= maximumNumber) {
    let selectedElem = inputArray[index];
    if (nextValue === selectedElem) {
      jumping++;
      nextValue = 0;
      index = 0;
    } else if (nextValue > selectedElem) {
      index++;
    } else {
      nextValue += jumping;
    }
  }
  return jumping;
}

/* ==========INTERVIEW QUESTION================ */
function firstDuplicate(a) {
  // https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q
  // shown:100% | hidden 9/11
  let duplicateObj = {
    target: -1,
    igIdx: null
  }
  for (let index = 0; index < a.length; index++) {
    let currentElem = a[index];
    let duplicateIndex = a.indexOf(currentElem, index + 1);
    if (duplicateIndex !== -1) {
      if (duplicateObj.igIdx === null || duplicateObj.igIdx > duplicateIndex) {
        duplicateObj.target = currentElem;
        duplicateObj.igIdx = duplicateIndex;
      }
    }
  }
  return duplicateObj.target;
}

/*
Note: Write a solution that only iterates over the string once and uses O(1)
additional memory, since this is what you would be asked to do during a real interview.
Given a string s consisting of small English letters, find and return the first instance of
a non - repeating character in it.If there is no such character, return '_'.
*/
// https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC
function firstNotRepeatingCharacter(str) {
  // shown: 10/10 | hidden: 6/9
  // after implementing checking; 100%; (02.20.2019)
  let charsChecked = [];
  for (let index = 0; index < str.length; index++) {
    let selectedElem = str[index];
    if (!charsChecked.includes(selectedElem)) {
      charsChecked.push(selectedElem);
      let re = new RegExp(selectedElem, 'g');
      let matched = str.match(re);
      if (matched.length===1){
        return matched[0];
      }
    }
  }
  return '_';
}

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

function rotateImage(a) {
  // https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB/description
  // 100%

  const dimension = a.length;
  if (dimension ===1 ){
    return a;
  }
  let rotated = [];
  for (let col = 0; col < dimension; col++) {
    let newRow = [];
    for (let row = dimension-1; row>-1; row--) {
      newRow.push(a[row][col]);
    }
    rotated.push(newRow);
  }
  return rotated;
}

function sudoku2(grid) {
  // https://app.codesignal.com/interview-practice/task/SKZ45AF99NpbnvgTn/description
  // 100%

  const maxIteration = 9;
  const digits = new RegExp(/[1-9]/,'g');

  const appearTwice = arr => {
    if(arr) {
      const inputStr = arr.join('');
      for (let i = 0; i < inputStr.length; i++) {
        let re = new RegExp(inputStr[i], 'g');
        if (inputStr.match(re).length !== 1) {
          return inputStr;
        }
      }
    }
    return false;
  }

  // row-check
  for (let row = 0; row < maxIteration; row++) {
    let forRow = grid[row].join('').match(digits)
    let invalidSudoku = appearTwice(forRow);
    if (invalidSudoku){
      console.log(`Fails at Row${row + 1} => ${invalidSudoku}`);
      return false;
    }
  }

  // col-check
  for (let col = 0; col < maxIteration; col++) {
    let forCol = [];
    for (let row = 0; row < maxIteration; row++) {
      forCol.push(grid[row][col])
    }
    let invalidSudoku = appearTwice(forCol.join('').match(digits));
    if (invalidSudoku) {
      console.log(`Fails at Col${col+1} => ${invalidSudoku}`);
      return false;
    }
  }

  // sub-square-check
  let subSquare = [];
  for (let row = 0; row < maxIteration; row+=3){
    for (let col = 0; col < maxIteration; col+=3){
      for(let i=0; i<maxIteration; i++){
        subSquare.push(grid[Math.floor(i/3)+row][col+i%3]);
      }
      console.log(subSquare.join(''));
      let invalidSudoku = appearTwice(subSquare.join('').match(digits));
      if (invalidSudoku) {
        console.log(`Fails at Sub-Square@(${row+1}, ${col+1}) => ${invalidSudoku}`);
        return false;
      }
      subSquare = [];
    }
  }
  return true;
}

function isCryptSolution(crypt, solution) {
  // https://app.codesignal.com/interview-practice/task/yM4uWYeQTHzYewW9H/description
  // 100%
  let theTable = {};
  for (let i=0; i<solution.length; i++) {
    let currentElem = solution[i];
    theTable[currentElem[0]] = currentElem[1];
  }
  let decrypted = [];
  for(let i=0; i<crypt.length; i++){
    let currentWord = crypt[i];
    if(currentWord.length !==1 && theTable[currentWord[0]].match('0')) {
      return false;
    }
    decrypted.push(currentWord.split('').map(c => theTable[c]).join(''));
  }
  let numericDecrypted = decrypted.map( numStr => parseInt(numStr, 10));
  return numericDecrypted[2] === numericDecrypted[0] + numericDecrypted[1];
}

function boxBlur(image) {
  // Divide into 3x3
  const getSubSquare = (array, rowStart=0, colStart=0) => {
    let subSquare = [];
    let singleRow = [];
    for (let index = 0; index < 3*3; index++) {
      if (index !== 0 && index % 3 === 0) {
        subSquare.push(singleRow);
        singleRow = [];
      }
      let rowIndex = Math.floor(index / 3);
      let colIndex = index % 3;
      singleRow.push(array[rowStart+rowIndex][colStart+colIndex]);
    }
    subSquare.push(singleRow);
    return subSquare;
  };
  // Get Average of 3x3 Array
  const average3x3 = array => {
    return Math.floor(array.flat(2).reduce((acc, val)=> acc+val, 0)/9);
  }

  let subSquares = [];
  for (let row = 0; row < image.length - 2; row++){
    let subSquareSingleRow = [];
    for (let col = 0; col < image[0].length - 2; col++){
      subSquareSingleRow.push(getSubSquare(image, row, col));
    }
    subSquares.push(subSquareSingleRow);
  }

  for(let row=0; row<subSquares.length; row++){
    for(let col=0; col<subSquares[0].length; col++){
      subSquares[row][col] = average3x3(subSquares[row][col]);
    }
  }
  return subSquares;
}

function minesweeper(matrix) {
  const numberOfMinesAround = (array, givenRow, givenCol) => {
    let surroundArray = [];
    let rowLimit = array.length;
    let colLimit = array[0].length;
    let startingRow = givenRow === 0 ? 0 : givenRow - 1;
    let startingCol = givenCol === 0 ? 0 : givenCol - 1;
    let endingRow = givenRow === rowLimit - 1 ? rowLimit : givenRow + 2;
    let endingCol = givenCol === colLimit - 1 ? colLimit : givenCol + 2;
    for (let row = startingRow; row < endingRow; row++) {
      for (let col = startingCol; col < endingCol; col++) {
        if (row !== givenRow || col !== givenCol){
          surroundArray.push(array[row][col]);
        }
      }
    }
    return surroundArray.filter(element => element === true).length;
  }
  let result = [];
  for(let row=0; row<matrix.length; row++){
    let singleRow = [];
    for(let col=0; col<matrix[0].length; col++){
      singleRow.push(numberOfMinesAround(matrix, row, col));
    }
    result.push(singleRow);
  }
  return result;
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(elem => elem===elemToReplace? substitutionElem:elem);
}

function evenDigitsOnly(n) {
  let evenDigitCheck = n.toString(10).match(/[02468]/g);
  return evenDigitCheck? evenDigitCheck.join('')===n.toString(10):false;
}

function variableName(name) {
  return name.match(/^[a-zA-Z_]{1,}\w*$/) && true;
}

function alphabeticShift(inputString) {
  let characters = inputString.split('');
  let shiftedCharacters = characters.map(char => {
    let currentChar = char.charCodeAt();
    let shifted = currentChar >= 122 ? 97 : currentChar + 1;
    return String.fromCharCode(shifted);
  })
  return shiftedCharacters.join('');
}

function chessBoardCellColor(cell1, cell2) {
  const cellColor = cell => {
    let oddColumn = ['C', 'N', 'C', 'N', 'C', 'N', 'C', 'N', 'C', 'N'];
    let evenColumn = ['N', 'C', 'N', 'C', 'N', 'C', 'N', 'C', 'N', 'C'];
    let cellCoordinate = cell.split('').map(char=> char.match(/[A-H]/)?char.charCodeAt()-64: Number(char)-1);
    let colorStatus = null;
    if (cellCoordinate[0]%2===1){
      colorStatus = oddColumn[cellCoordinate[1]];
    } else {
      colorStatus = evenColumn[cellCoordinate[1]];
    }
    return colorStatus;
  }
  return cellColor(cell1) === cellColor(cell2);
}
