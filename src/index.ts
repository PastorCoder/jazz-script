

let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;
let level; //type is assumed to be "any"





// when initialized annotation can be removed 
let saler  = 123_456_7890;
let courses = "Typescripts";
let is_publishing = true;
let levels; //type is assumed to be "any"

//--------------------------------------------------------------------------------------------------------------------

let number = []; //this is type any
let numbers: number[] = []; //this is type number[]

numbers.forEach(n => n.toPrecision);
console.log(numbers)
   


//--------------------------------------------------------------------------------------------------------------------

// Tuple 
let user: [number, string] = [1, "jx"];
user[0].toLocaleString;
user[1].matchAll;

user.push(1)



//--------------------------------------------------------------------------------------------------------------------

//----Tuple----
// Internally tuples are represented using plain javascript array

//restrict your tutples to only two values



//Enum represents a list of related constants

const small = 1;
const medium = 2;
const large = 3;

// we can use Enum to replace the constants above


//use PascalCase
enum Size { Small = 1, Medium, Large }; // tsc will set Medium and Large to 2 and 3 respectively
enum Size { SmallOne = "s", MediumOne = "m", LargeOne = "l" }; // if we use letters we have to set each one

let mySize: Size = Size.Medium;

console.log(mySize)


//************************************************************************************************** */

//The code above will e very verbose in index.js when compiled, but if we define enum as const index.js will produce a concise code:
const enum SizeOne { Small = 1, Medium, Large }; // tsc will set Medium and Large to 2 and 3 respectively
const enum SizeOne { SmallOne = "s", MediumOne = "m", LargeOne = "l" }; // if we use letters we have to set each one

let mySizeTwo: Size = Size.Medium;

console.log(mySizeTwo);





//--------------------------------------------------------------------------------------------------------------------




//------Function------


// function calculateTax(income: number, taxYear: number): number {
//     if (income < taxYear) 
//         return income * 1.2;
//     return income * 1.3
// };
// calculateTax(10_000, 2022); //two parameters must be supplied here

function calculateTax(income: number, taxYear = 2022): number {
    if ((taxYear || 2022) < 2022) 
        return income * 1.2;
    return income * 1.3
}

calculateTax(10_000);//you can supply only one parameter here

/**(taxYear || 2022) < 2022)  and (income: number, taxYear = 2022) is doing the same work in the sense that they 
are trying to give taxYear a value and not allow it defaukt to undefined. iether can be used like this: */
function calculateTaxTwo(income: number, taxYear = 2022): number {
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.3
}
 
calculateTaxTwo(10_000);//you can supply only one parameter here




//--------------------------------------------------------------------------------------------------------------------


//----Object---

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Jx",
    retire: (date: Date) => {
        console.log(date);
    }
}









//--------------------------------------------------------------------------------------------------------------------


//----Type Aliases---


type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employeeTwo: Employee = {
    id: 1,
    name: "Jx",
    retire: (date: Date) => {
        console.log(date);
    }
}







//--------------------------------------------------------------------------------------------------------------------


//----Union Types---

//with union types we can give a variable or a function more than one type


function kgToLbs(weight: number | string): number {
    
    //Narrowing
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};

kgToLbs(10);
kgToLbs("10kg");




//--------------------------------------------------------------------------------------------------------------------


//----Intersection Types---

type Draggable = {
    drag: () => void
};


type Resizeable = {
    resize: () => void
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => {}
}



//--------------------------------------------------------------------------------------------------------------------


//----Literal Types---

//Literal means exact or specific

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";












//--------------------------------------------------------------------------------------------------------------------


//----Nullable Types---

function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola")
};


greet(null);