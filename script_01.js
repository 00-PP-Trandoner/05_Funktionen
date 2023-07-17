"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsrumpf (Body)  callee
// Funktionsdeklaration 
// function test ()
{
    // console.log("Hallo Tobias");
}

// Funktionsaufruf (call)
// test();


/***** Funktionen 02a *****/

// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen(){} 
// { //<---Kennzeichnet einen CodeBlock!"ANFANG"
    // console.log("Hallo Tobias!")
    // console.log("Hallo Cagri!");
    // let firstName = "Yasmeen";
    // console.log("Hallo " + firstName + "!");
// }//<-- CodeBlock! "ENDE"

// console.log(firstName); //Fehler --> SCOPE! 


/***** Funktionen 02b *****/

// 2b. Parametrisierung + Datenübergabe von AUSSEN


// Argumente sind Daten für Parameter !!!
ausgabeName2("Normann"); // call + Argument(e)
ausgabeName2("Max");
ausgabeName2("Michelle")

// Funktion mit Parametern !!!
function ausgabeName2(firstName) {
    console.log("Hallo " + firstName + "!");
}