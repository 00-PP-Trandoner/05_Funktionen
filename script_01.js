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
// ausgabeName2("Normann"); // call + Argument(e)
// ausgabeName2("Max");
// ausgabeName2("Michelle")

// Funktion mit Parameter(n) !!!
function ausgabeName2(firstName) {
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02c *****/

// 2c. Mehrere Parameter / Argumente

// ausgabeNamenParams("Max","Mütze");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Name?"));

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!"); 
}


/***** Funktionen 03a *****/

// 03a. Vorbereitung -Trennen der Funktionalitäten

// Postulat: one function = one job (uncle Bob)

// SRP single responsibility principleb

ausgabeNamenParams2("Max","Mütze");

function ausgabeNamenParams2(firstName, familyName){

    //1. Funktionalität: string composing
    const GAP = "  ";
    let outputStr = "Hallo " + GAP + firstName + GAP + familyName + "!"
    // console.log("Hallo " + firstName + " " + familyName + "!");

    // 2. Funktionalität: string output 

    console.log(outputStr);

}