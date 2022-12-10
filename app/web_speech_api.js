window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const inputArea = document.getElementById('chute')
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

//const playerInputElement = document.querySelector('.box')


function onSpeak(e) {
    const playerInput = parseInt(e.results[0][0].transcript)
    showGuess(playerInput)
}

function showGuess(playerInput){
    playerInputElement = document.createElement('span')
    playerInputElement.classList.add('box')

    validateUserInput(playerInput,playerInputElement)

    const playerInputDiv = document.createElement('div')
    playerInputDiv.textContent="Você disse:"

    inputArea.appendChild(playerInputDiv)
    inputArea.appendChild(playerInputElement)
}




