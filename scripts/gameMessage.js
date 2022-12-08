import { resetGame } from "./index.js"

const gameMessage = (message) => {
    const modal = document.getElementById('modal')
    const messageText = document.getElementById('MessageText')
    const btnReset = document.getElementById('btnReset')

    modal.style.display = 'block'
    
    messageText.textContent = message

    btnReset.addEventListener('click', () => {
        resetGame()
    })

}


export default gameMessage