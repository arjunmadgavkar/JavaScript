// Creating Objects
class A {
    constructor(){}
    doSomething(){
        console.log("I'm A");
    }
}
function B() {
    this.doSomething = function() {
        console.log("I'm B");
    }
}
console.log("-----------------------------------------------------");
console.log("Creating Objects");
console.log("-----------------------------------------------------");
let a = new A();
a.doSomething();
let b = new B();
b.doSomething();
console.log();

// Sharing Basic Functions between Objects
function Cool() {
    this.doSomething = function(){
        console.log("I'm cool");
    }
    this.shared = function() {
        shared();
    } 
}
function Square() {
    this.doSomething = function(){
        console.log("I'm a square");
    }
    this.shared = function() {
        shared();
    }
}
function shared() {
    console.log("I'm a shared function.");
}
console.log("-----------------------------------------------------");
console.log("Sharing Basic Functions between Objects");
console.log("-----------------------------------------------------");
let cool = new Cool();
let square = new Square();
cool.shared();
square.shared();
console.log();

// Sharing functions that use this between objects
function Insider(value) {
    this.value = value;
    this.printValue = function(){
        console.log("I'm an insider and my value is " + this.value);
    }
    this.increaseBy10 = function() {
        increaseBy10.apply(this);
    }
}
function Outsider(value) {
    this.value = value;
    this.printValue = function(){
        console.log("I'm an outsider and my value is " + this.value);
    }
    this.increaseBy10 = function() {
        increaseBy10.apply(this);
    }
}
function increaseBy10() {
    this.value = this.value + 10;
}
console.log("-----------------------------------------------------");
console.log("Sharing functions that use this between objects");
console.log("-----------------------------------------------------");
let insider = new Insider(0);
let outsider = new Outsider(90);
insider.increaseBy10();
outsider.increaseBy10();
insider.printValue();
outsider.printValue();
console.log();

// Sharing pure functions between objects
function Pure1(value) {
    this.value = value;
    this.printValue = function(){
        console.log("I'm an Pure1 and my value is " + this.value);
    }
    this.increaseValue = function(valueToIncreaseBy) {
        this.value = increaseValue(this.value, valueToIncreaseBy);
    }
}
function Pure2(value) {
    this.value = value;
    this.printValue = function(){
        console.log("I'm an Pure1 and my value is " + this.value);
    }
    this.increaseValue = function(valueToIncreaseBy) {
        this.value = increaseValue(this.value, valueToIncreaseBy);
    }
}
function increaseValue(originalValue, valueToIncreaseBy) {
    return originalValue + valueToIncreaseBy;
}
console.log("-----------------------------------------------------");
console.log("Sharing pure functions between objects");
console.log("-----------------------------------------------------");
let pure1 = new Pure1(0);
let pure2 = new Pure2(1000);
pure1.increaseValue(500);
pure2.increaseValue(500);
pure1.printValue();
pure2.printValue();
console.log();
