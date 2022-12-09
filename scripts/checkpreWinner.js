import gameMessage from "./gameMessage.js"
import { cardsScreenCrupier } from "./cardsScreen.js"
import checkPoints from "./CheckPoints.js"

const checkpreWinner = (crupiePoints, playerPoints, crupieCards) => {

    const crupiePointsValue = crupiePoints.textContent
    const playerPointsValue = playerPoints.textContent


    if (playerPointsValue == 21) {

        gameMessage('You winner')
        cardsScreenCrupier(crupieCards)
        checkPoints(crupieCards, crupiePoints)

    } else if (crupiePointsValue == 21) {

        gameMessage('CrupieWinner')
        cardsScreenCrupier(crupieCards)
        checkPoints(crupieCards, crupiePoints)

    } else if (crupiePointsValue == 21 && playerPointsValue == 21) {

        gameMessage('Empate')
        cardsScreenCrupier(crupieCards)
        checkPoints(crupieCards, crupiePoints)
    } else {
        crupiePoints.innerHTML = '??'
    }
}

export default checkpreWinner