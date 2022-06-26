"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function printContactInfo(info) {
  console.log(info);
  console.log(info.email);
}

var painter = {
  name: 'Pablo Picasso',
  email: 'pp@mail.com',
  age: 29
};
printContactInfo(painter);