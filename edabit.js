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
