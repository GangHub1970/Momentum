const loginForm = document.querySelector(".login-form");
const logoutForm = document.querySelector(".logout_form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector(".todo_list");
const todoList = document.querySelector(".ToDoList");
const main = document.querySelector(".main");
const Quotes = document.querySelector("#quote");
const Quote = document.querySelector("#quote span:first-child");
const Author = document.querySelector("#quote span:last-child");
const weather = document.querySelector(".weather");
const Clock = document.querySelector("#clock");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  settings();
}

function settings() {
  paintLogout();
  paintWeather();
  todoList.classList.remove(HIDDEN_CLASSNAME);
  mainWidth();
  quoteStyle();
  todo.value = "";
  todo.focus();
}

function mainWidth() {
  main.style.width = "50%";
}

function quoteStyle() {
  Quotes.style.position = "relative";
  Quotes.style.margin = "30% 12px 0";
  Quote.style.fontSize = "22px";
  Quote.style.marginBottom = "16px";
  Quote.style.color = "white";
  Author.style.fontSize = "16px";
  Author.style.color = "rgb(194, 194, 194)";
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

function paintWeather() {
  weather.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  settings();
}

logoutForm.addEventListener("submit", onLogoutSubmit);
