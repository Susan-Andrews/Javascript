//make sum of cards as near to 21 but not greater than 21(because its the condition of losing money)


let firstcard=10
let secondcard=4
let sum=firstcard+secondcard
let hasblackjack=false
let isalive=true
let message=""
let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startgame(){
    if (sum <= 20){
        message="Do you want to draw a new card?"
    
    } else if (sum === 21) {
        message="You have got black jack"
        hasblackjack=true
    } else {
        message="You have lost the game"
        isalive=false
    }
    messageEl.textContent=message
}
