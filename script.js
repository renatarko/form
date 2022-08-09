const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("senha1");
const confirmPassword = document.getElementById("senha2");
const button = document.getElementById("btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário obrigatório");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email obrigatório");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Digite um email válido!");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Senha obrigatória.");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "A senha deve ter no mínimo 6 caracteres");
  } else {
    setSuccessFor(password);
  }

  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirmação obrigatória.");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(
      confirmPassword,
      "Confirmação de senha inválida, tente novamente."
    );
  } else if (passwordValue.length < 6) {
    setErrorFor(confirmPassword, "A senha deve ter no mínimo 6 caracteres");
  } else {
    setSuccessFor(confirmPassword);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // pegando o pai do input
  const small = formControl.querySelector("small"); // pegando small que está dentro de formControl

  // menssagem de erro
  small.innerText = message;

  // add classe de sucesso
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // pegando o pai do input

  // add classe de success
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
