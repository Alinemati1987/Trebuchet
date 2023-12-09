const fs = require("fs");

// Main //
function main() {
  const data = getData();
  partOne(data);
  partTwo(data);
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

function partTwo(inputData) {
  let secondSums = 0;
  let letterDigits = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  inputData.forEach((line) => {
    let secondCalDigits = getDigitAndLetter(line, letterDigits);
    secondSums += parseInt(secondCalDigits);
  });
  consoleResults("Part TWO", secondSums);
}

function consoleResults(part, answer) {
  console.log("Answer for " + part + " is: " + answer);
}

function getDigitAndLetter(theLine, letters) {
  theLine = theLine.toLowerCase();
  const checkLetters = new RegExp(
    /one|two|three|four|five|six|seven|eight|nine/
  );
  // const availableLetters = thisLine.match(checkLetters);

  let findFirst = true;
  let findSecond = false;
  let firstDigit = 0;
  let secondDigit = 0;

  if (findFirst) {
    let fd = theLine.match(/\d/);
    firstDigit = fd;
    let fl = theLine.match(checkLetters);
    if (theLine.indexOf(fd) != 0 && fl) {
      if (theLine.indexOf(fl) < theLine.indexOf(fd)) {
        firstDigit = letters[fl];
      }
    }
    findSecond = !findSecond;
  }

  if (findSecond) {
    const lineLength = theLine.length;
    for (let index = 1; index < lineLength; index++) {
      let subStr = theLine.substring(lineLength - index);
      let sd = subStr.match(/\d/);

      if (sd) {
        secondDigit = sd;
        break;
      }
      let sl = subStr.match(checkLetters);
      if (sl) {
        secondDigit = letters[sl];
        break;
      }
    }
  }

  if (firstDigit && secondDigit) return firstDigit + secondDigit;
  else return firstDigit + firstDigit;
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
