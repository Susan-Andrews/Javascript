


// let myleads=[]
// // myleads=JSON.parse(myleads)  // turn the myleads string into an array
// // myleads.push("https://github.com/Susan-Andrews?tab=repositories") //Push value into an array
// // myleads=JSON.stringify(myleads) // turn the array into string again
// // console.log(myleads)
// const inputEl=document.getElementById("input-el")
// const inputbtn=document.getElementById("input-btn")
// const ulEl=document.getElementById("ul-el")
// const deleteBtn=document.getElementById("delete-btn")
// const leadsfromlocalstorage=JSON.parse(localStorage.getItem("myLeads"))
// const tabBtn = document.getElementById("tab-btn")

// if(leadsfromlocalstorage){
//     myleads=leadsfromlocalstorage
//     render(myleads)
// }

// tabBtn.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myleads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myleads) )
//         render(myleads)
//     })
// })

// deleteBtn.addEventListener("dblclick",function(){
   
//     localStorage.clear()
//     myleads=[]
//     render(myleads)
// })
// inputbtn.addEventListener("click" , function(){
//    myleads.push(inputEl.value)
//    inputEl.value=""
//    localStorage.setItem("myleads",JSON.stringify(myleads))
//    render(myleads) //when called the whole function happens
//    console.log(myleads)
// })
// function render(leads){
//     let listItems=""
//     for (let i=0;i<leads.length;i++){
//         // listItems += "<li> <a target='_blank' href=" + myleads[i] +">"+ myleads[i] + "</a></li>"
//         //template strings implementation
//         listItems += `
//         <li>
//          <a target='_blank' href='${leads[i]}' > 
//          ${leads[i]}
//          </a>
//         </li>
//         `
        
//         ulEl.innerHTML=listItems
//         // ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
//         // or this can be done by:
//         // create element 
//         // set text content 
//         // append to ul 

//         // const li=document.getElementById("li")
//         // li.textContent=myleads[i]
//         // ulEl.append(li)
//     }
// }


// //here everything is in strings so inorder to store array in localstorage,we use json.parse() or json.stringify to convert to string 



let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// tabBtn.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         render(myLeads)
//     })
// })

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
console.log(leadsFromLocalStorage)