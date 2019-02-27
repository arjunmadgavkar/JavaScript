// Create object 2 ways
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

let a = new A();
a.doSomething();
let b = new B();
b.doSomething();

// Share function between 2 objects
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

let cool = new Cool();
let square = new Square();
cool.shared();
square.shared();
