const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");

const handleName = (event) => {
  fullName.classList.toggle("has-value", event.target.value);
};

const handleEmail = (event) => {
  email.classList.toggle("has-value", event.target.value);
};

const handleMsg = (event) => {
  msg.classList.toggle("has-value", event.target.value);
};
