function countingCharacters(stringToCount){
    console.log (stringToCount + " has " +
          stringToCount.length + " characters. ");
}
function countingCharacters2(stringToCount, characterToFind)
          
{
  let characterCount =0;
  for (let position = 0; position < stringToCount.length; position++) {
      if (stringToCount[position] == characterToFind){
          characterCount++;
      }
  }
  console.log("String to search in: " + stringToCount);
  console.log("Character to find: " + characterToFind);
  console.log("Number of times the character appears: " + characterCount);
}
function countingCharacters3(str,search){
    let count = 0;
    let numChars = search.length;
    let lastIndex = str.length - numChars;
    for (let index = 0; index <= lastIndex; index++){
         let current = str.substring(index, index + numChars);
        if (current == search){
            count++;
        }
    }
    
    console.log("String to search in: " + str);
    console.log("Character to find: " + search);
    console.log("Number of times the character appears: " + count);
    return count;
    
}
