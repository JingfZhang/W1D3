function charPosition(sentence) {
  let charPos = {};
  let sentenceLower = sentence.toLowerCase().split(" ").join("");


  for(var position in sentenceLower) {
    if (charPos[sentenceLower[position]] === undefined) {
      charPos[sentenceLower[position]] = [];
    }
    charPos[sentenceLower[position]].push(position);
  }

  return charPos;
}


console.log(charPosition("lighthouse in the house"));