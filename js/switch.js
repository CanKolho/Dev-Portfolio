const switchInput = document.getElementById('toggle__switch');

const body = document.body;
const home = document.getElementById('home');
const homeBtn = document.getElementById('btn');

const about = document.getElementById('about');

const skills = document.getElementById('skills');
const skillPercentages = Array.from(document.getElementsByClassName('percentage'));

const projects = document.getElementById('projects');
const projectHeader = document.getElementById('project-header');

const contact = document.getElementById('contact');
const inputs = Array.from(document.getElementsByTagName('input'));
const labels = Array.from(document.getElementsByClassName('input__label'));
const contactBtn = document.getElementById('sendBtn');

const thankYou = document.getElementById('thank-you-page');
const thankYouLink = document.getElementById('return-link');


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

  contact.style.backgroundColor = 'var(--lightmode-bg2)';
  contact.style.color = 'var(--text-black)';
  inputs.forEach((input) => {
    input.style.color = 'var(--text-black)';
  });
  
  labels.forEach((label) => {
    label.style.color = 'var(--text-black)';
    label.style.backgroundColor = 'var(--lightmode-bg2)';
  });
  contactBtn.style.color = 'var(--text-black)';

  thankYou.style.backgroundColor = 'var(--lightmode-bg1)';
  thankYou.style.color = 'var(--text-black)';
  thankYouLink.style.color = 'var(--text-black)';
}

function darkmode() {

  body.style.backgroundColor = 'var(--darkmode-bg1)';

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

  contact.style.backgroundColor = 'var(--darkmode-bg1)';
  contact.style.color =  'var(--text-white)';
  inputs.forEach((input) => {
    input.style.color = 'var(--text-white)';
  });
  
  labels.forEach((label) => {
    label.style.color = 'var(--text-white)';
    label.style.backgroundColor = 'var(--darkmode-bg1)';
  });
  contactBtn.style.color = 'var(--text-white)';

  thankYou.style.backgroundColor = 'var(--darkmode-bg1)';
  thankYou.style.color = 'var(--text-white)';
  thankYouLink.style.color = 'var(--text-white)';
};

//darkmode is 'default' when entering page. 
function check() {
  document.getElementById("toggle__switch").checked = true;
  darkmode();

  localStorage.setItem('modePreference', switchInput.checked ? 'dark' : 'light');
}

switchInput.addEventListener('click', function () {
  (switchInput.checked) ? darkmode() :lightmode();

  localStorage.setItem('modePreference', switchInput.checked ? 'dark' : 'light');
});

check();

//does not work yet
document.addEventListener('DOMContentLoaded', function() {
  const modePreference = localStorage.getItem('modePreference');
  if (modePreference === 'dark') {
    darkmode();
  } else {
    lightmode();
  }
});
