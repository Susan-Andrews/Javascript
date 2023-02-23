// IDEA - Its  game make sum of cards  to 21 but not greater than 21(because its the condition of losing money)


let player ={
    name:"Per",
    coin:145
}
let cards=[]  
// to push new value => cards.push(value) and to delete its pop
// if we declare numbers in it then random numbers get asigned even before clicking start.

let sum=0
let hasblackjack=false
let isalive=false
let message=""
let messageEl = document.getElementById("message-el")

let sumEl=document.getElementById("sum-el")
// let sumEl=document.querySelector("#sum-el")
// let sumEl=document.querySelector(".sum-el") is its a class in html
// let sumEl=document.querySelector("body") adding the tag

let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $" +player.coin

function getRandomCard(){ //gewnerating random numbers uswing math module
    let randomnumber=Math.floor(Math.random()*13) // generates value ranging from 0 to 12.99999999999 and is converted to 13 using floor function.. (for 13 cards)
    if (randomnumber>10){
        return 10
    }else if (randomnumber===11){
    return 11
    }else{
        return randomnumber
    }
}


function startgame(){
     isalive=true 
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    rendergame()
}


function rendergame(){
    cardsEl.textContent="Cards: " 
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent +=cards[i] + " "
    }
    sumEl.textContent="sum:" +sum

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


function newCard(){    // it adds up the card value to existing one and hence increases the sum. and it valls startgame function and hence the dialoges are changed accordingly.
    if (isalive===true && hasblackjack===false){
                
        let card= getRandomCard() //sets the value onto variable from return val of fn
        sum += card
        cards.push(card)
        rendergame()
    }
}





//////////////////////////NOTES/////////////////////////

//for loop 
// for(start ;  finish ; count/stepsize){

// }

// for(let count=10;count<21;count+1){

// }


// if can be implemented by using variables and its bool values and logical operators like && || 
// Objects-store data in depth
//   let player ={
//     name:"Per",
//     coin:145,
//        sayHello:function(){
//         console.log(:"hai")
//        }
//  }
// player.sayHello()  gives hai
// shift() removes first item in an array. unshift() removes second element in an array


let hands=["rock","paper","scissor"]

function gethand(){
    let randomindex=Math.floor(Math.random()*3)
    return hands[randomindex]

}
console.log(gethand())