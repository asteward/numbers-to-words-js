var numberReader = function(inputDigit) {
  var digitValues = {"0": "zero", "1": "one", "2": "two", "3": "three", "4": "four",
                      "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine",
                      "10": "ten", "11": "eleven", "12": "twelve", "13": "thirteen",
                      "14": "fourteen", "15": "fifteen", "16": "sixteen", "17": "seventeen",
                      "18": "eighteen", "19": "nineteen", "20": "twenty", "30": "thirty",
                      "40": "forty", "50": "fifty", "60": "sixty", "70": "seventy",
                      "80": "eighty", "90": "ninety"};
  
  if(inputDigit <= 20) {
    return digitValues[inputDigit];
  } else if (inputDigit < 100) {
    return digitValues[inputDigit[0] * 10] + " " + numberReader(inputDigit.substr(1));
  } else if (inputDigit < 1000) {
    return digitValues[inputDigit[0]] + " hundred " + numberReader(inputDigit.substr(1));
  } else if (inputDigit < 10000) {
    return digitValues[inputDigit[0]] + " thousand " + numberReader(inputDigit.substr(1));
  } else {
    return "Error - Unable to read number";
  }
};