const sum = (a, b) => a + b;

const minus = (a, b) => a - b;

const umnozh = (a, b) => a * b;

const razdelit = (a, b) => a / b;

let first;
let second;
let oper;

const operate = (first, second, oper) => {
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
