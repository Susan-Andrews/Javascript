//when the user clicks the purchase button , render out "Something went wrong,please try again" in paragraph that has id ="error"
let errorParagraph=document.getElementById("error")
console.log(errorParagraph)

function purchase(){
    console.log("button clicked")
    errorParagraph.textContent="Something went wrong,please try again"
}