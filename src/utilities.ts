import { UserContactInfo } from "./main";

function printContactInfo(info: UserContactInfo) { 
  console.log(info)
  console.log(info.email)
}

const painter = {
  name: 'Pablo Picasso',
  email: 'pp@mail.com',
  age: 29
}

printContactInfo(painter)

