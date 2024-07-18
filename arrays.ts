let array1 : number[] = [5, 6, 7];
//correct syntax

console.log(array1[1]);
//correct syntax

let array2:Array<number> = [1, 2, 3];
//alternative correct syntax

let array3 : number[] = [];
//correct syntax to define an empty array

// let array4: number[] = new number[2];
//error

let array5: number[] = [];
array5.push(1234);
//dynamically adding

let myData: any
console.log (typeof myData)

let myData1: string = "Muhammad Fasih";
myData = 20;
console.log(myData1)

// const myData2;
// console.log(myData2);

let ab: number = 5;

let bc: number = 2;

const cd: number = --ab + bc++ * ab++;
console.log(ab + bc + cd);

const myNum: number = 10;
// console.log(++myNum);

const data1: number = 11;
const data2: boolean = data1% 3 === 2;
const data3: boolean = data1 > 11 || data2;
console.log(data3);

// console.log(myMessage);
const myMessage: string = "Hello World";

// console.log(nonexistentVariable);
// ReferenceError: nonexistentVariable is not defined

let num: number = 10;
let str: string = "hello";
// let result: number = num + str;
// Type error: Cannot convert type 'string' to 'number'

let myName: string = "Muhammad Fasih";
myName = "Salman Shahid";
console.log("myName");

let myData4: number | boolean = false
myData = "10";
console.log(myData4);

const myMessage1: string = "Hello World";
const num1: number = 8;
console.log(myMessage1.length + num1)

const myName1: string = "Muhammad Fasih".charAt(4).toUpperCase();
console.log(myName1);

let myMessage2: string = "" ? "hello" : "world";
const letter: string = myMessage2.charAt(1).toUpperCase();
console.log(letter);

let myMessage3: string = "";
if (myMessage3) {
  myMessage3 += "Hello";
} else {
  myMessage3 += "World";
}
// const abc: boolean = myMessage.includes("e");
// myMessage3 = ""
// console.log(abc || !myMessage3);

// let myData5;
// myData5 = "Hello World";
// myData5 = 10;
// myData5 = false;
// console.log(myData5);

// let myColor: "Blue" | "Green" | "Red";
// myColor = "blue";
// console.log(myColor);

// var myName12: string = "Muhammad Fasih";
// const myAge1: number = 20;
// if(myAge1 > 20){
// console.log(myName12.toUpperCase());
// }else{
// console.log(myName12.toLowerCase());
// }

// var as: number = 10
// var as: number = 12
// console.log(as);

// const myName11: string = "muhammad fasih";
// myName11.slice(0).toUpperCase();
// console.log(myName11);

// const aa: number = 5;
// const bb: string = "10";
// console.log( aa + bb + aa);

// if( !(10 > 10 && 5 < 2) && (6 > 3 || 8 < 4 )  ){
//     console.log("Hello");
//     }else{
//     console.log("World");
//     }

//     const directions: number = 3;
// switch(directions){
// case 1: console.log("Up");
// case 2: console.log("Down");
// case 3: console.log("Left");
// case 4: console.log("Right");break;
// default: console.log("Select num between 2-4");
// }

// let aaa: number = 5;
// const bbb: number = 6;
// const ccc: number = !(aaa > bbb || bbb > aaa) ? aaa * b : aaa++  + bbb ;
// console.log(aaa + bbb + ccc);

// const message: string = 0 ? "Hello" : "World" ;
// const name11: string = "" ? "Fasih" : "Salman" ;
// console.log(name11, message);

// const myName13: string = "Muhammad Fasih";
// if(myName13.length === 13 ){
// console.log("Hello");
// }else{
// console.log("World");
// }

const myAge2: number = 20;
if(myAge2 > 18 ){
const message1: string = "You can drive a car";
}else{
const message1: string = "You cannot drive a car";
}
console.log(message1);