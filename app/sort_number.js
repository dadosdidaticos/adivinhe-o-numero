const queryDifficulty = window.location.search
const difficultyParam = new URLSearchParams(queryDifficulty);
const selectedDifficulty = difficultyParam.get('dificuldade')
dificuldades = {
    1:{menorValor:0,maiorValor:1000},
    2:{menorValor:0,maiorValor:10000},
    3:{menorValor:0,maiorValor:100000},
    4:{menorValor:0,maiorValor:1000000}
}

const menorValor = dificuldades[selectedDifficulty].menorValor
const maiorValor = dificuldades[selectedDifficulty].maiorValor
const numeroAleatorio = gerarNumeroAleatorio()

const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

elementoMenorValor.textContent = menorValor
elementoMaiorValor.textContent = maiorValor

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (maiorValor-menorValor+1)+menorValor);
}
