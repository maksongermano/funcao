// faça uma função que tem um parametro retornavel de valores. Essa função deve imprimir na tela a apresentação de uma pessoa, seguido o modelo abaixo:

// Olá, sou joão, sou jovem de 12 anos, 1.4m de altura e sou estudante


const pessoa01 = {
    nome: 'makson',
    idade: 31,
    altura: 1.83,
    profissao: "Estudante"

}

function BoasVindas(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, tenho ${pessoa.altura}m e a minha ocupação é ser ${pessoa.profissao}`);
}

BoasVindas(pessoa01);