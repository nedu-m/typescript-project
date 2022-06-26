/* eslint-disable @typescript-eslint/no-unused-vars */
function carInfo(car: { 
  make: string,
  model: string,
  year: number,
  chargeVoltage?: number,
  // color? : string,
}) {
  let str = `${car.make} ${car.model} ${car.year}`
  car.chargeVoltage

  if (typeof car.chargeVoltage !== 'undefined')
    str += `// ${car.chargeVoltage}v`
  
  return str
}

// carInfo({
//   make: 'Ford',
//   model: 'Focus',
//   year: 2020,
//   chargeVoltage: 1.6,
//   color: 'red'
// })

const myCar = {
  make: 'Ford',
  model: 'Focus',
  year: 2020,
  chargeVoltage: 1.6,
  color: 'red'
}

//Union Types
function flipCoin(): string | number {
  return Math.random() > 0.5 ? 'heads' : 'tails';
}

const outcome = flipCoin()
console.log(outcome)

//Type Aliases
export type UserContactInfo = {
  name: string,
  email: string
}

// @filename: with-aliases.ts
type UserInfoOutcomeError = ["error", Error]
type UserInfoOutcomeSuccess = [
  "success",
  { name: string; email: string }
]
type UserInfoOutcome =
  | UserInfoOutcomeError
  | UserInfoOutcomeSuccess

/**
 * CLEANED UP version
 */
export function maybeGetUserInfo(): UserInfoOutcome {
  // implementation is the same in both examples
  if (Math.random() > 0.5) {
    return [
      "success",
      { name: "Mike North", email: "mike@example.com" },
    ]
  } else {
    return [
      "error",
      new Error("The coin landed on TAILS :("),
    ]
  }
}


type JSONPrimitive = string | number | boolean | null
type JSONObject = { [key: string]: JSONValue}
type JSONArray = JSONValue[]
type JSONValue = JSONObject | JSONArray | JSONPrimitive

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg: JSONValue) { return arg }

// POSITIVE test cases (must pass)
isJSON("hello")
isJSON([4, 8, 15, 16, 23, 42])
isJSON({ greeting: "hello" })
isJSON(false)
isJSON(true)
isJSON(null)
isJSON({ a: { b: [2, 3, "foo"] } })

// NEGATIVE test cases (must fail)
// @ts-expect-error - this is a valid JSON value, but not a valid type
isJSON(() => "")
// @ts-expect-error - this is a valid JSON value, but not a valid type
isJSON(class {})
// @ts-expect-error - this is a valid JSON value, but not a valid type
isJSON(undefined)
// @ts-expect-error - this is a valid JSON value, but not a valid type
isJSON(new BigInt(143))
// @ts-expect-error - this is a valid JSON value, but not a valid type
isJSON(isJSON)

//Function overloads
//Interfaces and type aliases offers the capability to describe call signatures
interface TwoNumberCalculation {
  (a: number, b: number): number
}
type TwoNumberCalc = (a: number, b: number) => number

const add: TwoNumberCalculation = (a, b) => a + b
const subtract: TwoNumberCalc = (a, b) => a - b

//Class modifiers
class Car {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}
}

const myFord = new Car('Ford', 'Focus', 2020)
myFord.make

//Type guards
interface CarLike {
  make: string,
  model: string,
  year: number
}

let maybeCar: unknown

function isCarLike(
  valueToCheck: any
): valueToCheck is CarLike {
  return (
    valueToCheck &&
    typeof valueToCheck === "object" &&
    "make" in valueToCheck &&
    typeof valueToCheck.make === "string" &&
    "model" in valueToCheck &&
    typeof valueToCheck.model === "string" &&
    "year" in valueToCheck &&
    typeof valueToCheck.year === "number"
  )
}

if (isCarLike(maybeCar)) {
  maybeCar
}