const form = document.querySelector(".container__article__formInfo");
const emailInput = document.querySelector(
  ".container__article__formInfo__email"
);
const errorLogo = document.querySelector(
  ".container__article__formInfo__divError"
);
const errorLabel = document.querySelector(".container__article__label");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (emailInput.value === "" || validateEmail(emailInput.value) === true) {
    showError();
  } else {
    hideError();
  }
});

function validateEmail(inputText) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailFormat)) {
    return false;
  } else {
    return true;
  }
}

function showError() {
  errorLogo.classList.remove("hidden");
  errorLabel.classList.remove("hidden");
  emailInput.classList.add("borderError");
}

function hideError() {
  errorLogo.classList.add("hidden");
  errorLabel.classList.add("hidden");
  emailInput.classList.remove("borderError");
}
