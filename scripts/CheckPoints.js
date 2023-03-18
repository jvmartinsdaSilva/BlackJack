const checkPoints = (AllCards, player) => {   
    let points = checkPoinstInTable(AllCards, true)

    if(points > 21) points = checkPoinstInTable(AllCards, false)
 
    player.innerHTML = points
}

const checkPoinstInTable = (AllCards, aceOn) => {
    let points = 0

    const poinstTable = {
        '2': 2, "3": 3, "4": 4, "5": 5, "6": 6,
        "7": 7, "8": 8, "9": 9, "10": 10, "J": 10,
        "Q": 10, "K": 10,
        "A": aceOn ? 11 : 1
    }

    AllCards.map((Card) => {
        let cardValue = Card.card
        points += poinstTable[cardValue]
    })

    return points
}

export default checkPoints