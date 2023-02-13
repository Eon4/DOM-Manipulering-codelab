/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// document.getElementById("redFigure");

// console.log("redFigure");

//MAN FÅR ET SPECIFIKT ELEMENT MED EN MASSE INFO VED AT KIGGE PÅ CONSOLE
console.log(document.getElementById('redFigure'));


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/

console.log(document.getElementById('redFigure').style.backgroundColor  = "blue");
console.log(document.getElementById('yellowFigure').style.backgroundColor  = "blue");

// document.getElementById("myP2").style.color = "blue"; DENNE ÆNDRE KUN FARVEN PÅ TEKSTEN



/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/
const something = document.getElementById('opgaveTwo');

let myHeadline = document.createElement('h2');
myHeadline.innerHTML = 'Opgave 2.1 løsning';
console.log(myHeadline);

let myParagraph = document.createElement('p');
myParagraph.innerHTML = 'Jeg har løst opgave 2.1';
console.log(myParagraph);


// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/
const purpleCircles = document.getElementsByClassName("purpleFigures myFigure")

console.log(document.getElementsByClassName('purpleFigures'));


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/
// console.log(Array.from('purpleFigures'));
// let myArray = Array.from('purpleFigures');
// myArray.map((myElement) => {
//     myElement.style.backgroundColor = "red";
// });

const myArray = Array.from(purpleCircles)
console.log(myArray)
myArray.map((myArray) => {
    myArray.style.backgroundColor = "red";
    myArray.children[0].innerHTML = Text = "RED";
});

/* opgave 3.3
Brug myLiveList til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/

//SE OPGAVE 3.2

/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her




//ekstra 
// console.log(document.createElement("<h2>Opgave 2.1 løsning</h2>"));
// console.log(document.createTextNode("Opgave 2.1 løsning"));


// let myArray = Array.from('Opgave 2');

// console.log(document.getElementById('opgaveTwo'));

// const myLiveList = document.createElement("h1");
