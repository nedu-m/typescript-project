"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeGetUserInfo = maybeGetUserInfo;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable @typescript-eslint/no-unused-vars */
function carInfo(car) {
  var str = "".concat(car.make, " ").concat(car.model, " ").concat(car.year);
  car.chargeVoltage;
  if (typeof car.chargeVoltage !== 'undefined') str += "// ".concat(car.chargeVoltage, "v");
  return str;
} // carInfo({
//   make: 'Ford',
//   model: 'Focus',
//   year: 2020,
//   chargeVoltage: 1.6,
//   color: 'red'
// })


var myCar = {
  make: 'Ford',
  model: 'Focus',
  year: 2020,
  chargeVoltage: 1.6,
  color: 'red'
}; //Union Types

function flipCoin() {
  return Math.random() > 0.5 ? 'heads' : 'tails';
}

var outcome = flipCoin();
console.log(outcome); //Type Aliases

/**
 * CLEANED UP version
 */
function maybeGetUserInfo() {
  // implementation is the same in both examples
  if (Math.random() > 0.5) {
    return ["success", {
      name: "Mike North",
      email: "mike@example.com"
    }];
  } else {
    return ["error", new Error("The coin landed on TAILS :(")];
  }
}

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg) {
  return arg;
} // POSITIVE test cases (must pass)


isJSON("hello");
isJSON([4, 8, 15, 16, 23, 42]);
isJSON({
  greeting: "hello"
});
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({
  a: {
    b: [2, 3, "foo"]
  }
}); // NEGATIVE test cases (must fail)
// @ts-expect-error - this is a valid JSON value, but not a valid type

isJSON(function () {
  return "";
}); // @ts-expect-error - this is a valid JSON value, but not a valid type

isJSON( /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  return _createClass(_class);
}()); // @ts-expect-error - this is a valid JSON value, but not a valid type

isJSON(undefined); // @ts-expect-error - this is a valid JSON value, but not a valid type

isJSON(new BigInt(143)); // @ts-expect-error - this is a valid JSON value, but not a valid type

isJSON(isJSON); //Function overloads
//Interfaces and type aliases offers the capability to describe call signatures

var add = function add(a, b) {
  return a + b;
};

var subtract = function subtract(a, b) {
  return a - b;
}; //Class modifiers


var Car = /*#__PURE__*/_createClass(function Car(make, model, year) {
  _classCallCheck(this, Car);

  this.make = make;
  this.model = model;
  this.year = year;
});

var myFord = new Car('Ford', 'Focus', 2020);
myFord.make;