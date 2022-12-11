window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
let inputArea = document.getElementById('chute')
let inputContainer = document.getElementById('container')
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
const randomNumber = gerarNumeroAleatorio()
console.log(randomNumber)

recognition.addEventListener('result', onSpeak)
recognition.addEventListener('end',recognition.start)
recognition.start()

function onSpeak(e) {
    clearInput()
    let playerInput = e.results[0][0].transcript
    const playerTipElement = showGuessAndTip(playerInput)
    if(isValidUserInput(playerInput)){
        checkGuess(playerInput,playerTipElement,randomNumber)
    }
}

function showGuessAndTip(playerInput){
    const playerTipElement = document.createElement('div')

    const playerInputElement = document.createElement('span')
    playerInputElement.classList.add('box')
    playerInputElement.textContent = playerInput
    
    const playerInputDiv = document.createElement('div')
    playerInputDiv.textContent="Você disse:"
    
    checkAndGetUserTip(playerInput,playerInputElement,playerTipElement)
    
    inputArea.appendChild(playerInputDiv)
    inputArea.appendChild(playerInputElement)
    inputArea.appendChild(playerTipElement)
    return playerTipElement
}

function clearInput (){
    inputContainer.removeChild(inputArea)
    inputArea = document.createElement('div')
    inputArea.setAttribute('id','chute')
    inputArea.classList.add('mensagem')
    inputContainer.appendChild(inputArea)
}



