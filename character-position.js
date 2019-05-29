function charPosition(sentence) {
  let charPos = {};
  let sentenceLower = sentence.toLowerCase().split(" ").join("");


  for(var position in sentenceLower) {
    if (charCount[position] === undefined) {
      charCount[position] = [];
    }
    charCount[position].push(position);
  }

  return charPos;
}


console.log(charPosition("lighthouse in the house"));