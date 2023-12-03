const fs = require("fs");

// Main //
function main() {
  const data = getData();
  //   partOne(data);
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
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let testInput = [
    "ttwone4vgtsrcds",
    "oneeighteight8nsnzphnmspkjxzdxhvhkgrl",
    "2eight2kqmmbsbjvxtvjhponesixtwonesn",
    "ssoneightfbfctjqv43psixsevenslqsfpkb1",
    "cvtwone2k1zmp65",
    "threethreeptz4",
    "47twothreethreeonethree7",
    "47twothreeightwonethree7",
    "kptrrdzxcninesevenfiveeight458",
    "kptrrdzxcninesevenfiveight458",
    "43fiveprxftkhpszrgsevenninebncn",
    "43fiveprxftkhpszrgseveninebncn",
    "fzqeighthree1qhjtmfdsmsf",
    "four9threefiveeight2eightgcm",
    "22threepdtqbceightninesevenvrsct",
    "22threepdtqbceightnineightsevenvrsct",
  ];

  inputData.forEach((line) => {
    // testInput.forEach((line) => {
    let calDigits = iterateLine(line, letterDigits);
    secondSums += parseInt(calDigits);
  });
  consoleResults("Part TWO", secondSums);
}

function consoleResults(part, answer) {
  console.log("Answer for " + part + " is: " + answer);
}

function iterateLine(thisLine, letters) {
  thisLine.toLowerCase();
  const checkLetters = new RegExp(
    /one|two|three|four|five|six|seven|eight|nine/g
  );
  const availableLetters = thisLine.match(checkLetters);

  if (availableLetters) {
    availableLetters.forEach((al) => {
      thisLine = thisLine.replace(al, letters[al]);
    });
  }

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
