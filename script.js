const passwordBox = document.getElementById("password");
const generatePasword = document.getElementById("generatePassword");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

generatePasword.addEventListener("click", () => {
  createPassword();
});

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
