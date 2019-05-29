function countLetters(sentence) {
  let charCount = {};
  let sentenceLower = sentence.toLowerCase().split(" ").join("");

  for(var character of sentenceLower) {
    if (charCount[character] === undefined) {
      charCount[character] = 1;
    } else {
      charCount[character] += 1;
    }
  }

  return charCount;
}


console.log(countLetters("lighthouse in the house"));