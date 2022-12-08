import gameMessage from "./gameMessage.js"

const checkLimit = (points, user) => {
    if(points > 21){
        gameMessage(`${user} lost, as it went from 21 points`)
    }


}

export default checkLimit