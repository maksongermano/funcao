// verificar se uma pessoa é maior de idade

function verificarmaiorIdade(idade) {
    if (idade >= 18) {
        // e maiorde idade
        return true;
        console.log('Essa linha nunca será executada, pois apois o comando return ele para a execução para retornar o valor estipulado');
    } else {
        // Não é maior de idade
        return false;
    }
}

const valorRetornadoPelaFuncao = verificarmaiorIdade(20);
console.log(valorRetornadoPelaFuncao);