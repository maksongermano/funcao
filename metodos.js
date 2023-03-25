// essa é a maneira de criar uma função dentro do objeto, preceba que algumas diferenças são notadas, bem como as propriedades e o parâmetro, temos que colocar (this)

const pessoa01 = {
    nome: 'makson',
    idade: 101,
    altura: 1.83,
    profissao: "Estudante",
    boasVindas: function () {
        const faixaetaria = this.determinarFaixaEtaria(this.idade)
        console.log(`Olá! Meu nome é ${this.nome}, sou um ${faixaetaria} de ${this.idade} anos, tenho ${this.altura}m e a minha ocupação é ser ${this.profissao}.`);
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem"
        } else if (this.idade < 66) {
            return 'Adulto(a)'
        } else if (this.idade < 100) {
            return 'idoso(a)'
        } else {
            return 'Vampiro'
        }
    }
}
pessoa01.boasVindas();
console.log(pessoa01.determinarFaixaEtaria());