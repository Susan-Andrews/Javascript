


let myleads=[] 
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

localStorage.setItem("myLead" ,"https://github.com/Susan-Andrews" ) //setting item to local storage
console.log(localStorage.getItem("myLead" )) //retrieving the info
localStorage.clear() //clearing the infos

inputbtn.addEventListener("click" , function(){
   myleads.push(inputEl.value)
   inputEl.value=""
   renderleads() //when called the whole function happens
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


