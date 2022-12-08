const checkPoints = (AllCards, player) => {   
 
    let Points = 0
    let aceOn = false

    const poinstTable = {
        '2': 2, "3": 3, "4": 4, "5": 5, "6": 6,
        "7": 7, "8": 8, "9": 9, "10": 10, "J": 10,
        "Q": 10, "K": 10,
        "A": 11
    }

    AllCards.map((Card) => {
        let CardValue = Card.card       
        if(CardValue === 'A'){
            aceOn = true
        }
        Points += poinstTable[CardValue]
    })


    if(Points > 21 && aceOn === true){
        Points = 0

        const poinstTable = {
            '2': 2, "3": 3, "4": 4, "5": 5, "6": 6,
            "7": 7, "8": 8, "9": 9, "10": 10, "J": 10,
            "Q": 10, "K": 10,
            "A": 1
        }
        
        AllCards.map((Card) => {
            let CardValue = Card.card
            Points += poinstTable[CardValue]
        })
        
    }
 
    player.innerHTML = Points
}

export default checkPoints