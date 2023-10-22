window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  
  loader.classList.add("loader-hidden");

  loader.addEventListener("transistionend", () => {
    document.body.removeChild("loader");
  });
});


/* const parallax = document.getElementById("parallax");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
})


const parallaxtwo = document.getElementById("parallaxtwo");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallaxtwo.style.backgroundPositionY = offset * 0.4 + "px";
}) */


var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("activelink");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("activetab");
  }
  event.currentTarget.classList.add("activelink");
  document.getElementById(tabname).classList.add("activetab");
}

// Contact
const contactForm = document.querySelector('.contact-form');
// const contactBtn = document.querySelector('.contact-btn');
const contactSubject = document.querySelector('.contact-subject');
const contactMessage = document.querySelector('.contact-message');

contactForm.addEventListener('submit', e => {
	e.preventDefault();
	window.open(`mailto:rennerlinkpdx@gmail.com?subject=${encodeURIComponent(contactSubject.value)}&body=${encodeURIComponent(contactMessage.value)}`, "_blank").focus();
});