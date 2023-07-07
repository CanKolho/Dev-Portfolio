const switchInput = document.getElementById('toggle__switch');

const body = document.body;
const home = document.getElementById('home');
const homeBtn = document.getElementById('btn');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const skillPercentages = Array.from(document.getElementsByClassName('percentage'));
const projects = document.getElementById('projects');
const projectHeader = document.getElementById('project-header');

function lightmode() {

  body.style.backgroundColor = 'var(--lightmode-bg1)';

  home.style.backgroundColor = 'var(--lightmode-bg2)';
  home.style.color = 'var(--text-black)';
  homeBtn.style.color = 'var(--text-black)';

  about.style.backgroundColor = 'var(--lightmode-bg1)';
  about.style.color = 'var(--text-black)';

  skills.style.backgroundColor = 'var(--lightmode-bg2)';
  skills.style.color = 'var(--text-black)';
  skillPercentages.forEach((percentage) => {
    percentage.style.color = 'var(--text-black)';
  });

  projects.style.backgroundColor = 'var(--lightmode-bg1)';
  projectHeader.style.color = 'var(--text-black)';
}

function darkmode() {

  body.style.backgroundColor = 'var(--darkmode-bg2)';

  home.style.backgroundColor = 'var(--darkmode-bg1)';
  home.style.color = 'var(--text-white)';
  homeBtn.style.color = 'var(--text-white)';

  about.style.backgroundColor = 'var(--darkmode-bg2)';
  about.style.color = 'var(--text-white)';

  skills.style.backgroundColor = 'var(--darkmode-bg1)';
  skills.style.color =  'var(--text-white)';
  skillPercentages.forEach((percentage) => {
    percentage.style.color = 'var(--text-white)';
  });

  projects.style.backgroundColor = 'var(--darkmode-bg2)';
  projectHeader.style.color = 'var(--text-white)';
};

//darkmode is 'default' when entering page. 
function check() {
  document.getElementById("toggle__switch").checked = true;
  darkmode();
}

switchInput.addEventListener('click', function () {
  (switchInput.checked) ? darkmode() :lightmode();
});

check();
