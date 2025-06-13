const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite um número: ', resposta => {
    if (resposta % 3 == 0) {
      console.log(resposta + ' é divisível por 3.');
    } else {
      console.log(resposta + ' NÃO é divisível por 3.');
    }

  });
  