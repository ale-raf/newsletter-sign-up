const emailInput = document.querySelector("input[type='email']");
const submitBtn = document.querySelector("button.btn.submit");
const dismissBtn = document.querySelector("button.btn.dismiss");
const errorElement = document.querySelector("p.error");
const mainContainer = document.querySelector("div.container");
const successContainer = document.querySelector("div.container.success");
const emailAddress = document.querySelector("span.email-address");

const displaySuccess = () => {
  mainContainer.classList.add("hide");
  successContainer.classList.remove("hide");
  emailAddress.innerText = emailInput.value;
};

const checkEmailValidity = (e) => {
  e.preventDefault();
  let errorMsg = "Valid email required";
  [emailInput.validationMessage, errorElement.innerText] = [errorMsg, errorMsg];
  let isEmailValid = emailInput.validity.valid;
  if (isEmailValid) {
    errorElement.classList.add("hide");
    emailInput.classList.remove("invalid");
    displaySuccess();
  } else {
    errorElement.classList.remove("hide");
    emailInput.classList.add("invalid");
  }
  return isEmailValid;
};

const dismissSuccessMsg = () => {
  mainContainer.classList.remove("hide");
  successContainer.classList.add("hide");
  emailInput.value = "";
};

const checkInputValue = () => {
  let isEmpty = "";
  if (emailInput.value !== isEmpty) {
    errorElement.classList.add("hide");
    emailInput.classList.remove("invalid");
  }
};

submitBtn.addEventListener("click", checkEmailValidity);

dismissBtn.addEventListener("click", dismissSuccessMsg);

emailInput.addEventListener("input", checkInputValue);
