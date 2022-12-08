export const cardsScreenPlayer = ( playerCards) => {
    const player = document.getElementById('playerCards')
    player.innerHTML = ''


    playerCards.map((card) => {
        let cardImg = document.createElement('img')
        cardImg.src += `../cards/card${card.Type}${card.card}.png`
        player.appendChild(cardImg)
    })    

}

export const cardsScreenCrupier = (crupieCards) => {
    const crupier = document.getElementById('crupieCards')
    crupier.innerHTML = ''
     
    crupieCards.map((card) => {
        let cardImg = document.createElement('img')
        cardImg.src += `../cards/card${card.Type}${card.card}.png`
        crupier.appendChild(cardImg)
    })

}