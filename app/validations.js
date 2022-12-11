function checkAndGetUserTip(playerInput,playerInputElement,playerTipElement) {
    playerInput = parseInt(playerInput)
    if (!isNumber(playerInput)){
        return playerTipElement.textContent = "Valor inválido: Não é um número"
    }
    if (!isInRange(playerInput)){
        return playerTipElement.textContent = `Valor inválido: O Número deve estar entre ${menorValor} e ${maiorValor}`
    }
    return true 
}

function checkGuess(playerInput,playerTipElement,randomNumber){
    if(playerInput>randomNumber) {
        return playerTipElement.innerHTML = 'O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>'
    }
    if(playerInput<randomNumber) {
        return playerTipElement.innerHTML = '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>'
    }
    document.body.innerHTML = `
        <h2>Parabéns! Você acertou!</h2>
        <h3>O número secreto era ${randomNumber}.
    `
    const restartButton = document.createElement('button')
    restartButton.classList.add('buttons','box')
    restartButton.setAttribute('id','restart-button')
    restartButton.innerText = "Jogar novamente!"
    restartButton.addEventListener('click',()=>document.location.reload())

    const selectDifficultyButton = document.createElement('button')
    selectDifficultyButton.classList.add('buttons','box')
    selectDifficultyButton.setAttribute('id','difficulty-button')
    selectDifficultyButton.innerText = "Selecionar Dificuldade"
    selectDifficultyButton.addEventListener('click',()=>document.location.href = "home.html")


    document.body.appendChild(restartButton)
    document.body.appendChild(selectDifficultyButton)
}

function isInRange(playerInput) {
    return playerInput >= menorValor && playerInput <= maiorValor
}

function isNumber(playerInput) {
    return !(Number.isNaN(playerInput))
}

function isValidUserInput(playerInput) {
    playerInput = parseInt(playerInput)
    if (!isNumber(playerInput)){
        return false
    }
    if (!isInRange(playerInput)){
        return false
    }
    return true 
}