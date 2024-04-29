// // primitive types: string | number | bigint | boolean | undefined | null | symbol
// let name: string;
// let age: number | string; // | is a unions, meaning age can be of both type number and string
// age = "twenty"; 
// age = 22;
// let isStudent: boolean;
// let hobbies: string[]; // array of strings
// let role: [number, string]; // tuple
// role = [5,"hello"];
// let anything: any; // allows the variable type to be anything, but NOT RECOMMENDED
// let personName: unknown; // recommended over any, can store any datatype

// // interface keyword
// // good practice to keep first letter capitalized 
// type Person = { // type is an alias. there are two aliases - type and interface
//   name: string;
//   age?: number; // makes the property optional 
//   isStudent: boolean;
// };

// // will complain if missing properties (unless optional) or if properties do not match type
// let person: Person = {
//   name: "Piyush",
//   isStudent: false,
// }

// let lotsOfPeople: Person[]; // array of objects

// let printName: (name: string) => void; // declare function type. takes in a name parameter of type string and returns UNDEFINED. 
// let printName: (name: string) => never; // function doesn't return anything. 

// // type and interfaces are used to describe the structure of objects in typescript
// // Type is a collection of data types, and is more flexible. 
// // interface is a form of syntax and is less flexible. 

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }

// type X = {
//   a: string; 
//   b: number;
// }

// // type can be extended.
// type Y = X & { // in this case, values for X will also be included for Y
//   c: string; 
//   d: number;
// }

// // with return error since a and b are missing (from type X)
// let y:Y = { 
//   c: "efdas",
//   d: 22,
// }

// interface exten

// function printName(name: string) {
//   console.log(name);
// }

// printName("piyush");



function Tutorial() {
  return (
    <div className="Tutorial">Hello world.</div>
  );
}

export default Tutorial;
