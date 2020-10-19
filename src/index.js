module.exports = function toReadable (number) {
    var string = number.toString(),
        units, tens, ints, word, words;

    /* If number is zero */
    if (parseInt(string) === 0) {
        return 'zero';
    }

    /* Array of numbers as words */
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    ints = string.split('').map(parseFloat).reverse();
    words = [];
    if (ints[1] === 1) {
      ints[0] += 10;
    }
    if ((word = units[ints[0]])) {
      words.push(word);
    }
    if ((word = tens[ints[1]])) {
      words.push(word);
    }
    if ((word = units[ints[2]])) {
      words.push(word + ' hundred');
    }
    return words.reverse().join(' ');
  }