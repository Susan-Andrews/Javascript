


let myleads=[]
// myleads=JSON.parse(myleads)  // turn the myleads string into an array
// myleads.push("https://github.com/Susan-Andrews?tab=repositories") //Push value into an array
// myleads=JSON.stringify(myleads) // turn the array into string again
// console.log(myleads)
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

// localStorage.setItem("myLead" ,"https://github.com/Susan-Andrews123" ) //setting item to local storage
// console.log(localStorage.getItem("myLead" )) //retrieving the info
// localStorage.clear() //clearing the infos
let leadsfromlocalstorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsfromlocalstorage)
if(leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    renderleads()
}


inputbtn.addEventListener("click" , function(){
   myleads.push(inputEl.value)
   inputEl.value=""
   localStorage.setItem("myleads",JSON.stringify(myleads))
   renderleads() //when called the whole function happens
   console.log(myleads)
})
function renderleads(){
    let listItems=""
    for (let i=0;i<myleads.length;i++){
        // listItems += "<li> <a target='_blank' href=" + myleads[i] +">"+ myleads[i] + "</a></li>"
        //template strings implementation
        listItems += `
        <li>
         <a target='_blank' href='${myleads[i]}' > 
         ${myleads[i]}
         </a>
        </li>
        `
        
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


//here everything is in strings so inorder to store array in localstorage,we use json.parse() or json.stringify to convert to string 