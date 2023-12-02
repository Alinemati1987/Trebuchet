const fs = require("fs");

// Main //
function main() {
  const data = getData();
  partOne(data);

  //   const sumPortions = iterateData(data);
  //   const partOne = getResult(1, sumPortions); // Arguments => first: number of items , second: Sum of each snack
  //   const partTwo = getResult(3, sumPortions); // Arguments => first: number of items , second: Sum of each snack
  //   consoleResults([partOne, partTwo]);
}

// Functions //

function partOne(inputData) {
  let sums = 0;
  inputData.forEach((line) => {
    let calDigits = iterateLine(line);
    sums += parseInt(calDigits);
  });
  consoleResults("Part ONE", sums);
}

function consoleResults(part, answer) {
  console.log("Answer for " + part + " is: " + answer);
}

function iterateLine(thisLine) {
  let lineDigits = thisLine.match(/\d/g);
  let calNum = lineDigits[0] + lineDigits[lineDigits.length - 1];
  return calNum;
}

function getData() {
  const allData = fs.readFileSync("input.txt").toString();
  const calibrationArray = allData.trim().split("\n");
  return calibrationArray;
}

// Run the script
main();
