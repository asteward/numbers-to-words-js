var numberReader = function(inputDigit) {
  var digitValues = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four",
                      5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
                      10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
                      14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",
                      18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty",
                      40: "forty", 50: "fifty", 60: "sixty", 70: "seventy",
                      80: "eighty", 90: "ninety"};

  var digitSuffixes = {3: "hundred", 4: "thousand", 7: "million", 10: "billion",
                      13: "trillion", 16: "quadrillion"};

  var convertedPhrase = [];
  var numberLength = inputDigit.toString(); // Original inputDigit string
  var tempDigitString = inputDigit.toString();

  // Loop reads leading digit and adds appropriate suffix, digit-by-digit
  for(var originalCount = 0; tempDigitString.length > 0; originalCount++) {
    var digitCount = 0;
    // Get written form of index[0] digits
    if((inputDigit <= 20)) {
      return digitValues[inputDigit];
    } else if ((tempDigitString.length + 1) % 3 === 0 && (tempDigitString[0] > 1)){
      convertedPhrase.push(digitValues[tempDigitString[0] * 10]);
    } else {
      if(tempDigitString[0] !== "0")
        convertedPhrase.push(digitValues[tempDigitString[0]]);
    }
    // Add 'hundred' digit suffix
    if((tempDigitString.length % 3 === 0) && (tempDigitString[0] > 0)) {
      convertedPhrase.push(digitSuffixes[3]);
    }
    // Add other digit suffixes
    if(((tempDigitString.length - 1) % 3 === 0) && (tempDigitString.length > 3) && 
    	(numberLength[originalCount - 2] + numberLength[originalCount - 1] +
    	numberLength[originalCount]) !== "000") {
      convertedPhrase.push(digitSuffixes[tempDigitString.length]);
    } 
    // Return phrase, or remove index[0] digit from front of number
    if(tempDigitString.length < 1) {
      return convertedPhrase.join(" ");
    } else {
      digitCount++;
      tempDigitString = tempDigitString.substr(digitCount);
    }
  }
  return convertedPhrase.join(" ");
};

$(document).ready(function() {
	$("#input-number").focus();
	$("form#number-form").submit(function(event) {
		
		var phrase = numberReader($("#input-number").val());
		$("#answer").text(phrase);
		event.preventDefault();
	});
});