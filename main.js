// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const validateCred = (cNum) => {
  //reverse cNum array and then get/remove first value (check value)
  let reversed = cNum.slice().reverse();
  //create afterCalc array for after doubling and/or subtracting steps -> assign check value to afterCalc array
  let afterCalc = [reversed[0]];
  //create sum variable
  let sum = reversed[0];
  //iterate reverse cNum array -> start iterator variable at 1
  for (let i = 1; i < reversed.length; i++) {
    let value = reversed[i];
    if (i % 2 === 1) {
      //double each number
      value *= 2;
      //if its over 9, subtract 9
      value = value > 9 ? value - 9 : value;
    }
    //push to afterCalc array
    afterCalc.push(value);
    //add number to sum
    sum += value;
  }
  //return result of sum modulo 10 === 0
  return sum % 10 === 0;
};

const findInvalidCards = (batch) => {
  return batch.filter((numbers) => !validateCred(numbers));
};

const idInvalidCardCompanies = (invalids) => {
  let invalidCompanies = invalids.map((invalid) => {
    let firstDigit = Number(invalid.toString()[0]);
    switch (firstDigit) {
      case 3:
        return "Amex";
        break;
      case 4:
        return "Visa";
        break;
      case 5:
        return "Mastercard";
        break;
      case 6:
        return "Discover";
        break;
      default:
        return "Company not found";
        break;
    }
  });

  return [...new Set(invalidCompanies.map((company) => company))];
};

console.log(idInvalidCardCompanies(findInvalidCards(batch)));
validateCred(mystery5);
