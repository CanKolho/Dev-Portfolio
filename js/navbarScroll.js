let prevScrollpos = window.pageYOffset;
const header = document.getElementById("header");
let navBar = document.querySelector(".nav-bar");
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-100px";
  }

  if (prevScrollpos < currentScrollPos) {
    navBar.classList.remove("active");
  }

  prevScrollpos = currentScrollPos;

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        if (links.getAttribute('href') === '#' + id) {
          links.classList.add('active');
        }
      });
    }
  });
};
