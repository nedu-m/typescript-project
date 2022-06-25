"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greet = greet;

function greet(greeting, surname) {
  return greeting + " " + surname;
}

console.log(greet("Hello", "Amigo"));