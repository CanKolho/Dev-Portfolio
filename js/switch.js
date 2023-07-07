const switchInput = document.getElementById('toggle__switch');

const home = document.getElementById('home');
const homeBtn = document.getElementById('btn');

const about = document.getElementById('about');

function lightmode() {
  home.style.backgroundColor = 'var(--lightmode-bg2)';
  home.style.color = 'var(--text-black)';
  homeBtn.style.color = 'var(--text-black)';

  about.style.backgroundColor = 'var(--lightmode-bg1)';
  about.style.color =  'var(--text-black)';
}

function darkmode() {
  home.style.backgroundColor = 'var(--darkmode-bg1)';
  home.style.color = 'var(--text-white)';
  homeBtn.style.color = 'var(--text-white)';

  about.style.backgroundColor = 'var(--darkmode-bg2)';
  about.style.color =  'var(--text-white)';
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
