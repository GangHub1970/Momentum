const loginForm = document.querySelector(".login-form");
const logoutForm = document.querySelector(".logout_form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector(".todo_list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintLogout();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  todo.value = "";
  todo.focus();
}

function onLogoutSubmit() {
  localStorage.clear();
  logoutForm.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `${username}'s To Do List`;
}

function paintLogout() {
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  paintLogout();
}

logoutForm.addEventListener("submit", onLogoutSubmit);
