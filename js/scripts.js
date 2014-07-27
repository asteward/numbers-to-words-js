var numberReader = function(inputDigit) {
  var digitValues = {0: "", 1: "one", 2: "two", 3: "three", 4: "four",
                      5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
                      10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
                      14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",
                      18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty",
                      40: "forty", 50: "fifty", 60: "sixty", 70: "seventy",
                      80: "eighty", 90: "ninety"};
  // Removes leading zeroes
  var tempDigitString = inputDigit.toString();
  var tempReducedDigit = parseInt(tempDigitString);

  if(tempReducedDigit <= 20) {
    return digitValues[tempReducedDigit];
  } else if (tempReducedDigit < 100) {
    return digitValues[tempDigitString[0] * 10] + " " + numberReader(tempDigitString.substr(1));
  } else if (tempReducedDigit < 1000) {
    if (tempReducedDigit < 1) {
      return digitValues[inputDigit[0]] + " hundred";
    } else {
      return digitValues[tempDigitString[0]] + " hundred " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 10000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[inputDigit[0]] + " thousand";
    } else{
      return digitValues[tempDigitString[0]] + " thousand " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 100000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0] * 10] + " thousand";
    } else{
      return digitValues[tempDigitString[0] * 10] + " " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 1000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0]] + " hundred thousand";
    } else{
      return digitValues[tempDigitString[0]] + " hundred " + numberReader(tempDigitString.substr(1));
    }
    
  } else if (tempReducedDigit < 10000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0]] + " million";
    } else{
      return digitValues[tempDigitString[0]] + " million " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 100000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0] * 10] + " million";
    } else{
      return digitValues[tempDigitString[0] * 10] + " " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 1000000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0]] + " hundred million";
    } else{
      return digitValues[tempDigitString[0]] + " hundred " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 10000000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0]] + " billion";
    } else{
      return digitValues[tempDigitString[0]] + " billion " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 100000000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0] * 10] + " billion";
    } else{
      return digitValues[tempDigitString[0] * 10] + " " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 1000000000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0]] + " hundred billion";
    } else{
      return digitValues[tempDigitString[0]] + " hundred " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 10000000000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0]] + " trillion";
    } else{
      return digitValues[tempDigitString[0]] + " trillion " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 100000000000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0] * 10] + " trillion";
    } else{
      return digitValues[tempDigitString[0] * 10] + " " + numberReader(tempDigitString.substr(1));
    }
  } else if (tempReducedDigit < 1000000000000000) {
    if (tempDigitString.substr(1) < 1) {
      return digitValues[tempDigitString[0]] + " hundred trillion";
    } else{
      return digitValues[tempDigitString[0]] + " hundred " + numberReader(tempDigitString.substr(1));
    }
  } else {
    return "Error - Unable to read number";
  }
};