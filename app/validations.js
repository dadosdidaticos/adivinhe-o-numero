function validateUserInput(playerInput,playerInputElement) {
    if (!isNumber(playerInput)){
        playerInputElement.textContent = "A entrada não é um número"
        return inputArea.appendChild(playerInputElement)
    }
    if (!isInRange(playerInput)){
        playerInputElement.textContent = `O Número deve estar entre ${menorValor} e ${menorValor}`
        return inputArea.appendChild(playerInputElement)
    }
    console.log(playerInput)
    console.log((playerInput > menorValor)||playerInput < maiorValor)
    playerInputElement.textContent = playerInput

    
}

function isInRange(playerInput) {
    return playerInput >= menorValor && playerInput <= maiorValor
}

function isNumber(playerInput) {
    return !Number.isNaN(playerInput)
}
