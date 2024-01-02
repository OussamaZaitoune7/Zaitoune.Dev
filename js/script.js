
// '/________________----------(--"__*
if (screen.width >= 700) {
const sr = ScrollReveal({
  origin: 'left',
  distances: '100px',
  duration: 2400,
  delay: 400,
  reset: true // Animation repeat
})
sr.reveal(`.home-data`, {origin: 'top', distance: "50px"})
sr.reveal(`.home-social`, {origin: 'bottom', distance: "50px"})
sr.reveal(`.contact-container`)
sr.reveal(`.footer-container`)
sr.reveal(`.home-imagine`, {origin: 'right'})
sr.reveal(`.about-data`, {origin: 'left', distance: "50px"})
sr.reveal(`skills-data`, {origin: 'top', distance: "50px"})
sr.reveal(`.skills-content`, {origin: 'bottom', distance: "50px"})
sr.reveal(`.about-image`, {origin: 'right', distance: "50px"})
sr.reveal(`skills`, {origin: 'right', distance: "50px"})
sr.reveal(`.services-card`, {origin: 'top', distance: "50px", interval: 100})
sr.reveal(`.projects-card`, {origin: 'bottom', distance: "50px", interval: 100})
sr.reveal(`.section-subtitle`, {origin: 'top', distance: "50px"})
sr.reveal(`.section-title`, {origin: 'top', distance: "50px"})
sr.reveal(`.skills-description`, {origin: 'bottom', distance: "50px"})
sr.reveal(`.button`, {origin: 'right', distance: "50px"})
}


window.onload = setTimeout(re, 4000);

function re(){
//alert("great");
document.querySelector(".home-blob").style.animationName = "t";
}

//this is a active link
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// ====================Start For Google drive [Zaitoune.js]========================
var pOne = document.getElementById("projectone");
var pTwo = document.getElementById("projecttwo");
var pThree = document.getElementById("projectthree");
var pFour = document.getElementById("projectfour");
var pFive = document.getElementById("projectfive");
var pSix = document.getElementById("projectsix");
var trueProject =  "✅ Responsive";
var falseProject = "❎ Responsive";
/*  */
//pOne.getAttribute("data-text").style.color = "red";
var notComplete = "❌not complete"; 
// ✅❎❌✔️
pOne.setAttribute("data-text", falseProject);
pTwo.setAttribute("data-text", trueProject);
pThree.setAttribute("data-text", trueProject);
pFour.setAttribute("data-text", notComplete);
pFive.setAttribute("data-text", notComplete);
pSix.setAttribute("data-text", notComplete);
// ==================== End For Google drive [Zaitoune.js]========================
// alert(pOne.getAttribute("data-text"));
var v = "✅";
var f = "❎";
// ==================EmailJS====================

const contactForm = document.getElementById("contact-form"),
      contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_qkc40rt', 'template_wdx3hlu', '#contact-form', 'ubMiARYquTHEh2Wt_')
    .then(() => {
        // Show sent Message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = "";
        }, 5000)

        // Clear input fields
        contactForm.reset()
    },() => {
        // Show error Message
        contactMessage.textContent = "Message not sent (service error) ❌";
    })
}

contactForm.addEventListener("submit",  sendEmail);


// ================ScrollUP============

var span = document.querySelector(".up");
window.onscroll = function () {
  // if scrollY more or equal than 1000 show the up button
  this.scrollY >= 1000 ? span.classList.add("showup") : span.classList.remove("showup");
};
// span.style.display = "none";
span.onclick = function () {
  // if clicked the up button : Scroll top 0
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
};

// ====================Scroll Progress=============
let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// console.log(height);

window.addEventListener("scroll", () => {
let scrollTop = document.documentElement.scrollTop;
scroller.style.width = `${(scrollTop / height) * 100}%`;
// console.log(height);
});


// 00000000000000000000000000

// Meta Tags
var themeColor = document.querySelector('meta[name="theme-color"]');
    var mainColor = getComputedStyle(document.documentElement).getPropertyValue('--first-color');
    themeColor.setAttribute('content', mainColor);
 

  // 0000000000000000000000000000000000
// تحديد العنصر الذي يجب مراقبته
const targetNode = document.querySelectorAll(".up");

// خيارات MutationObserver
const config = { childList: true };

// دالة التنبيه عند إضافة عنصر جديد
const alertOnNewNode = () => {
  alert('تم إضافة عنصر جديد!');
};

// إنشاء MutationObserver
const observer = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // عند إضافة عنصر جديد
      if (mutation.addedNodes.length > 0) {
        alertOnNewNode();
      }
    }
  }
});

// بدء مراقبة العنصر المحدد
observer.observe(targetNode, config);








