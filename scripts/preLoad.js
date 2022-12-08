import newCard from "./newCard.js"
import {cardsScreenPlayer, cardsScreenCrupier} from "./cardsScreen.js"


const preLoad = (crupieCards, playerCards) => {
    newCard(crupieCards)
    newCard(crupieCards)
    newCard(playerCards)
    newCard(playerCards)


    const crupier = document.getElementById('crupieCards')
    crupier.innerHTML = ''
    const card = crupieCards[0]


    let cardImg = document.createElement('img')
    cardImg.src = `../cards/card${card.Type}${card.card}.png`
    crupier.appendChild(cardImg)

    let cardBackImg = document.createElement('img')
    cardBackImg.src = `../cards/cardBackRed4.png`
    crupier.appendChild(cardBackImg)


    cardsScreenPlayer(playerCards)
}

export default preLoad