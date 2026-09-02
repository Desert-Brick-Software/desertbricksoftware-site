document.querySelectorAll(".accordion-header").forEach(header => {

header.addEventListener("click", () => {

const item = header.parentElement
const content = item.querySelector(":scope > .accordion-content")
const chevron = header.querySelector(".chevron")

if(!content || !chevron) return

const parent = item.parentElement

parent.querySelectorAll(":scope > .accordion-item").forEach(sibling => {

if(sibling === item) return

const siblingContent = sibling.querySelector(":scope > .accordion-content")
const siblingChevron = sibling.querySelector(":scope > .accordion-header .chevron")

if(siblingContent){
siblingContent.style.maxHeight = null
}

if(siblingChevron){
siblingChevron.style.transform = "rotate(0deg)"
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
