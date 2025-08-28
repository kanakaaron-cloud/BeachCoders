let farmCow: string = "Cow"; 
let numCows: number = 8 ; 
let isActive: boolean = true ; 

console.log(farmCow); 

let scores: number [] = [8, 9, 10]; 
interface Farmer {
     name: string; 
     age: number
}; 

const farmerJohn: Farmer = {
    name: "John",
    age: 35, 
};

function greetFarmer( farmer: Farmer ) {
    console.log (`Hello, ${ farmer.name}`); 
}
greetFarmer(farmerJohn); 