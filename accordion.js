document.querySelectorAll(".accordion-header").forEach(header => {

header.addEventListener("click", () => {

const item = header.parentElement
const content = item.querySelector(":scope > .accordion-content")
const chevron = header.querySelector(".chevron")

if(!content || !chevron) return

const parent = item.parentElement

function adjustAncestors(delta){

let ancestorContent = item.parentElement.closest(".accordion-content")

while(ancestorContent){

if(ancestorContent.style.maxHeight){
const current = parseInt(ancestorContent.style.maxHeight, 10) || ancestorContent.scrollHeight
ancestorContent.style.maxHeight = Math.max(0, current + delta) + "px"
}

ancestorContent = ancestorContent.parentElement
  ? ancestorContent.parentElement.closest(".accordion-content")
  : null

}

}

parent.querySelectorAll(":scope > .accordion-item").forEach(sibling => {

if(sibling === item) return

const siblingContent = sibling.querySelector(":scope > .accordion-content")
const siblingChevron = sibling.querySelector(":scope > .accordion-header .chevron")

if(siblingContent && siblingContent.style.maxHeight){
adjustAncestors(-siblingContent.scrollHeight)
siblingContent.style.maxHeight = null
}

if(siblingChevron){
siblingChevron.style.transform = "rotate(0deg)"
}

})

if(content.style.maxHeight){
adjustAncestors(-content.scrollHeight)
content.style.maxHeight = null
chevron.style.transform = "rotate(0deg)"
}
else{
const openHeight = content.scrollHeight
content.style.maxHeight = openHeight + "px"
chevron.style.transform = "rotate(90deg)"
adjustAncestors(openHeight)
}

})

})

document.querySelectorAll(".accordion-item[data-open-default]").forEach(item => {

const content = item.querySelector(":scope > .accordion-content")
const chevron = item.querySelector(":scope > .accordion-header .chevron")

if(!content || !chevron) return

content.style.maxHeight = content.scrollHeight + "px"
chevron.style.transform = "rotate(90deg)"

})
