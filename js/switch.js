const switchInput = document.getElementById('toggle__switch');
const body = document.body;

switchInput.addEventListener('click', function () {
  (switchInput.checked) ? body.style.backgroundColor = '#0D1117' :body.style.backgroundColor = '#FFFFFF'; 
  });