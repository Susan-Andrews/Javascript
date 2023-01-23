let count = 0                                             // initialize the count by 0
let saveEl = document.getElementById("save-el")          // pass in arguments is in quotes
let countEl = document.getElementById("count-el")       // id of h2....camelCase variable

function increment() {
    count += 1                         // increment the count by 1
    countEl.textContent = count       // increment on click
}

function save() {
    let countStr = count + " - "      // adding a string to the count
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")


