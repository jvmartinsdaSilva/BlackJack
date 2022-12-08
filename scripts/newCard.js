const AllCards = ['2', '3', '4', '5', '6', '7','8', '9', '10', 'J', 'Q', 'K', 'A']

const CardsTypes = [
    'Diamonds',
    'Spades',
    'Hearts',
    'Clubs'
]

const newCard = (player) => {
    const randowCard = Math.floor(Math.random() * AllCards.length)
    const randomType = Math.floor(Math.random() * CardsTypes.length)

    const card = AllCards[randowCard]
    const cardType = CardsTypes[randomType]

    player.push({
        card: card,
        Type: cardType
    })

}


export default newCard