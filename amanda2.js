const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function(n) {
  n = Number(n);
  let m = 1;

  while (m <= 5) {
    let r = n * m;
    console.log(n + " X " + m + " = " + r);
    m=m+1;
  }

  rl.close();
});
