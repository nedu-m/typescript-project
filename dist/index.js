"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;

function init() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  var form = document.querySelector("form");
  form.addEventListener("submit", submitHandler);
}

function submitHandler(e) {
  e.preventDefault();
  var a = document.querySelector("input[name='a']");
  var b = document.querySelector("input[name='b']");
  var result = add(Number(a.value), Number(b.value));
  var resultElement = document.querySelector("p");

  if (resultElement) {
    resultElement.textContent = result.toString();
  }
}

function add(a, b) {
  return a + b;
}

init();