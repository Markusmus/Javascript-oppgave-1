// oppgave 1

let stringText = "This is a string for spider";
console.log(stringText);

let stringNumber = 50;
console.log(stringNumber);

let stringTrue = true;
console.log(stringTrue);

let stringArray = ["red", "green", "blue"];
console.log(stringArray);

let lap1 = 5;

let lap2 = 10;

console.log(lap1 + lap2);
console.log(lap1 - lap2);
console.log(lap1 / lap2);
console.log(lap1 * lap2);

let laps = 5;

laps++;
laps--;
laps += 5;
laps -= 5;

console.log(laps);

// OPPGAVE 4

// Skriv en IF/ELSE-betingelse som sjekker følgende:
// 1. At userName ikke er tom ("").
// 2. At userAge er 18 eller eldre.
// 3. At userIsBlocked er false.

// (TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

// - Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
// userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en
// velkomstmelding med console.log.

// - Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
// med console.log.

// Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din
// håndterer alle tilfeller korrekt.
// ******************************************************************************/

let userName = "ole";
let userAge = 17;
let userIsLoggedIn = true;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her

// if username AND userAge is empty, they will be userIsLoggedIn not logged in if its empty if its filled they will be logged inn
// (userName && userAge) || userIsLoggedIn

// userName And userAge is empty or not 18 the userisblocked to get in

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  console.log("Du er logget på");
} else {
  console.log("Du er blokkert for logge på");
}

// userIsLoggedIn AND goTopage is false you will get a message that something is wrong with logging in if its true then you will logged in to a page

if (userIsLoggedIn && goToPage !== "") {
  console.log("you are on you're way to a page");
} else {
  console.log("there is something wrong with you're log in");
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = true;

// Skriv koden for oppgave 5 her

let melding = userMale === false ? "you are Male" : "You are ";
console.log(userMale);
// oppgave 6

let roomIsClean = true;
let homeWorkIsDone = false;
let hour = 21;

// gjør oppgaven her

// roomisclean and homeworkisdone du kan spille vist klokken er over 21 så kan du ikke spele eller vist rommet er ikke ryddet eller leksene ikke er gjort

if (roomIsClean === true && homeWorkIsDone !== false)
  console.log("Du kan spillet");
else console.log("Du må rydde rommet eller gjør lekser");
if (hour >= 21) console.log("Du kan spille");
else console.log("legge tid");
