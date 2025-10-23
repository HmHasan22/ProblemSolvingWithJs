//interview coding style way.

const x = [10, 20, 30, 50, 10];

const unique = [];

for (let i = 0; i < x.length; i++) {
  let found = false;

  for (let j = 0; j < unique.length; j++) {
    if (x[i] === unique[j]) {
      found = true;
      break;
    }
  }

  if (!found) {
    unique.push(x[i]);
  }
}

console.log(unique);


//indexOf and filter

const duplicates = x.filter((item, index) => x.indexOf(item) === index);

console.log(duplicates);

