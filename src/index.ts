let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;
let level; //type is assumed to be "any"





// when initialized annotation can be removed 
let saler  = 123_456_7890;
let courses = "Typescripts";
let is_publishing = true;
let levels; //type is assumed to be "any"


let number = []; //this is type any
let numbers: number[] = []; //this is type number[]

numbers.forEach(n => n.toPrecision);
console.log(numbers)
    

// Tuple 
let user: [number, string] = [1, "jx"];
user[0].toLocaleString;
user[1].matchAll;

user.push(1)


// Internally tuples are represented using plain javascript array

//restrict your tutples to only two values
