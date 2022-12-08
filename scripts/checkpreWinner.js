import gameMessage from "./gameMessage.js"
import {cardsScreenCrupier } from "./cardsScreen.js"

const checkpreWinner = (crupiePoints, playerPoints, crupieCards) => {
    
    if(playerPoints == 21){
        gameMessage('You winner')
        cardsScreenCrupier(crupieCards)
    } else if(crupiePoints == 21){
        gameMessage('CrupieWinner')
        cardsScreenCrupier(crupieCards)
    } else if(crupiePoints == 21 && playerPoints == 21){
    
        gameMessage('Empate')
        cardsScreenCrupier(crupieCards)
    }
}

export default checkpreWinner