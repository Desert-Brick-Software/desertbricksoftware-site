document.addEventListener("DOMContentLoaded", function () {

const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {

header.addEventListener("click", function () {

const content = this.nextElementSibling;

document.querySelectorAll(".accordion-content").forEach(item => {

if(item !== content){
item.style.display = "none";
}

});

content.style.display =
content.style.display === "block" ? "none" : "block";

});

});

});