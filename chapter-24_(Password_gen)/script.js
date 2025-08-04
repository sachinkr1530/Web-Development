const inputSlider = document.querySelector("[data-lengthSlider]");
const LengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "`~!@#$%^&*()_-+={[}]|:;\"'<,>.?/"; // Define symbols to be used in password generation

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//set strength cirle  color to gray

setIndicator("#ccc"); // Initial color for the strength indicator

//set passwod length
function handleSlider() {
  inputSlider.value = passwordLength;
  LengthDisplay.innerText = passwordLength;
  const min = inputSlider.min;
  const max = inputSlider.max;
  inputSlider.style.backgroundSize =
   ((passwordLength - min) * 100) / (max - min) + "% 100%";
  calcStength();
}
function setIndicator(color) {
  indicator.style.backgroundColor = color;
  // shadow
  indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function generateRandomNumber() {
  return getRndInteger(0, 9);
}

function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase() {
  return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
  const randNum = getRndInteger(0, symbols.length);
  return symbols.charAt(randNum);
}

function calcStength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSymbol = false;

  if (uppercaseCheck.checked) hasUpper = true;
  if (lowercaseCheck.checked) hasLower = true;
  if (numbersCheck.checked) hasNumber = true;
  if (symbolsCheck.checked) hasSymbol = true;

  if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNumber || hasSymbol) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "Copied";
  } catch (e) {
    copyMsg.innerText = "Failed";
  }
  // this is for copy message
  copyMsg.classList.add("active");
  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

function shufflePassword(Array) {
  //Fisher-yates shuffle algorithm

  for (let i = shufflePassword.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = Array[i];
    Array[i];
    Array[j] = temp;
  }
  let str = "";
  Array.forEach((el) => (str += el));
  return str;
}

function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) checkCount++;
  });
  // special condition
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBoxChange);
});

inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) copyContent();
});
generateBtn.addEventListener("click", () => {
  // none of the checkbox is checked
  if (checkCount == 0) return;
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  console.log("Starting the journey ");
  // let start find the new password
  // remove old password
  password = "";

  // lets put the stuff mentioned by checked

  // if(uppercaseCheck.checked) {
  //   password+=generateUpperCase();
  // }
  // if(lowercaseCheck.checked) {
  //   password+=generateLowerCase();
  // }
  // if(numbersCheck.checked) {
  //   password+=generateRandomNumber();
  // }
  // if(symbolsCheck.checked) {
  //   password+=generateSymbol();
  // }

  let funcArr = [];

  if (uppercaseCheck.checked) funcArr.push(generateUpperCase);

  if (lowercaseCheck.checked) funcArr.push(generateLowerCase);

  if (numbersCheck.checked) funcArr.push(generateRandomNumber);

  if (symbolsCheck.checked) funcArr.push(generateSymbol);

  // compulsory addition

  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i]();
  }
  console.log("compulsory addition");

  // remaining addition
  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    const randomIndex = getRndInteger(0, funcArr.length);
    password += funcArr[randomIndex]();
  }
  console.log("Remaining compulsory addition");
  // shuffle the password
  password = shufflePassword(Array.from(password));
  console.log("shuffle the password");

  // show in UI
  console.log("UI addition done");
  passwordDisplay.value = password;
  // calculate strength
  calcStength();
});
