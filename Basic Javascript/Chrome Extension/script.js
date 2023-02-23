


let myleads=[] 
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

inputbtn.addEventListener("click" , function(){
   myleads.push(inputEl.value)
   renderleads()
})
function renderleads(){
    let listItems=""
    for (let i=0;i<myleads.length;i++){
        listItems += "<li>" + myleads[i] + "</li>"
        ulEl.innerHTML=listItems
        // ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
        // or this can be done by:
        // create element 
        // set text content 
        // append to ul 

        // const li=document.getElementById("li")
        // li.textContent=myleads[i]
        // ulEl.append(li)
    }
}