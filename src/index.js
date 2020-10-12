module.exports = function toReadable (number) {
  if(number == 0) return 'zero';
  let result = '';
  if(number % 100 < 20 && number % 100 > 9) {
    let num = number % 100;
    switch(num) {
      case 10: 
        result = 'ten';
        break;
      case 11: 
        result = 'eleven';
        break;
      case 12: 
        result = 'twelve';
        break;
      case 13: 
        result = 'thirteen';
        break;
      case 14: 
        result = 'fourteen';
        break;
      case 15: 
        result = 'fifteen';
        break;
      case 16: 
        result = 'sixteen';
        break;
      case 17: 
        result = 'seventeen';
        break;
      case 18: 
        result = 'eighteen';
        break;
      case 19: 
        result = 'nineteen';
        break;
    }
  } else {
    let num = number % 10;
    switch(num) {
      case 1: 
        result = 'one';
        break;
      case 2: 
        result = 'two';
        break;
      case 3: 
        result = 'three';
        break;
      case 4: 
        result = 'four';
        break;
      case 5: 
        result = 'five';
        break;
      case 6: 
        result = 'six';
        break;
      case 7: 
        result = 'seven';
        break;
      case 8: 
        result = 'eight';
        break;
      case 9: 
        result = 'nine';
        break;
    }
  }

  if(number % 100 > 19) {
    let tens = Math.floor((number % 100) / 10);
    if(number % 10 != 0) result = ' ' + result;
    switch(tens) {
    case 2: 
      result = 'twenty' + result;
      break;
    case 3: 
      result = 'thirty' + result;
      break;
    case 4: 
      result = 'forty' + result;
      break;
    case 5: 
      result = 'fifty' + result;
      break;
    case 6: 
      result = 'sixty' + result;
      break;
    case 7: 
      result = 'seventy' + result;
      break;
    case 8: 
      result = 'eighty' + result;
      break;
    case 9: 
      result = 'ninety' + result;
      break;
    }
  }

  if(number > 99) {
    let hundr = Math.floor(number / 100);
    if(number % 100 != 0) result = ' ' + result;
    switch(hundr) {
      case 1: 
      result = 'one hundred' + result;
      break;
    case 2: 
      result = 'two hundred' + result;
      break;
    case 3: 
      result = 'three hundred' + result;
      break;
    case 4: 
      result = 'four hundred' + result;
      break;
    case 5: 
      result = 'five hundred' + result;
      break;
    case 6: 
      result = 'six hundred' + result;
      break;
    case 7: 
      result = 'seven hundred' + result;
      break;
    case 8: 
      result = 'eight hundred' + result;
      break;
    case 9: 
      result = 'nine hundred' + result;
      break;
    }
  }
  return result;
}
