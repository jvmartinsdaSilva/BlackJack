import newCard from "./newCard.js"
import { cardsScreenPlayer, cardsScreenCrupier } from "./cardsScreen.js"
import preLoad from "./preLoad.js"
import checkPoints from "./CheckPoints.js"
import checkLimit from "./checkLimit.js"
import checkpreWinner from "./checkpreWinner.js"
import checkWinner from "./checkWinner.js"

const modal = document.getElementById('modal')
const btnBuy = document.getElementById('btnBuy')
const btnStop = document.getElementById('btnStop')
const crupiePoints = document.getElementById('crupiePointsNumber')
const playerPoints = document.getElementById('playerPointsNumber')

let crupieCards = []
let playerCards = []
let playerTurn = true


const game = () => {
    preLoad(crupieCards, playerCards)
    checkPoints(playerCards, playerPoints)
    checkPoints(crupieCards, crupiePoints)
    checkpreWinner(crupiePoints.textContent, playerPoints.textContent, crupieCards)
    crupiePoints.innerHTML = '??'

}

btnBuy.addEventListener('click', () => {
    if (playerTurn) {
        playerGame()
    }
})


btnStop.addEventListener('click', () => {
    playerTurn = false
    crupieGame()
})


const playerGame = () => {

    newCard(playerCards)
    cardsScreenPlayer(playerCards)
    checkPoints(playerCards, playerPoints)
    checkLimit(playerPoints.textContent, 'Your')
    
}


const crupieGame = () => {
    cardsScreenCrupier(crupieCards)
    checkPoints(crupieCards, crupiePoints)
    let crupierTime

    crupierTime = setInterval(() => {
        if (crupiePoints.textContent < 17) {

            console.log('oi17')
            newCard(crupieCards)
            cardsScreenCrupier(crupieCards)
            checkPoints(crupieCards, crupiePoints)
            
            checkLimit(crupiePoints.textContent, 'Crupier')

        } else if(crupiePoints.textContent >= 17 && crupiePoints.textContent < 22){
            
            clearInterval(crupierTime)
            checkWinner(crupiePoints.textContent, playerPoints.textContent)
            cardsScreenCrupier(crupieCards)

        } else {
          clearInterval(crupierTime)  
        }
    }, 1000)

}

export const resetGame = () => {
    playerTurn = true
    modal.style.display = 'none'
    crupieCards = []
    playerCards = []

    game()
}

game()