export function isFloat(num){
  return Number(num) === num && num % 1 !== 0;
}

export function getValueText(value, percentage) {
  let valueText = value;

  if(percentage < 0 && percentage !== 0) {
    valueText = '-' + valueText;
  }

  return valueText;
}