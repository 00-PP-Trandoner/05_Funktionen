"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsrumpf (Body)  callee
// Funktionsdeklaration 
function test ()
{
    console.log("Hallo Tobias");
}

// Funktionsaufruf (call)
test();


/***** Funktionen 02a *****/

// 2a. Parametrisierung + Datenübergabe von INNEN

ausgabeNamen();

function ausgabeNamen() 
{ //<---Kennzeichnet einen CodeBlock!"ANFANG"
    // console.log("Hallo Tobias!")
    // console.log("Hallo Cagri!");
    let firstName = "Yasmeen";
    console.log("Hallo " + firstName + "!");
}//<-- CodeBlock! "ENDE"

// console.log(firstName); //Fehler --> SCOPE! 

