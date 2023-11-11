
  // write your code here
	const extendHex = (shortHex) => {
  // Check and add # prefix if needed
  if (!shortHex.startsWith("#")) {
    shortHex = "#" + shortHex;
  }

  // Initialize the full hex code as an empty string
  let fullHex = "";

  // Iterate over each character in shortHex
  for (let i = 1; i < shortHex.length; i++) {
    // Duplicate each character and append to fullHex
    fullHex += shortHex[i] + shortHex[i];
  }

  // Return the extended hex code
  return "#" + fullHex;
}; 


 
// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
