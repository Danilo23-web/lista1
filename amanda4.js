const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const N_misterio = Math.floor(Math.random() * 21) ;

function perguntar() {
    rl.question("Digite um número: ", (input) => {
        const resposta = parseInt(input);

        if (resposta > N_misterio) {
            console.log("menor");
            perguntar();
        } else if (resposta < N_misterio) {
            console.log("maior");
            perguntar();
        } else {
            console.log("esta certo");
            rl.close();
        }
    });
}

perguntar();
