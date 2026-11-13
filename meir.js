// vist du kommer til klasserommet blir det pizza vist du ikke kommer til klasserommet

let comeToClass = true;
let ticketIsBought = true;
let homeWorkIsDone = true;
let isRaining = false;
let time = 21;

if (comeToClass === true) {
  console.log("Det blir pizza");
} else {
  console.log("Det blir ikke pizza");
}
if (ticketIsBought === false) {
  console.log("Du må kjøpe billet for se film");
} else {
  console.log("Du har kjøpt billet så du kan se film");
}

if (homeWorkIsDone === true && isRaining === false && time <= 20) {
  console.log("Du kan gå tur med hunden");
} else {
  console.log("Du må holde deg hjemme");
}

