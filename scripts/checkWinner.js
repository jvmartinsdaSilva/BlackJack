import gameMessage from "./gameMessage.js"

const checkWinner = (crupiePoints, playerPoints) => {
    if(crupiePoints > playerPoints){
        gameMessage('Crupie scored more points')
    } else if(playerPoints > crupiePoints){
        gameMessage('Your scored more points')
    } else {
        gameMessage('Tied')
    }

}

export default checkWinner