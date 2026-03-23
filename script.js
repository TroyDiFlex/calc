const display = document.querySelector(".display");
const numbers = document.querySelector(".numbers");
const opers = document.querySelector(".opers");
const controls = document.querySelector(".controls");

const sum = (a, b) => +a + +b;

const minus = (a, b) => +a - +b;

const umnozh = (a, b) => +a * +b;

const razdelit = (a, b) => +a / +b;

let first = "";
let second = "";
let oper = "";
let result;
let displayed = "";
let currentMode = "firstMode";

const calc = () => {
  switch (oper) {
    case "+":
      return sum(first, second);
    case "-":
      return minus(first, second);
    case "*":
      return umnozh(first, second);
    case "/":
      return razdelit(first, second);
  }
};

const changeFirst = (num) => (first = num);
const changeSecond = (num) => (second = num);
const changeOper = (num) => (oper = num);
const test = (num) => (display.textContent = num);
const clear = () => {
  first = "";
  second = "";
  oper = "";
  result = undefined;
  displayed = "0";
  currentMode = "firstMode";
  updateUI();
};

const updateUI = () => {
  if (result) {
    displayed = first + oper + second + "=" + result;
  } else {
    displayed = first + oper + second;
  }
  display.textContent = displayed;
};

numbers.addEventListener("click", (e) => {
  if (e.target !== numbers) {
    switch (currentMode) {
      case "firstMode":
        first += e.target.textContent;
        updateUI();
        break;
      case "secondMode":
        second += e.target.textContent;
        updateUI();
        break;
    }
  }
});

opers.addEventListener("click", (e) => {
  if (e.target !== opers) {
    if (second === "") {
      oper = e.target.textContent;
      currentMode = "secondMode";
      updateUI();
    } else {
      result = calc();
      oper = e.target.textContent;
      first = result;
      result = undefined;
      second = "";
      currentMode = "secondMode";
      updateUI();
      console.log(first, second, oper);
    }
  }
});

controls.addEventListener("click", (e) => {
  if (e.target !== controls) {
    switch (e.target.textContent) {
      case "=":
        result = calc();
        updateUI();
        break;
      case "C":
        clear();
        updateUI();
    }
  }
});
