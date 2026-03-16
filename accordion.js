document.querySelectorAll(".accordion-header").forEach(header => {

header.addEventListener("click", () => {

const item = header.parentElement
const content = item.querySelector(".accordion-content")
const chevron = item.querySelector(".chevron")

document.querySelectorAll(".accordion-content").forEach(section => {

if(section !== content){
section.style.maxHeight = null
section.previousElementSibling.querySelector(".chevron").style.transform = "rotate(0deg)"
}

})

if(content.style.maxHeight){
content.style.maxHeight = null
chevron.style.transform = "rotate(0deg)"
}
else{
content.style.maxHeight = content.scrollHeight + "px"
chevron.style.transform = "rotate(90deg)"
}

})

})