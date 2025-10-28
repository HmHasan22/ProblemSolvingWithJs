const studentScores = [10, 20, 30, 40, 50, 60];

// calculate avarage

let sum = 0;

for (let i = 0; i < studentScores.length; i++) {
  sum += studentScores[i];
}

const avarage = sum / studentScores.length;

console.log(avarage + '\n');

//calculate max

let max = studentScores[0];

for (let i = 0; i < studentScores.length; i++) {
  if (studentScores[i] > max) {
    max = studentScores[i];
  }
}

console.log(max);

//calculate min

let min = studentScores[0];

for (let i = 0; i < studentScores.length; i++) {
  if (studentScores[i] < min) {
    min = studentScores[i];
  }
}

console.log(min);
