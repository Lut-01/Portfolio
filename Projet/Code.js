// ----------------- NAVIGATION -----------------
const navLinks = document.querySelectorAll('nav a');

function hideAllSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.style.display = 'none');
}

function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) section.style.display = 'block';
}

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    hideAllSections();
    showSection(targetId);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  hideAllSections();
  showSection('profil');
});


// ----------------- MODAL IMAGE : SCRATCH -----------------
let imgScratch = document.getElementById("imgScratch");
let modalScratch = document.getElementById("modalScratch");
let modalImgScratch = document.getElementById("modalImgScratch");
let closeScratch = document.querySelector(".closeScratch");

imgScratch.onclick = function(){
  modalScratch.style.display = "block";
  modalImgScratch.src = this.src;
}

closeScratch.onclick = function() {
  modalScratch.style.display = "none";
}

modalScratch.onclick = function(e) {
  if(e.target === modalScratch) modalScratch.style.display = "none";
}


// ----------------- MODAL IMAGE : BREAKOUT -----------------
let imgBreakout = document.getElementById("imgBreakout");
let modalBreakout = document.getElementById("modalBreakout");
let modalImgBreakout = document.getElementById("modalImgBreakout");
let closeBreakout = document.querySelector(".closeBreakout");

imgBreakout.onclick = function(){
  modalBreakout.style.display = "block";
  modalImgBreakout.src = this.src;
}

closeBreakout.onclick = function() {
  modalBreakout.style.display = "none";
}

modalBreakout.onclick = function(e) {
  if(e.target === modalBreakout) modalBreakout.style.display = "none";
}

// ----------------- MODAL IMAGE : Space_shooter -----------------
let Space_shooter = document.getElementById("imgSpace_shooter");
let modalSpace_shooter = document.getElementById("modalSpace_shooter");
let modalImgSpace_shooter = document.getElementById("modalImgSpace_shooter");
let closeSpace_shooter = document.querySelector(".closeSpace_shooter");

imgSpace_shooter.onclick = function(){
  modalSpace_shooter.style.display = "block";
  modalImgSpace_shooter.src = this.src;
}

closeSpace_shooter.onclick = function() {
  modalSpace_shooter.style.display = "none";
}

modalSpace_shooter.onclick = function(e) {
  if(e.target === modalSpace_shooter) modalSpace_shooter.style.display = "none";
}
