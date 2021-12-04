const formatQuantities = (numberToFormat: number | null) => {
  if (numberToFormat === null) return 0;
  if (numberToFormat > 999) {
    var newNumber = '';
    let transformedNumber = numberToFormat.toString();
    let counter: number = 0;
    for (let i = transformedNumber.length - 1; i >= 0; i--) {
      if (counter === 3) {
        newNumber = newNumber + ',';
        counter = 1;
      } else {
        counter = counter + 1;
      }
      let currentNumber = transformedNumber.charAt(i);
      newNumber = newNumber + currentNumber.toString();
    }

    let newNumberFormated = '';
    for (let i = newNumber.length; i >= 0; i--) {
      newNumberFormated = newNumberFormated + newNumber.charAt(i - 1);
    }
    return newNumberFormated;
  }
  return numberToFormat.toString();
};

export default formatQuantities;
