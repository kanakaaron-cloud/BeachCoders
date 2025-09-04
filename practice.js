// printing to console
console.log("hello world");

// defining variables
let treeHeight = 72;
let myunits = "inches"; 
let eifeiltower = 12996; 
let statueofliberty = 3661; 
const conversion = 2.54;

function inTocm (inches){
    let cm = inches * conversion; 
    myunits = "cm"; 
    return cm; 
    console.log ("inside");
    console.log("tree height' " + treeHeight);
    console.log(`units' ${myunits}`);
}
let convertedCM = inTocm(treeHeight); 
console.log("-------");
console.log("converted tree height' " + convertedCM); 
console.log(`units' ${myunits}`);

let eifeilcm = inTocm(eifeiltower); 
console.log("converted eifeil tower height' " + eifeilcm); 
console.log(`units'${myunits}`); 

let statueoflibertycm = inTocm(statueofliberty); 
console.log("'converted statue of liberety height' " +statueoflibertycm); 
console.log(`units'${myunits}`); 

let currenttemp = 62; 

if(currenttemp > 110){
    console.log ("it is a heatseaker"); 
} else {
        console.log ("way too hot"); 

}