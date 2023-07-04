var prevScrollpos = window.pageYOffset;
var header = document.getElementById("header");
var navBar = document.querySelector(".nav-bar")

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

	if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } 
	else {
  	header.style.top = "-100px";
  }

  if (prevScrollpos < currentScrollPos) {
    navBar.classList.remove("active")
  } 

  prevScrollpos = currentScrollPos;
};
