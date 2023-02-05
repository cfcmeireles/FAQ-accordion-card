(function (){
  "use strict";

const accordions = document.querySelectorAll(".accordion");
  
accordions.forEach(accordion => {
 accordion.addEventListener("click", (event) => {
  accordions.forEach(accordion => {
    if (accordion !== event.currentTarget) {
      accordion.classList.remove("active");
    }
  });
    accordion.classList.toggle("active");
 })
})
  }
)();
