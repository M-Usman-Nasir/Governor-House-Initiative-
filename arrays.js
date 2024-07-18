var array1 = [5, 6, 7];
//correct syntax
console.log(array1[1]);
//correct syntax
var array2 = [1, 2, 3];
//alternative correct syntax
var array3 = [];
//correct syntax to define an empty array
// let array4: number[] = new number[2];
//error
var array5 = [];
array5.push(1234);
//dynamically adding
var myData;
console.log(typeof myData);
var myData1 = "Muhammad Fasih";
myData = 20;
console.log(myData1);
// const myData2;
// console.log(myData2);
var ab = 5;
var bc = 2;
var cd = --ab + bc++ * ab++;
console.log(ab + bc + cd);
var myNum = 10;
// console.log(++myNum);
var data1 = 11;
var data2 = data1 % 3 === 2;
var data3 = data1 > 11 || data2;
console.log(data3);
// console.log(myMessage);
var myMessage = "Hello World";
// console.log(nonexistentVariable);
// ReferenceError: nonexistentVariable is not defined
var num = 10;
var str = "hello";
// let result: number = num + str;
// Type error: Cannot convert type 'string' to 'number'
var myName = "Muhammad Fasih";
myName = "Salman Shahid";
console.log("myName");
var myData4 = false;
myData = "10";
console.log(myData4);
var myMessage1 = "Hello World";
var num1 = 8;
console.log(myMessage1.length + num1);
var myName1 = "Muhammad Fasih".charAt(4).toUpperCase();
console.log(myName1);
var myMessage2 = "" ? "hello" : "world";
var letter = myMessage2.charAt(1).toUpperCase();
console.log(letter);
var myMessage3 = "";
if (myMessage3) {
    myMessage3 += "Hello";
}
else {
    myMessage3 += "World";
}
// const abc: boolean = myMessage.includes("e");
// myMessage3 = ""
// console.log(abc || !myMessage3);
var myData5;
myData5 = "Hello World";
myData5 = 10;
myData5 = false;
console.log(myData5);
// let myColor: "Blue" | "Green" | "Red";
// myColor = "blue";
// console.log(myColor);
var myName12 = "Muhammad Fasih";
var myAge1 = 20;
if (myAge1 > 20) {
    console.log(myName12.toUpperCase());
}
else {
    console.log(myName12.toLowerCase());
}
var as = 10;
var as = 12;
console.log(as);
var myName11 = "muhammad fasih";
myName11.slice(0).toUpperCase();
console.log(myName11);
var aa = 5;
var bb = "10";
console.log(aa + bb + aa);
if (!(10 > 10 && 5 < 2) && (6 > 3 || 8 < 4)) {
    console.log("Hello");
}
else {
    console.log("World");
}
var directions = 3;
switch (directions) {
    case 1: console.log("Up");
    case 2: console.log("Down");
    case 3: console.log("Left");
    case 4:
        console.log("Right");
        break;
    default: console.log("Select num between 2-4");
}
// let aaa: number = 5;
// const bbb: number = 6;
// const ccc: number = !(aaa > bbb || bbb > aaa) ? aaa * b : aaa++  + bbb ;
// console.log(aaa + bbb + ccc);
var message = 0 ? "Hello" : "World";
var name11 = "" ? "Fasih" : "Salman";
console.log(name11, message);
var myName13 = "Muhammad Fasih";
if (myName13.length === 13) {
    console.log("Hello");
}
else {
    console.log("World");
}
var myAge2 = 20;
if (myAge2 > 18) {
    var message_1 = "You can drive a car";
}
else {
    var message_2 = "You cannot drive a car";
}
console.log(message);
