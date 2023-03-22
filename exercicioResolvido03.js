
// 21 anos ou menos - jovem
// 22 a 65 -> adulto(a)
// 66 ou mais anos idoso(a)


function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem"
    } else if (idade < 66) {
        return 'Adulto(a)'
    } else if (idade < 100) {
        return 'idoso(a)'
    } else {
        return 'hi is a vampire'
    }
}

const pessoa01 = {
    nome: 'makson',
    idade: 31,
    altura: 1.83,
    profissao: "Estudante"

}

function BoasVindas(pessoa) {
    const faixaetaria = determinarFaixaEtaria(pessoa.idade)
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, tenho ${pessoa.altura}m e a minha ocupação é ser ${pessoa.profissao}`);
}

BoasVindas(pessoa01);