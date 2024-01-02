
// var my = document.getElementById("greenButton");
// تعيين الألوان الافتراضية
var storedColor = localStorage.getItem("color");
if (storedColor) {
  document.documentElement.style.setProperty("--hue", storedColor);
}

// حفظ الألوان في localStorage عند الضغط على الأزرار
// var hue = localStorage.getItem("green");
var greenButton = document.getElementById("greenButton");
greenButton.style.setProperty("background-color", storedColor);

greenButton.addEventListener("click", function() {
  document.documentElement.style.setProperty("--hue", "120");
  localStorage.setItem("color", "120");
  
});
  // greenButton.style.background = localStorage.setItem("color", "40");
  // greenButton.style.setProperty("background-color", storedColor);
  


var blueButton = document.getElementById("blueButton");
blueButton.addEventListener("click", function() {
  document.documentElement.style.setProperty("--hue", "40");
  localStorage.setItem("color", "40");
});

var redButton = document.getElementById("redButton");
redButton.addEventListener("click", function() {
  document.documentElement.style.setProperty("--hue", "72");
  localStorage.setItem("color", "72");
});

var yellowButton = document.getElementById("yellowButton");
yellowButton.addEventListener("click", function() {
  document.documentElement.style.setProperty("--hue", "55");
  localStorage.setItem("color", "55");
});

var defaultButton = document.getElementById("defaultButton");
defaultButton.addEventListener("click", function() {
  document.documentElement.style.setProperty("--hue", "162");
  localStorage.setItem("color", "162");
});

var orangeButton = document.getElementById("orangeButton");
orangeButton.addEventListener("click", function() {
  document.documentElement.style.setProperty("--hue", "14");
  localStorage.setItem("color", "14");
});

var pinkButton = document.getElementById("pinkButton");
pinkButton.addEventListener("click", function() {
  document.documentElement.style.setProperty("--hue", "340");
  localStorage.setItem("color", "340");
});


var purpleButton = document.getElementById("purpleButton");
purpleButton.addEventListener("click", function() {
  document.documentElement.style.setProperty("--hue", "200");
  localStorage.setItem("color", "200");
});



var zeroButton = document.getElementById("zeroButton");
zeroButton.addEventListener("click", function() {
  document.documentElement.style.setProperty("--hue", "293");
  localStorage.setItem("color", "293");
});




var allBtns = document.getElementById("all-btns");
if (screen.width >= 991) {
  


 function showColors() {
  if (document.querySelector(".semi-btns").style.left == "-150px" ) {
  // alert("Clicked");
  document.querySelector(".semi-btns").style.left = "0px";
  document.querySelector(".all-btns").style.left = "150px";

  }else{
  document.querySelector(".semi-btns").style.left = "-150px";
  document.querySelector(".all-btns").style.left = "0px";

  }
 }

}
// Start for Phones 
if (screen.width <= 991) {
  


  function showColors() {
   if (document.querySelector(".semi-btns").style.left == "-150px" ) {
   // alert("Clicked");
   document.querySelector(".semi-btns").style.left = "0px";
   document.querySelector(".all-btns").style.left = "150px";
 
   }else{
   document.querySelector(".semi-btns").style.left = "-150px";
   document.querySelector(".all-btns").style.left = "0px";
 
   }
  }
 
 }
// End for Phones 
