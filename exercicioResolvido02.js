
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



console.log(determinarFaixaEtaria(10));