const menorValor = 50
const maiorValor = 1000
const numeroAleatorio = gerarNumeroAleatorio()

const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

elementoMenorValor.textContent = menorValor
elementoMaiorValor.textContent = maiorValor

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (maiorValor-menorValor+1)+menorValor);
}

console.log(numeroAleatorio)
